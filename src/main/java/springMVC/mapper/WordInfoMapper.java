package springMVC.mapper;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import springMVC.po.WordInfo;

import java.util.ArrayList;

@Repository("WordInfoMapper")
public interface WordInfoMapper {
    int insert(WordInfo record);

    int insertSelective(WordInfo record);

    @Select(" INSERT INTO prelearningword(id,userId,englishWord,nextDays,addDays) \n" +
            " VALUES(0,#{0},#{1},#{2},#{3})")
    public void save(@Param("0") int userId, @Param("1") String englishWord, @Param("2") int nextDays, @Param("3") int addDays);

    @Select(" DELETE FROM prelearningword WHERE userId=#{0} and englishWord=#{1}")
    public void remove(@Param("0") int userId, @Param("1") String englishWord);

    @Select(" SELECT COUNT(*) FROM word_info where userId=#{0}")
    public int queryTodayWordNum(int userId);

    @Select(" select *\n" +
            "  from word_info\n" +
            "  where userId=#{0}\n" +
            "  limit #{1},#{2}")
    public ArrayList<WordInfo> queryTodayLearningByPage(@Param("0") int userId, @Param("1") int recordIndex, @Param("2") int pageSize);

}