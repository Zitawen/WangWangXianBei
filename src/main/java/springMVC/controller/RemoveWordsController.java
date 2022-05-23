package springMVC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import springMVC.po.Prelearningword;
import springMVC.po.User;
import springMVC.service.ReciteWordsService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Controller
public class RemoveWordsController {
    @Autowired
    ReciteWordsService reciteWordsService;

    /*
    从生词本删除单词
     */
    @RequestMapping("/removeWords")
    @ResponseBody
    public Map<String, Object> parse(HttpServletRequest req, HttpServletResponse resp){

        System.out.println("移除单词");

        int result=0;
        String word=req.getParameter("word");
        //System.out.println(word);

        Map<String,Object> model=new HashMap<String,Object>();

        User user = (User) req.getSession().getAttribute("user");
//        System.out.println(user);

        Prelearningword oldwords=new Prelearningword();
        oldwords.setUserid(user.getUserid());
        oldwords.setEnglishword(word);

        try {
            result=reciteWordsService.remove(oldwords);

            if( result==1){//返回更新行数
                model.put("success",true);
            }else {
                model.put("success",false);
                model.put("errMsg","删除失败");
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
