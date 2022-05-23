package springMVC.mapper;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import springMVC.po.Winfo;

import java.util.ArrayList;
@Repository("WinfoMapper")
public interface WinfoMapper {
    int insert(Winfo record);

    int insertSelective(Winfo record);

    @Select(" select *\n" +
            "  from Winfo\n" +
            "  where userId=#{0} and nextDays!=0\n" +
            "  limit #{1},#{2}")
    public ArrayList<Winfo> queryLearningWByPage(@Param("0") int userId, @Param("1") int recordIndex, @Param("2") int pageSize);

    @Select(" select *\n" +
            "  from Winfo\n" +
            "  where userId=#{0} and nextDays=0\n" +
            "  limit #{1},#{2}")
    public ArrayList<Winfo> queryULearningWByPage(@Param("0") int userId, @Param("1") int recordIndex, @Param("2") int pageSize);

    @Select(" select *\n" +
            "  from Winfo\n" +
            "  where userId=#{0}\n" +
            "  limit #{1},#{2}")
    public ArrayList<Winfo> queryAllWByPage(@Param("0") int userId, @Param("1") int recordIndex, @Param("2") int pageSize);

    /*
    获取所有单词数
     */
    @Select(" SELECT COUNT(*) FROM Winfo where userId=#{0}")
    public int queryAllWordNum(int userId);
}