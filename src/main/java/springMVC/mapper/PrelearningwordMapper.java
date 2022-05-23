package springMVC.mapper;

import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import springMVC.po.*;

import java.util.ArrayList;
import java.util.List;

@Repository("PrelearningwordMapper")
public interface PrelearningwordMapper {
    /*
    已学单词数量
     */
    @Select(" SELECT COUNT(*) FROM prelearningword\n" +
            "where userId=#{userId} and nextDays!=0")
    public int queryLWordNum(int userId);//count返回计数
    /*
    未学单词数量
     */
    @Select(" SELECT COUNT(*) FROM prelearningword where userId=#{userId} and nextDays=0")
    public int queryULWordNum(int userId);
    /*
    判断用户一个单词是否存在1，0
     */
    @Select(" SELECT COUNT(*) FROM prelearningword where userId=#{0} and englishWord=#{1}")
    public int queryWordNum(@Param("0")int userId,@Param("1")String englishWord);
    /*
    判断用户一个单词是否学过
    */
    @Select(" SELECT COUNT(*) FROM prelearningword where userId=#{0} and englishWord=#{1} and nextDays!=0")
    public int iflearned(@Param("0")int userId, @Param("1")String englishWord);
    /*
    查询今日需背单词库，随机生成单词
     */
    @Select("SELECT *\n" +
            "FROM Word_Info\n" +
            "where Word_Info.userId=#{userid}\n" +
            "order by rand() limit 0,1")
    public ArrayList<WordInfo> findOneWordByRandom(Integer userid);

    /*
    根据单词查询今日需背单词中指定单词
    */
    @Select("SELECT *\n" +
            "FROM Word_Info\n" +
            "where Word_Info.userId=#{userid} and Word_Info.englishWord=#{englishword}")
    public ArrayList<WordInfo> findOneWordByWord(@Param("userid")Integer userid,@Param("englishword")String englishword);

    /*
   从词库里面查询单词
    */
    @Select("SELECT *\n" +
            "FROM word where englishWord=#{englishword}")
    public ArrayList<Word> findLibraryWord(String englishword);

    /*
    添加单词进今日背诵
     */
    @Insert("INSERT INTO prelearningword\n" +
            "VALUES(0,#{userid},#{englishword},#{nextdays},#{adddays})\n")
    public int savePrelearningword(Prelearningword prelearningword);

    /*
    更新程度标记
     */
    @Update("UPDATE prelearningword\n" +
            "SET nextDays=#{nextdays}\n" +
            "WHERE userId=#{userid} and englishWord=#{englishword}")
    public int updatePrelearningword(Prelearningword prelearningword);

    /*
    单词从今日背诵移除
     */
    @Delete("DELETE FROM prelearningword WHERE userId=#{userid} and englishWord=#{englishword}")
    public int deletePrelearningword(@Param("userid")int userid, @Param("englishword")String englishword);

    /*
    根据用户ID查今日需背单词集合
   */
    @Select("select *\n" +
            "from prelearningword\n" +
            "where userID=#{userID}\n")
    public List<Prelearningword> selectPrelearningwordByUid();

    /*
   查询所有需背单词及对应用户
   */
    @Select("select * from prelearningword")
    @Results({
            @Result(id = true,property = "id",column = "id"),
            @Result(property = "userid",column = "userid"),
            @Result(property = "englishword",column = "englishword"),
            @Result(property = "netxtdays",column = "netxtdays"),
            @Result(property = "adddays",column = "adddays"),
            @Result(property = "users",column = "userId",javaType = List.class,
                    many = @Many(select = "springMVC.mapper.UserMapper.selectByPrimaryKey"))//一个需单词属于多个用户(根据用户ID查用户)
    }
    )
    public List<Prelearningword> findPrelearningwordsAndUsers() ;

    int deleteByPrimaryKey(Integer id);

    int insert(Prelearningword record);

    int insertSelective(Prelearningword record);

    Prelearningword selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Prelearningword record);

    int updateByPrimaryKey(Prelearningword record);
}