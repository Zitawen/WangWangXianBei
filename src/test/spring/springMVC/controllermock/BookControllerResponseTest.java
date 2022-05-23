package springMVC.controllermock;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import springMVC.controller.BookController;
import springMVC.po.Books;
import springMVC.po.User;
import springMVC.service.BooksService;
import springMVC.utils.JsonConvert;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;//静态导入
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class BookControllerResponseTest {

    MockMvc mockMvc;//模拟发出HTTP请求，使用Spring内置的MockMvc类
    @Autowired
    private BooksService bookService;

    @Before
    public void setup(){
        bookService= Mockito.mock(BooksService.class);//mock service对象
        BookController bookController=new BookController(bookService);//实例化controll
        mockMvc = MockMvcBuilders.standaloneSetup(bookController).build();//实例化MockMvc、
    }

    @Test
    public void test1() throws Exception {
//        //在代码里面测请求
//        MockHttpServletRequestBuilder builder= post("/book/test1").param("username","wenwen").param("id","1");
//        mockMvc.perform(builder);
        mockMvc.perform(post("/book/test1")
                .param("username","wenwen")
                .param("id","1"));
    }

    @Test
    public void test2() throws Exception {
        mockMvc.perform(post("/book/test2")
                .param("bookid","1")
                .param("bookname","6级")
                .param("authorname","俞敏洪")
                .param("publisher","清华大学出版社")
                .param("price","20.0")
                .param("bookinf","不错")
                .param("createtime","2020-03-27")
                //可以自动识别yyyy/MM/dd格式的时间字符串并注入Date类型的属性中，但不能识别yyyy-MM-dd等格式的字符串
                .param("users[0].uname","wenwen")
                .param("users[0].password","999"));
    }

    @Test
    public void test3() throws Exception {
        mockMvc.perform(post("/book/test3"));
    }

    @Test
    public void test4() throws Exception {
        String json=
                "{\"bookid\":\"1\",\"bookname\":\"8级\",\"authorname\":\"刘晓燕\",\"publisher\":\"北京大学出版社\",\"price\":\"55.0\",\"bookinf\":\"nice\",\"createtime\":null,\"users\":null,\"serialVersionUID\":\"1\"}";
        String result=mockMvc.perform(post("/book/test4")
                .characterEncoding("UTF-8")
                .contentType(MediaType.APPLICATION_JSON)//接受类型
                .accept(MediaType.APPLICATION_JSON)//返回类型
                .content(json))//传入/book/test4的内容

                .andExpect(status().isOk())// OK(200, "OK")
                .andDo(print())//控制台输出详细信息

                .andReturn().getResponse().getContentAsString();

        System.out.println(result);//返回从/book/test4得到的结果
    }

    @Test
    public void test5() throws Exception {
        String json=
                "[{\"bookid\":\"1\",\"bookname\":\"8级\",\"authorname\":\"刘晓燕\",\"publisher\":\"北京大学出版社\",\"price\":\"55.0\",\"bookinf\":\"nice\",\"createtime\":null,\"users\":null,\"serialVersionUID\":\"1\"}]";

        Books books1=new Books();
        books1.setBookid(1);
        books1.setBookname("8级");
        books1.setAuthorname("刘晓燕");
        books1.setPublisher("北京大学出版社");
        books1.setWordNum(55);
        books1.setBookinf("nice");

        String tel="15180180327";
        String uname="张紫雯";
        User user=new User();
        user.setUname(uname);
        user.setTel(tel);

        List<Books> list=new ArrayList<>();
        list.add(books1);

        given(bookService.getBookDetail(user)).willReturn(list);
        String result=mockMvc.perform(get("/book/test5")
                .characterEncoding("UTF-8")
                .contentType(MediaType.APPLICATION_JSON)//接受类型
                .accept(MediaType.APPLICATION_JSON)//返回类型
                .content(json))//传入/book/test4的内容
//
//                .andExpect(status().isOk())// OK(200, "OK")
                .andDo(print())//控制台输出详细信息

                .andReturn().getResponse().getContentAsString();

        System.out.println(result);//返回从/book/test4得到的结果
    }

    @Test
    public void testJsonPrase() throws Exception {
        List<Books> list=new ArrayList<>();
        Books books1=new Books();
        books1.setBookid(1);
        books1.setBookname("8级");
        books1.setAuthorname("刘晓燕");
        books1.setPublisher("北京大学出版社");
        books1.setWordNum(55);
        books1.setBookinf("nice");
        list.add(books1);

        User user=new User();
        user.setTel("15180180327");
        user.setPassword("998");

        JsonConvert jsonConvert=new JsonConvert();
        System.out.println(jsonConvert.toJson(user));
    }

}