package springMVC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import springMVC.po.Prelearningword;
import springMVC.po.User;
import springMVC.po.WordInfo;
import springMVC.service.ReciteWordsService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/recite")
public class ReciteWordsController {
    @Autowired
    ReciteWordsService reciteWordsService;
    /*
        背单词
         */
    @RequestMapping("/random")
    @ResponseBody//将java对象转为json格式的数据
    public Map<String, Object> random(HttpServletRequest request){

        System.out.println("随机");
        ArrayList<WordInfo> prewords=null;
        Map<String,Object> model=new HashMap<String,Object>();
        User user = (User) request.getSession().getAttribute("user");
        System.out.println(user);


        try {
            prewords=reciteWordsService.queryPrelearningWords(user.getUserid());//随机查询一个单词
            System.out.println(prewords);
            model.put("success",true);
            model.put("pwords",prewords);
        } catch (Exception e) {
            //操作失败
            System.out.println("操作失败");
            e.printStackTrace();
            model.put("success",false);
            model.put("errorMsg",e.getMessage());
        }

        return model;
    }

    /*
    解析
     */
    @RequestMapping("/parse")
    @ResponseBody
    public Map<String, Object> parse(HttpServletRequest req, HttpServletResponse resp){

        System.out.println("解析");

        String words = req.getParameter("words");
//        System.out.println(words);
        int nextday = toInt(req.getParameter("nextday"));
//        System.out.println(nextday);
        ArrayList<WordInfo> prewords=null;
        Map<String,Object> model=new HashMap<String,Object>();

        User user = (User) req.getSession().getAttribute("user");
//        System.out.println(user);

        Prelearningword oldwords = new Prelearningword();
        oldwords.setUserid(user.getUserid());
        oldwords.setEnglishword(words);
        oldwords.setNextdays(nextday);
        oldwords.setAdddays(0);

        try {
            prewords=reciteWordsService.queryByWord(user.getUserid(),words);
            reciteWordsService.update(oldwords);
//            System.out.println("1");
//            System.out.println(prewords);
            model.put("success",true);
            model.put("pwords",prewords);
//            Set<String> set = hashMap.keySet();
//            for (String key : set) {
//                System.out.println("key:" + key + ", value:" + hashMap.get(key));
//            }
        } catch (Exception e) {
            //操作失败
            e.printStackTrace();
            model.put("success",false);
            model.put("errorMsg",e.getMessage());
        }

        return model;
    }


    private int toInt(String nextday) {
        Integer integer = new Integer(nextday);
        return integer.parseInt(nextday);
    }
}
