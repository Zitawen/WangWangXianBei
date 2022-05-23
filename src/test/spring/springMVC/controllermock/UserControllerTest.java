package springMVC.controllermock;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import springMVC.controller.UserController;
import springMVC.po.User;
import springMVC.service.UserService;

import java.io.IOException;
import java.util.Map;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;


@ExtendWith(MockitoExtension.class)//创建一个测试类，并使用注解@ExtendWith(MockitoExtension.class)指定执行测试引擎//测试框架MockitoExtension.class
public class UserControllerTest {
    @InjectMocks
    private UserController controller;

    @Mock
    private UserService userService;//UserController基于UserService这个依赖哦

    @Test
    public void test_login(){
        User user=new User();
        user.setTel("15180180327");
        user.setPassword("998");

        given(userService.loginIn(user)).willReturn(user);//可以指定打桩对象的返回值
        MockHttpServletRequest request = new MockHttpServletRequest();//编写测试代码，模拟发出HTTP请求（而不用浏览器）
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));//通过代码模拟请求数据

        String tel="15180180327";
        String password="998";
        Map<String, Object> map=controller.login(tel,password, request.getSession());
        assertThat(map.get("user")).isEqualTo(user);//判断测试成功或失败，通过断言的方式，Junit内置了一些断言方法，也会用到一些其他库中的断言方法

    }

    @Test
    public void test_register() throws IOException {
        MockHttpServletRequest request = new MockHttpServletRequest();//编写测试代码，模拟发出HTTP请求（而不用浏览器）
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));//通过代码模拟请求数据

        String tel="151180327";
        String uname="张紫雯";
        String password="998";
        User user=new User();
        user.setUname(uname);
        user.setTel(tel);
        user.setPassword(password);
        userService.saveUser(user);
        verify(userService).saveUser(user);//vertify关键字来实现校验方法是否被调用

        Map<String, Object> map=controller.register(tel,uname,password);
        assertThat(map.get("success")).isEqualTo(true);

    }

    @Test
    public void test_findInfo(){
        MockHttpServletRequest request = new MockHttpServletRequest();//编写测试代码，模拟发出HTTP请求（而不用浏览器）
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));//通过代码模拟请求数据

        String tel="15180180327";
        String uname="张紫雯";
        User user=new User();
        user.setUname(uname);
        user.setTel(tel);
        request.getSession().setAttribute("user",user);


        Map<String, Object> map=controller.findInfoUser(request);
        assertThat(map.get("user")).isEqualTo(user);
    }



}
