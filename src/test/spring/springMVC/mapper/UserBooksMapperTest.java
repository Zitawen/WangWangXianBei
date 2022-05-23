package springMVC.mapper;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;

import static org.junit.Assert.*;

public class UserBooksMapperTest extends BaseTest {
    @Autowired
    @Qualifier("BookUserMapper")
    UserBooksMapper userBooksMapper;

    @Test
    public void getBookIdByUserId() {
        int i = userBooksMapper.getBookIdByUserId(1);
        System.out.println(i);

    }

    @Test
    public void changeBookByBookId() {
        int i = userBooksMapper.changeBookByBookId(1,3);
        System.out.println(i);

    }
}