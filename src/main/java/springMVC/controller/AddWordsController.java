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
public class AddWordsController {
    @Autowired
    ReciteWordsService reciteWordsService;

    /*
    添加生词进生词本
     */
    @RequestMapping("/addWords")
    @ResponseBody
    public Map<String, Object> parse(HttpServletRequest req, HttpServletResponse resp){

        System.out.println("添加单词");

        ArrayList<WordInfo> newword =null;
        String word=req.getParameter("word");
//        System.out.println(word);

        Map<String,Object> model=new HashMap<String,Object>();

        User user = (User) req.getSession().getAttribute("user");
//        System.out.println(user);

        try {
            newword = reciteWordsService.queryByWord(user.getUserid(),word);
//            System.out.println(newword);

            if( newword.isEmpty()){//IsEmpty()是Java中用于判断某种容器是否有元素的系统库函数。
                model.put("success",true);
                Prelearningword newwords=new Prelearningword();
                newwords.setUserid(user.getUserid());
                newwords.setEnglishword(word);
                newwords.setNextdays(0);
                newwords.setAdddays(0);
                reciteWordsService.save(newwords);
            }else {
                model.put("success",false);
                model.put("errMsg","此单词已存在生词本");
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
