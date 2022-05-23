package springMVC.controller;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import springMVC.po.User;
import springMVC.po.Winfo;
import springMVC.po.WordInfo;
import springMVC.service.PreWordsService;
import springMVC.service.impl.BookServiceImpl;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/pre")
public class PreWordsController {

    @Autowired
    PreWordsService preWordsService;
    @Autowired
    BookServiceImpl bookService;

    /*
    获取单词总数
     */
    @RequestMapping("/queryNum")
    @ResponseBody
    public Map<String, Object> queryNum(HttpSession session) {
        Map<String, Object> model = new HashMap<>();
        User user = (User) session.getAttribute("user");
        System.out.println(user);
        int wordNum = 0;
        try {
            if (user != null)
                wordNum = preWordsService.queryTodayWordNum(user.getUserid());
            model.put("success", true);
            model.put("recordCount", wordNum);

        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("errMsg", e.getMessage());
        }
        return model;
    }

    /*
    获取未学单词总数
     */
    @RequestMapping("/UlWordNum")
    @ResponseBody
    public Map<String, Object> getUnLWordNum(HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        try {
            int UlWordNum = preWordsService.queryULWordNum(user.getUserid());
            model.put("success", true);
            model.put("recordCount", UlWordNum);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
    获取已学单词总数
     */
    @RequestMapping("/LWordNum")
    @ResponseBody
    public Map<String, Object> getLWordNum(HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        try {
            int UlWordNum = preWordsService.queryLWordNum(user.getUserid());
            model.put("success", true);
            model.put("recordCount", UlWordNum);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
      获取未学单词分页
       */
    @RequestMapping("/queryWord")
    @ResponseBody
    public Map<String, Object> queryWord(int pageIndex, int pageSize,HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        if (pageIndex <= 0) pageIndex = 1;
        int recordIndex = (pageIndex - 1) * pageSize;
        try {
            ArrayList<WordInfo> todayWords = preWordsService.queryTodayLearningByPage(user.getUserid(), recordIndex, pageSize);
            model.put("success", true);
            model.put("todayWordsList", todayWords);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
    获取总单词总数
     */
    @RequestMapping("/AllWNum")
    @ResponseBody
    public Map<String, Object> getALLWordNum(HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        try {
            int UlWordNum = preWordsService.queryAllWordNum(user.getUserid());
            model.put("success", true);
            model.put("recordCount", UlWordNum);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
       获取已学单词分页
        */
    @RequestMapping("/LearnedWord")
    @ResponseBody
    public Map<String, Object> LearnedWord(int pageIndex, int pageSize,HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        if (pageIndex <= 0) pageIndex = 1;
        int recordIndex = (pageIndex - 1) * pageSize;
        try {
            ArrayList<Winfo> learnedWords=preWordsService.queryLearningWByPage(user.getUserid(), recordIndex, pageSize);
            model.put("success", true);
            model.put("WordsList", learnedWords);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
       获取所有单词分页
        */
    @RequestMapping("AWord")
    @ResponseBody
    public Map<String, Object> AllWord(int pageIndex, int pageSize,HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        if (pageIndex <= 0) pageIndex = 1;
        int recordIndex = (pageIndex - 1) * pageSize;
        try {
            ArrayList<Winfo> allWords=preWordsService.queryAllWByPage(user.getUserid(), recordIndex, pageSize);
            model.put("success", true);
            model.put("WordsList", allWords);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
    获取三个数字
     */
    @RequestMapping("/ShowAllNum")
    @ResponseBody
    public Map<String, Object> getALLWNum(HttpSession session) {
        User user = (User) session.getAttribute("user");
        HashMap<String, Object> model = new HashMap<String, Object>();

        try {
            int lWordNum = preWordsService.queryLWordNum(user.getUserid());
            int UlWordNum = preWordsService.queryULWordNum(user.getUserid());
            int UserNum=user.getWordnum();//用户设置单词量
            //书的单词量和书中我学的单词的数量
            int learnedWordNumInBook=bookService.getLearnedBookWordNum(user.getUserid());

            user.setVocabulary(lWordNum);//设置单词量(用户生词)
            model.put("success", true);
            model.put("UlWordNum", UlWordNum);//未学习的单词量
            model.put("lWordNum", lWordNum);//已学的单词量
            model.put("UserNum", UserNum);//用户设定的学习量
            model.put("LWNumInBook",learnedWordNumInBook);//书里面学过的单词
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }
}
