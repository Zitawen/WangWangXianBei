package springMVC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.http.client.MockClientHttpResponse;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import springMVC.po.Books;
import springMVC.po.User;
import springMVC.service.BooksService;
import springMVC.utils.DataConvert;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.crypto.Data;
import java.util.*;

@Controller//控制器对象
@RequestMapping(value = {"/book"})
public class BookController {
    @Autowired//关联
    private BooksService bookService;

    public BookController(BooksService bookService) {
        this.bookService = bookService;
    }

    /*
    获取书的总数
     */
    @RequestMapping("/bookNum")//请求映射地址
    @ResponseBody//内容写入响应体
    public Map<String, Object> getBooksNum(HttpSession session){
        Map<String, Object> model = new HashMap<>();

        try {
            int i=bookService.getBookNum();
            model.put("success", true);
            model.put("BooksNum", i);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
    获取书分页
     */
    @RequestMapping("/allbook")//请求映射地址
    @ResponseBody//内容写入响应体
    public Map<String, Object> getAllBooks(int pageIndex, int pageSize,HttpSession session){//参数于页面上对应即可
        Map<String, Object> model = new HashMap<>();
        List<Books> list=new ArrayList<>();
        if (pageIndex <= 0) pageIndex = 1;

        int recordIndex = (pageIndex - 1) * pageSize;

        for (Books books : list) {
            System.out.println(books);
        }
        try {
            list=bookService.getBookList(recordIndex, pageSize);
            model.put("success", true);
            model.put("BookList", list);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;

    }

    /*
    获取当前学习书
     */
    @RequestMapping("/mybook")//请求映射地址
    @ResponseBody//内容写入响应体
    public Map<String, Object> getMyBook(HttpSession session){//参数于页面上对应即可
        Map<String, Object> model = new HashMap<>();
        User user = (User) session.getAttribute("user");
        Books book;
        try {
            book=bookService.getBookByUserId(user.getUserid());
            model.put("success", true);
            model.put("Book", book);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }

    /*
    换书
     */
    @RequestMapping("/changeBook")//请求映射地址
    @ResponseBody//内容写入响应体
    public Map<String, Object> getMyBook(String bookName,HttpSession session){
        Map<String, Object> model = new HashMap<>();
        User user = (User) session.getAttribute("user");
        int result;
        try {
            result= bookService.changeBook(bookName, user.getUserid());
            model.put("success", true);
            model.put("result", result);
        } catch (Exception e) {
            e.printStackTrace();
            model.put("success", false);
            model.put("ErrorMsg", e.getMessage());
        }
        return model;
    }





/////////////////////////////////////////////////////////////////////


    @RequestMapping("/Detail")//请求映射地址
    @ResponseBody//内容写入响应体
    public List<Books> getBookDetail(User user){//参数于页面上对应即可
        List<Books> list=new ArrayList<>();
        list=bookService.getBookDetail(user);

        for (Books books : list) {
            System.out.println(books);
        }
//        mv.addAttribute("book",list);//添加属性给request
//        return "bookDetail";// /WEB-INF/jsp/bookDetail.jsp（通过配置视图解析器，来将逻辑视图转化为实际视图）
        return list;
    }

    @GetMapping("/{id}")
    @ResponseBody//内容写入响应体
    public Books getBookDetail2(@PathVariable int id){//@PathVariable绑定参数
         return bookService.getBookDetail(id);
    }

    @RequestMapping("/Add")
    public String add(@RequestBody Books books){//直接传入book对象
        System.out.println(books);
        return "success";
    }

    @PostMapping("/")
    public String add2(@RequestBody Books books){//直接传入book对象
        System.out.println(books);
        return "success";
    }

    @RequestMapping(value = "/test1",method = RequestMethod.POST)
    public void test1(String username,int id){
        System.out.println(username+":"+id);
    }

    @RequestMapping(value = "/test2",method = RequestMethod.POST)
    public void test2(Books books){
        System.out.println(books);
    }

    @RequestMapping(value = "/test3",method = RequestMethod.POST)
    public void test3(HttpServletRequest request, HttpServletResponse response, HttpSession session){
        System.out.println(request);
        System.out.println(response);
        System.out.println(session);
    }

    @RequestMapping(value = "/test4",produces = "application/json; charset=utf-8")//设定返回值的字符编码
    @ResponseBody//传入json字符串类型
    public Books test4(@RequestBody Books books){
        System.out.println(books);
        Books books1=new Books();
        books1.setBookid(1);
        books1.setBookname("8级");
        books1.setAuthorname("刘晓燕");
        books1.setPublisher("北京大学出版社");
        books1.setWordNum(5500);
        books1.setBookinf("nice");
        return books1;
    }
}
