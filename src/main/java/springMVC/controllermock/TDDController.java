package springMVC.controllermock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import springMVC.po.User;
import springMVC.service.UserService;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/TDD")
public class TDDController {
    @Autowired(required = false)
    private TDDService tddService;

    public TDDController(TDDService tddService) {
        this.tddService=tddService;
    }

    @RequestMapping(value ="/login",produces = "application/json; charset=utf-8")
    @ResponseBody
    public Map<String, Object> login(@RequestParam(value = "tel",required = false)String tel,
                                     @RequestParam(value = "password",required = false)String password, HttpSession session){

        System.out.println(tel);
        System.out.println(password);

        TDDuser user=new TDDuser();
        user.setTel(tel);
        user.setPassword(password);
        Map<String,Object> model=new HashMap<String,Object>();

        if (tel!=null && password!=null )  {
            TDDuser userDomain= tddService.loginIn(user);
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

}
