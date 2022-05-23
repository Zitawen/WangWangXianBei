package springMVC.mapper;

import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import springMVC.po.User;

import java.util.List;
//annotation实现单表查询

@Repository("UserMapper")//用annotation得到bean【mapper层用@Repository】
public interface UserMapper {
    /*
    查询所有用户
     */
    @Select("select * from user")//返回类型直接根据返回类型
    public List<User> findAll();
    /*
    添加用户
     */
    @Select("insert into user(uname,`password`,tel,vocabulary,maxnum,mstate,`level`)\n" +
            "VALUES(#{uname},#{password},#{tel},#{vocabulary},#{maxnum},#{mstate},#{level})\n")
    public void saveUser(User user);
    /*
    修改用户
     */
    @Select("UPDATE `user`\n" +
            "SET uname=#{uname},`password`=#{password}\n" +
            "where userID=#{userid}\n")
    public void updateUser(User user);

    @Update("update user \n" +
            "set image=#{image} \n" +
            "where userId=#{userid}\n")
    public int updateUserImg(User user);

    @Update("update user\n" +
            "set uname=#{uname}\n" +
            "where userId=#{userid}")
    public int updateUserNickname(User user);
    /*
        修改用户电话号码
         */
    @Update("update user\n" +
            "set tel=#{tel}\n" +
            "where userId=#{userid}")
    public int updateUserTel(User user);
    /*
    删除用户
     */
    @Select("DELETE \n" +
            "from user\n" +
            "where userID=#{useriD}")
    public void deleteById(Integer id);

    /*
    查询所有用户及用户下的所有订单
     */
    @Select("select * from user")
    @Results({
            @Result(id = true,property = "userid",column = "userId"),
            @Result(property = "uname",column = "uname"),
            @Result(property = "password",column = "password"),
            @Result(property = "tel",column = "tel"),
            @Result(property = "vocabulary",column = "vocabulary"),
            @Result(property = "maxnum",column = "maxnum"),
            @Result(property = "mstate",column = "mstate"),
            @Result(property = "level",column = "level"),
            @Result(property = "orders",column = "userId",javaType = List.class,
                    many = @Many(select = "springMVC.mapper.OrderMapper.selectOrdersByUid"))//一个用户下有多个订单(根据用户ID查订单)
    }
    )
    public List<User> findUsersAndOrders() ;

    /*
   查询所有用户及用户下的所有今日需背单词
    */
    @Select("select * from user")
    @Results({
            @Result(id = true,property = "userid",column = "userId"),
            @Result(property = "uname",column = "uname"),
            @Result(property = "password",column = "password"),
            @Result(property = "tel",column = "tel"),
            @Result(property = "vocabulary",column = "vocabulary"),
            @Result(property = "maxnum",column = "maxnum"),
            @Result(property = "mstate",column = "mstate"),
            @Result(property = "level",column = "level"),
            @Result(property = "orders",column = "userId",javaType = List.class,
                    many = @Many(select = "springMVC.mapper.PrelearningwordMapper.selectPrelearningwordByUid"))//一个用户下有多个需背单词(根据用户ID查单词)
    }
    )
    public List<User> findUsersAndPrelearningwords() ;

    int deleteByPrimaryKey(Integer userid);

    int insert(User record);

    int insertSelective(User record);

    /*
    根据用户ID查用户
     */
    User selectByPrimaryKey(Integer userid);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    /*
    根据电话账号和密码查询用户
     */
    @Select("select * from user where tel=#{tel} and password=#{password}")
    User findUser(User user);

    /*
     根据电话账号查询用户
    */
    @Select("select * from user where tel=#{tel}")
    User exist(String tel);

    @Select("select * from user where email=#{email}")
    User findUserByEmail(String email);


}