//package springMVC.controller;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;
//import springMVC.po.Books;
//import springMVC.service.BooksService;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@Controller
//@RequestMapping("/superadmin")
//public class Book2Controller {
//
//    @Autowired
//    @Qualifier("BookServiceImpl")
//    private BooksService bookService;
//
//
//    @RequestMapping(value = "/listbook", method = RequestMethod.GET)
//    @ResponseBody
//    //
//    private Map<String, Object> listArea() {
//        Map<String, Object> modelMap = new HashMap<String, Object>();
//        List<Books> list = new ArrayList<Books>();
//        try {
//            list = bookService.getBookList();
//            modelMap.put("success", true);
//            modelMap.put("rows", list);
//            modelMap.put("total", list.size());
//        } catch (Exception e) {
//            e.printStackTrace();
//            modelMap.put("success", false);
//            modelMap.put("errMsg", e.toString());
//        }
//        return modelMap;
//
//    }
//
//}
