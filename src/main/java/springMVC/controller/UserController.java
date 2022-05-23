package springMVC.controller;

import it.unimi.dsi.util.XoRoShiRo128PlusRandom;
import org.mybatis.spring.MyBatisSystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springMVC.po.*;
import springMVC.service.PreWordsService;
import springMVC.service.UserService;

import javax.mail.MessagingException;
import javax.mail.NoSuchProviderException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired(required = false)
    private UserService userService;

    @Autowired
    PreWordsService preWordsService;

    public UserController(UserService userService) {
        this.userService=userService;
    }

    /*
    绑定邮箱
   */
    @RequestMapping("/setEmail")
    @ResponseBody
    public Map<String, Object> setEmail(String email,HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();
        if (!email.isEmpty())
        user.setEmail(email);
        try {
            userService.updateUser(user);
            model.put("success", true);
            model.put("user",user);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }
    /*
        设置新密码
       */
    @RequestMapping("/changePW")
    @ResponseBody
    public Map<String, Object> changePassword(String password,HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();
        user.setPassword(password);
        try {
            userService.updateUser(user);
            model.put("success", true);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }
    /*
         判断验证码
       */
    @RequestMapping("/checkCode")
    @ResponseBody
    public Map<String, Object> getEmail(int code,HttpSession session) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        int code1= (int) session.getAttribute("code");//从session中取出验证码
        try {
            if (code1==code){
                model.put("success", true);
                model.put("code", code);
            }
            else{
                model.put("success", false);
                model.put("ErrorMsg", "没对上");
            }
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }
    /*
         发邮件
       */
    @RequestMapping("/getEmail")
    @ResponseBody
    public Map<String, Object> getEmail(String email,HttpSession session) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        try {
            String myEmailAccount = "1971348259@qq.com";//邮件的发送方
            String myEmailPassword = "egvqilcdbughbfaa";//邮箱密码egvqilcdbughbfaa
            String myEmailSMTPHost = "smtp.qq.com";//QQ网址
            String receiveMailAccount = email;

            Properties props = new Properties();                    // 参数配置
            props.setProperty("mail.transport.protocol", "smtp");   // 使用的协议（JavaMail规范要求）
            props.setProperty("mail.smtp.host", myEmailSMTPHost);   // 发件人的邮箱的 SMTP 服务器地址
            props.setProperty("mail.smtp.auth", "true");// 需要请求认证

            Session session2 = Session.getInstance(props);
            session2.setDebug(true);

            //随机四位数验证码
            XoRoShiRo128PlusRandom xoroRandom = new XoRoShiRo128PlusRandom();
            int RandomCode = xoroRandom.nextInt(9999 - 1000) + 1000;
            session.setAttribute("code",RandomCode);//验证码放入session
            System.out.println(RandomCode);

            // 3. 创建一封邮件
            MimeMessage message = new MimeMessage(session2);
            // 2. From: 发件人（昵称有广告嫌疑，避免被邮件服务器误认为是滥发广告以至返回失败，请修改昵称）
            message.setFrom(new InternetAddress(myEmailAccount, "雯", "UTF-8"));
            // 3. To: 收件人（可以增加多个收件人、抄送、密送）
            message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(receiveMailAccount, "旺旺用户", "UTF-8"));
            // 4. Subject: 邮件主题（标题有广告嫌疑，避免被邮件服务器误认为是滥发广告以至返回失败，请修改标题）
            message.setSubject("旺旺，欢迎你", "UTF-8");
            // 5. Content: 邮件正文（可以使用html标签）（内容有广告嫌疑，避免被邮件服务器误认为是滥发广告以至返回失败，请修改发送内容）
            message.setContent("你的验证码"+RandomCode, "text/html;charset=UTF-8");
            // 6. 设置发件时间
            message.setSentDate(new Date());
            // 7. 保存设置
            message.saveChanges();

            // 4. 根据 Session 获取邮件传输对象
            Transport transport = session2.getTransport();

            transport.connect(myEmailAccount, myEmailPassword);

            // 6. 发送邮件, 发到所有的收件地址, message.getAllRecipients() 获取到的是在创建邮件对象时添加的所有收件人, 抄送人, 密送人
            transport.sendMessage(message, message.getAllRecipients());

            // 7. 关闭连接
            transport.close();
            model.put("success", true);
        } catch (NoSuchProviderException e) {
            e.printStackTrace();
            model.put("ErrorMsg", e.getMessage());
        } catch (MessagingException e) {
            e.printStackTrace();
            model.put("ErrorMsg", e.getMessage());
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }
    /*
       通过邮箱查找用户
       */
    @RequestMapping(value ="/findUserByE",produces = "application/json; charset=utf-8")
    @ResponseBody
    public Map<String, Object> getUByE(@RequestParam(value = "email",required = false)String email,HttpSession session) {
        User user;
        HashMap<String, Object> model = new HashMap<String, Object>();
        try {
            user=userService.findUserByE(email);
            session.setAttribute("user",user);//将需要修改密码的用户放入session
            model.put("success", true);
            model.put("user", user);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
    获取用户打卡记录总数
     */
    @RequestMapping("/AllClockNum")
    @ResponseBody
    public Map<String, Object> getALLWordNum(HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        try {
            int ClockNum = userService.getClockNum(user.getUserid());//获取用户打卡记录总数
            model.put("success", true);
            model.put("ClockNum", ClockNum);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
    pageIndex,当前页
    pageSize,一页的最大容量
     */
    @RequestMapping("AllClock")
    @ResponseBody
    public Map<String, Object> AllWord(int pageIndex, int pageSize,HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        if (pageIndex <= 0) pageIndex = 1;
        int recordIndex = (pageIndex - 1) * pageSize;//计算出当前从数据库第几条开始取
        try {
            ArrayList<Clock> clockList=userService.queryClockByPage(user.getUserid(), recordIndex, pageSize);//limit（0,6）0不算
            model.put("success", true);
            model.put("clockList", clockList);
            model.put("user", user);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }
    /*
         保存学习记录（打卡）
           */
    @RequestMapping("/setClock")//请求映射地址
    @ResponseBody//内容写入响应体
    public Map<String, Object> setClock(HttpSession session){
        Map<String, Object> model = new HashMap<>();
        User user = (User) session.getAttribute("user");
        Clock clock=new Clock();
        clock.setNum(user.getWordnum());
        clock.setUserid(user.getUserid());
        clock.setStudytime(new Date());//学习时间
        String context="学习了"+clock.getNum()+"个单词";//描述
        clock.setContext(context);
        user.setWordnum(user.getWordnum()+1);//奖励用户一个生词量
        try {
            Clock record=userService.insertClock(clock);
            userService.updateUser(user);
            model.put("success", true);
            model.put("studyrecord", record);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }
    /*
      获取所有充值记录数量
        */
    @RequestMapping("/orderNum")//请求映射地址
    @ResponseBody//内容写入响应体
    public Map<String, Object> getOrdersNum(HttpSession session){
        Map<String, Object> model = new HashMap<>();
        try {
            int i=userService.OrderNum();
            model.put("success", true);
            model.put("OrdersNum", i);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }
    /*
         获取某几条记录（分页）
        */
    @RequestMapping("/OrderList")//请求映射地址
    @ResponseBody//内容写入响应体
    public Map<String, Object> getOrderList(int pageIndex, int pageSize,HttpSession session){//参数于页面上对应即可
        Map<String, Object> model = new HashMap<>();
        List<Recharge> list=new ArrayList<>();
        if (pageIndex <= 0) pageIndex = 1;
        int recordIndex = (pageIndex - 1) * pageSize;
        User user = (User) session.getAttribute("user");
        try {
            list=userService.getOrderList(user.getUserid(),recordIndex, pageSize);
            model.put("success", true);
            model.put("orderList", list);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;

    }
    /*
       后端产生一条充值记录
     */
    @RequestMapping("/setRC")
    @ResponseBody
    public Map<String, Object> setRC(int num,HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();
        Recharge order=new Recharge();
        Date date=new Date();
//        System.out.println(date);
        int voc=user.getMaxnum();
        order.setUserid(user.getUserid());
        order.setPrice(num);
        order.setVocbefore(voc);
        order.setVocafter(voc+num);
        order.setRetime(date);
        user.setMaxnum(voc+num);
        try {
            int i=userService.insertRC(order);
            userService.updateUser(user);//更新用户最大生词量
            model.put("success", true);
            model.put("num", i);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }
    /*
             设置生词量
            */
    @RequestMapping("/setLWNum")
    @ResponseBody
    public Map<String, Object> setWordNum(int num,HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        user.setWordnum(num);
        try {
            int i=userService.updateUser(user);
            model.put("success", true);
            model.put("num", i);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }

        return model;
    }

    /*
      登录
       */
    @RequestMapping(value ="/login",produces = "application/json; charset=utf-8")
    @ResponseBody
    public Map<String, Object> login(@RequestParam(value = "tel",required = false)String tel,
                        @RequestParam(value = "password",required = false)String password, HttpSession session){

        System.out.println(tel);
        System.out.println(password);

        User user=new User();
        user.setTel(tel);
        user.setPassword(password);
        Map<String,Object> model=new HashMap<String,Object>();

        if (tel!=null && password!=null )  {
                User userDomain=null;
                userDomain= userService.loginIn(user);
                System.out.println(userDomain);
                if (userDomain==null){
                    System.out.println("失败——用户名或者密码出错");
                    model.put("success",false);
                    model.put("errMsg","用户名或者密码出错");
                }else{
                    session.setAttribute("user",userDomain);
                    model.put("success",true);
                    model.put("user",userDomain);
                    System.out.println(userDomain);
                }
        }else{
            System.out.println("失败——用户名密码不能为空");
            model.put("success",false);
            model.put("errMsg","用户名密码不能为空");
        }
        return model;
    }
    /*
      注册
    */
    @RequestMapping("/register")
    @ResponseBody
    public Map<String, Object> register(@RequestParam("tel")String tel,@RequestParam("uname")String uname,
                                        @RequestParam("password")String password) throws IOException {

        Map<String,Object> model=new HashMap<String,Object>();
        System.out.println(tel);
        System.out.println(uname);
        System.out.println(password);

        if( tel!=null &&password!=null && tel.trim().length()!=0 && password.trim().length()!=0){//trim()方法用于删除字符串的头尾空白符。
            //查找该用户名是否已经在custmoert
            if (userService.exist(tel)==null) {
                //该用户名没有被注册过
                User user=new User();
                user.setTel(tel);
                user.setUname(uname);
                user.setPassword(password);
                user.setVocabulary(0);
                user.setMaxnum(60);
                user.setMstate("在线");
                user.setLevel("青铜");
                userService.saveUser(user);
                model.put("success", true);
            }else {
                model.put("success", false);
                model.put("errMsg", "用户名已经存在");
            }
        }else{
            model.put("success",false);
            model.put("errMsg","用户名密码不能为空");
        }
        return model;
    }
    /*
      查找用户
    */
    @RequestMapping("/findInfo")
    @ResponseBody
    public Map<String, Object> findInfoUser(HttpServletRequest request) {
        Map<String, Object> model = new HashMap<String, Object>();
        System.out.println("找用户");
        User user =(User) request.getSession().getAttribute("user");
        if (user!=null) {
            System.out.println(user);
            model.put("success", true);
            model.put("user",user);
        }else{
            model.put("success", false);
        }
        return model;
    }
    /*
     更新头像
     */
    @RequestMapping(value = "/upImg",method = RequestMethod.POST)
    @ResponseBody
    private Map<String, Object> upImg (@RequestParam(value = "imgHead",required = false) MultipartFile head_img, HttpServletRequest request) throws IOException {
        Map<String,Object> model=new HashMap<String,Object>();
        System.out.println("更新头像");

        User user = (User) request.getSession().getAttribute("user");
//        System.out.println(head_img.getOriginalFilename());

        String localPath="C:\\resources\\user_image\\";

        //定义 文件名
        String filename=null;
        //保存数据库的路径
        String sqlPath = null;

        //获得文件类型（可以判断如果不是图片，禁止上传）
        String contentType=head_img.getContentType();
//        System.out.println(contentType);
        //获得文件后缀名
        String suffixName=contentType.substring(contentType.indexOf("/")+1);//indexOf()查找字串中指定字符或字串首次出现的位置,返首索引值
//        System.out.println(suffixName);

//        filename=uuid+"."+suffixName;
        filename=head_img.getOriginalFilename();
//        System.out.println(filename);
        //文件保存路径
        head_img.transferTo(new File(localPath+filename));
        //把图片的相对路径保存至数据库
        sqlPath = "/resources/user_image/"+filename;
//        System.out.println(sqlPath);

        if (suffixName.equals("jpg")||suffixName.equals("jpeg")) {

            User userDomain=new User();
            userDomain.setUserid(user.getUserid());
            userDomain.setImage(sqlPath);
            userService.updateUserImg(userDomain);

            model.put("success",true);
            model.put("url",sqlPath);
            //更新一下session
            user.setImage(sqlPath);
            request.getSession().setAttribute("user",user);
        }else{
            model.put("success", false);
            model.put("errMsg","不符合规定（后缀只能为.jpg/.jpeg）");
        }
        return model;
    }
    /*
    更新昵称和手机号
     */
        @RequestMapping(value = "/changeNick")
        @ResponseBody
        private Map<String, Object> saveMessage(@RequestParam("tel")String tel,@RequestParam("name")String name, HttpServletRequest request, HttpServletResponse response) {
            Map<String,Object> model=new HashMap<String,Object>();
            System.out.println("更新手机号和昵称");
            System.out.println(tel);
            System.out.println(name);
            User user = (User) request.getSession().getAttribute("user");
            String regEx = "[ _`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]|\n|\r|\t";
            Pattern p = Pattern.compile(regEx);
            Matcher m = p.matcher(name);
            if (!m.find()) {
                //User userDomain=new User();
                //userDomain.setUserid(user.getUserid());
                if (!tel.isEmpty()){
                    //判断一下如果不为空再修改,null就是没对象，但是它一定会传回一个字符串，即便是空字符串
                    //userDomain.setTel(tel);
                    user.setTel(tel);
                }

                if (!name.isEmpty()){
                   // userDomain.setUname(name);
                    user.setUname(name);
                }
                userService.updateUser(user);//不用在为了修改专程创建一个对象，从session到保存都使用一个user更加的简洁
                //userService.updateUserTel(userDomain);
                //userService.updateNickname(userDomain);
                //更新一下session
                request.getSession().setAttribute("user",user);
                model.put("success",true);
                //model.put("tel",tel);//如果没改的话这样返回就错了
                //model.put("name",name);
                model.put("tel",user.getTel());
                model.put("name",user.getUname());
            }else{
                model.put("success", false);
                model.put("errMsg","昵称不符合规定（不能包含特殊符号！）");
            }
            return model;
        }
     /*
     针对MyBatisSystemException异常进行处理
     */
    @ExceptionHandler
    public ResponseEntity<String> handle(MyBatisSystemException ex)
    {
        ResponseEntity<String> responseEntity = new ResponseEntity<>
            ("test exception handle", HttpStatus.FORBIDDEN);
        return responseEntity;
    }
}
