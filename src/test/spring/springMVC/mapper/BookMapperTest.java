package springMVC.mapper;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.Books;
import springMVC.po.User;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;
public class BookMapperTest extends BaseTest {
    @Autowired
    @Qualifier("BookMapper")
    private BooksMapper bookMapper;

    @Test
    public void selectByBookName() {
        Books book=bookMapper.selectByBookName("英语四级词汇");
        System.out.println(book);

    }
    @Test
    public void queryBook() {

        List<Books> bookList = bookMapper.queryBook(0,2);

        assertNotNull(bookList);
        assertEquals(2, bookList.size());
        for (int i = 0; i < bookList.size(); i++)
            System.out.println(bookList.get(i));
        System.out.println("ok");

    }

    @Test
    public void insert() {
        Books book= new Books();
        Date date= new Date();
        date.setTime(2000/3/27);
        book.setBookid(9);
        book.setWordNum(20);
        book.setCreatetime(date);
        book.setPublisher("旺旺先背");
        book.setBookinf("初中");
        book.setAuthorname("旺旺");
        book.setBookname("人教版初中七年级词汇（下）");
        book.setBookImg("/resources/book_images/初中09.png");
        bookMapper.insert(book);
    }

//    @Test
//    public void testQueryBookListAndCount() {
//        Books book = new Books();
//        User user=new User();
//        user.setUserid(1);
//        List<User> users=new ArrayList<>();
//        users.add(user);
//        book.setUsers(users);
//
//        List<Books> bookList = bookMapper.findUserBooks(book,1,2);
//        for (int i = 0; i < bookList.size(); i++)
//            System.out.println("书名：" + bookList.get(i).getBookname());
//
//        int count = bookMapper.queryBookCount(book);
//        System.out.println("书籍总数：" + count);
//    }
}