package springMVC.mapper;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class BooksWordMapperTest extends BaseTest {
    @Autowired
    @Qualifier("BooksWordMapper")
    private BooksWordMapper booksWordMapper;

    @Test
    public void queryWordWByBook() {
        ArrayList<String> englishWord=booksWordMapper.queryWordWByBook(1);
        for (int i = 0; i < englishWord.size(); i++)
            System.out.println(i+":" + englishWord.get(i));

    }
}