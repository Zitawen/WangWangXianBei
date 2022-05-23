package springMVC.mapper;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import springMVC.po.BooksWordKey;

import java.util.ArrayList;

@Repository("BooksWordMapper")
public interface BooksWordMapper {
    int deleteByPrimaryKey(BooksWordKey key);

    int insert(BooksWordKey record);

    int insertSelective(BooksWordKey record);
    /*
    取出书中所有单词
     */
    @Select("SELECT englishWord \n" +
            "FROM books_word\n" +
            "where bookId=#{0};")
    ArrayList<String> queryWordWByBook(@Param("0") int bookId);

}