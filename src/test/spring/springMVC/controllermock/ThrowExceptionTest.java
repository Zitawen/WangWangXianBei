package springMVC.controllermock;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mybatis.spring.MyBatisSystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import springMVC.controller.UserController;
import springMVC.po.User;
import springMVC.service.UserService;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;

public class ThrowExceptionTest {

    @Autowired
    MockMvc mockMvc;//模拟发出HTTP请求，使用Spring内置的MockMvc类

    private UserService userService;

    @BeforeEach
    public void setup(){
        userService= Mockito.mock(UserService.class);//mock service对象
        UserController userController=new UserController(userService);//实例化controll
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();//实例化MockMvc、
    }

    @Test
    public void test_throwException(){
        //通过assertThrows函数对代码执行后抛出的异常进行判断。
        User user=new User();
        user.setTel("15180180327");
        user.setPassword("999");
        given(userService.loginIn(user)).willThrow(MyBatisSystemException.class);
        assertThrows(MyBatisSystemException.class,()->{
            mockMvc.perform(MockMvcRequestBuilders.get("/user/login")
                    .param("tel","15180180327")
                    .param("password","999"));
        });
    }
}
