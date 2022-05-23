package springMVC.mapper;

import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import springMVC.po.Books;
import springMVC.po.Clock;
import springMVC.po.User;

import java.util.ArrayList;
import java.util.List;

@Repository("ClockMapper")
public interface ClockMapper {
    int deleteByPrimaryKey(Integer clockid);

    int insert(Clock record);

    int insertSelective(Clock record);

    Clock selectByPrimaryKey(Integer clockid);

    int updateByPrimaryKeySelective(Clock record);

    int updateByPrimaryKey(Clock record);

    @Select("select num,days,context,studytime,image\n" +
            "FROM clock,user")
    @Results({
            @Result(id = true,property = "clockid",column = "clockId"),
            @Result(property = "userid",column = "userId"),
            @Result(property = "num",column = "num"),
            @Result(property = "days",column = "days"),
            @Result(property = "context",column = "context"),
            @Result(property = "studytime",column = "studytime"),
            @Result(property = "user",column = "userId",javaType = User.class,
                    one = @One(select = "springMVC.mapper.UserMapper.selectByPrimaryKey"))
    })
    public List<Clock> searchOneCheck();

    /*
    找用户最大学习天数
     */
    @Select("SELECT MAX(days)\n" +
            "FROM `clock`\n" +
            "WHERE userId=#{1}")
    int getMaxDay(@Param("1") int userId);

    /*
    查询今天是否打卡
     */
    @Select("select * from clock \n" +
            "where Date(studytime) = #{1} AND userId=#{2}")
    Clock selectToday(@Param("1")String date,@Param("2")int userId);

    @Select(" SELECT COUNT(*) FROM clock where userId=#{1}")
    int queryClockNum(@Param("1")int userId);
    /*
             获取某几条打卡记录（分页）
             pageSize：一页最大容量
             recordIndex：从第几条开始取出
            */
    @Select("select * from clock where userId=#{0} limit #{1},#{2}")
    ArrayList<Clock> queryClockByUid(@Param("0") int userId, @Param("1") int recordIndex, @Param("2") int pageSize);
}