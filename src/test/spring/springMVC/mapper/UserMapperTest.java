package springMVC.mapper;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.User;

import java.util.List;

import static org.junit.Assert.*;

public class UserMapperTest extends BaseTest {
    @Autowired
    @Qualifier("UserMapper")
    private UserMapper userMapper;

    @Test
    public void findAll() {
          List<User> list=userMapper.findAll();
          for ( User user:list){
              System.out.println(user.getUname());
          }
        assertEquals(16, list.size());
    }

    @Test
    public void saveUser() {
        User user=new User();
        user.setUname("爱莎");
        user.setPassword("555");
        user.setTel("65467");
        user.setVocabulary(9000);
        user.setMaxnum(600);
        user.setMstate("在线");
        user.setLevel("砖石");
        userMapper.saveUser(user);
    }

    @Test
    public void updateUser() {
        User user=new User();
        user.setUserid(7);
        user.setUname("张小雯");
        user.setPassword("777");
//        user.setTel("65467");
//        user.setVocabulary(9000);
//        user.setMaxnum(600);
//        user.setMstate("在线");
//        user.setLevel("砖石");
        userMapper.updateUser(user);
    }

    @Test
    public void updateUserTel() {
        User user=new User();
        user.setUserid(1);
        user.setTel("15180180327");
        userMapper.updateUserTel(user);
    }

    @Test
    public void updateUserImg() {
        User user=new User();
        user.setUserid(1);
        user.setImage("user_image/01.jpg");
        int result=userMapper.updateUserImg(user);
        Assert.assertEquals(1, result);
    }

    @Test
    public void deleteById() {
        userMapper.deleteById(270);
    }

    /*
    查询所有用户和用户所有订单
   */
    @Test
    public void findUsersAndOrders(){
       List<User> list=userMapper.findUsersAndOrders();
           for (User user:list){
               System.out.println(user);
           }
    }

    /*
    查询所有用户和用户所有今日需背单词
   */
    @Test
    public void findUsersAndPrelearningwords() {
        List<User> list=userMapper.findUsersAndPrelearningwords();
        for (User user:list){
            System.out.println(user);
        }
    }

}