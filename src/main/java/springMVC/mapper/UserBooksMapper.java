package springMVC.mapper;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;
import springMVC.po.UserBooks;
import springMVC.po.UserBooksKey;
@Repository("BookUserMapper")
public interface UserBooksMapper {
    int deleteByPrimaryKey(UserBooksKey key);

    int insert(UserBooks record);

    int insertSelective(UserBooks record);

    UserBooks selectByPrimaryKey(UserBooksKey key);

    int updateByPrimaryKeySelective(UserBooks record);

    int updateByPrimaryKey(UserBooks record);

    /*
    取出用户当前学习书
     */
    @Select("select bookId from user_books where userId = #{userId}")
    int getBookIdByUserId (int userId);

    /*
    换书皮皮皮
     */
    @Update("UPDATE user_books SET bookId = #{0} WHERE userId = #{1}")
    int changeBookByBookId(@Param("1")int userId, @Param("0") int bookId);

}