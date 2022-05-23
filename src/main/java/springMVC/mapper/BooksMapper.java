package springMVC.mapper;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import springMVC.po.Books;

import java.util.List;

@Repository("BookMapper")
public interface BooksMapper {
    /*
    获取书分页
     */
    @Select("select * from books limit #{1},#{2}")
    List<Books> queryBook(@Param("1") int recordIndex, @Param("2") int pageSize);

    @Select("select * from books where bookname = #{name}")
    Books selectByBookName(String name);

    @Select(" SELECT COUNT(*) FROM books")
    int queryBookNum();

    int deleteByPrimaryKey(Integer bookid);

    int insert(Books record);

    int insertSelective(Books record);

    Books selectByPrimaryKey(Integer bookid);

    int updateByPrimaryKeySelective(Books record);

    int updateByPrimaryKey(Books record);
}