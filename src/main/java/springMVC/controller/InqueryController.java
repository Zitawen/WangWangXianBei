package springMVC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import springMVC.po.User;
import springMVC.po.Word;
import springMVC.service.ReciteWordsService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Controller
public class InqueryController {
    @Autowired
    ReciteWordsService reciteWordsService;

    /*
    查询生词
     */
    @RequestMapping("/inquery")
    @ResponseBody
    public Map<String, Object> inquery(HttpServletRequest req, HttpServletResponse resp){

        System.out.println("查询");

        String content= req.getParameter("wenCheck");
//        System.out.println(content);
        ArrayList<Word> prewords=null;
        Map<String,Object> model=new HashMap<String,Object>();

        User user = (User) req.getSession().getAttribute("user");
//        System.out.println(user);

        try {
            prewords=reciteWordsService.queryLibraryWord(content);
//            System.out.println(prewords);
            //System.out.println("!!");
            if(!prewords.isEmpty()){//prewords!=null [] null
                model.put("success",true);
                model.put("pwords",prewords);
//            Set<String> set = hashMap.keySet();
//            for (String key : set) {
//                System.out.println("key:" + key + ", value:" + hashMap.get(key));
//            }
           }else {
                model.put("success",false);
                model.put("errorMsg","没有该单词");
           }
        } catch (Exception e) {
            //操作失败
            e.printStackTrace();
            model.put("success",false);
            model.put("errorMsg",e.getMessage());
        }

        return model;
    }
}

