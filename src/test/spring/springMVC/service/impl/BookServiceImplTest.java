package springMVC.service.impl;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.Books;
import springMVC.po.User;
import springMVC.service.BooksService;
import springMVC.vo.BookExecution;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

//service层测试
public class BookServiceImplTest extends BaseTest {

    @Autowired
    @Qualifier("BookServiceImpl")
    private BooksService booksService;

    @Test
    public void getBookList() {

        List<Books> bookList= booksService.getBookList(0,2);
        assertNotNull(bookList);
        assertEquals(2,bookList.size());
        System.out.println(bookList);
    }

    @Test
    public void changeBook() {
        int i=booksService.changeBook("初中英语全册词汇（牛津版）",1);
        return;
    }

    @Test
    public void getLearnedBookWordNum() {
        System.out.println(booksService.getLearnedBookWordNum(1));
    }


//    @Test
//    public void testGetBookList() {
//        Books book = new Books();
//        User user=new User();
//        user.setUserid(1);
//        List<User> users=new ArrayList<>();
//        users.add(user);
//        book.setUsers(users);
//        //显示第2页，数据库中有3条记录，所以店铺列表为1，总数为3
//        BookExecution se = booksService.getBookList(book, 2, 2);
//        System.out.println("书籍列表数为：" + se.getBookList().size());
//        System.out.println("书籍总数为：" + se.getCount());
//    }
}