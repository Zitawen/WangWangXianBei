package springMVC.service.impl;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.Recharge;
import springMVC.po.User;
import springMVC.service.UserService;

import java.util.List;

public class UserServiceImplTest extends BaseTest {
    @Autowired
    @Qualifier("UserServiceImpl")
    private UserService userService;

    @Test
    public void saveUser() {
        User user=new User();
        user.setUname("照照");
        user.setPassword("222");
        user.setTel("18822136960");
        userService.saveUser(user);
    }

    @Test
    public void exist() {
        if(userService.exist("15180180327")!=null){
            System.out.println("success");
        }else{
            System.out.println("false");
        }
    }

    @Test
    public void updateUserImg() {
        User user=new User();
        user.setUserid(1);
        user.setImage("user_image/01.jpg");
        int result=userService.updateUserImg(user);
        Assert.assertEquals(1, result);
    }

    @Test
    public void getOrderList() {
        List<Recharge> rechargeList= userService.getOrderList(1,0,6);
        System.out.println(rechargeList);
    }

    @Test
    public void orderNum() {

        System.out.println(userService.OrderNum());
    }

    @Test
    public void findUserByE() {
        System.out.println(userService.findUserByE("1971348259@qq.com"));
    }
}