package springMVC.controllermock;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.mybatis.spring.MyBatisSystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import springMVC.controller.UserController;
import springMVC.po.User;
import springMVC.service.UserService;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerResponseTest {

    @Autowired
    MockMvc mockMvc;//模拟发出HTTP请求，使用Spring内置的MockMvc类

    private UserService userService;

    @Before
    public void setup(){
        userService= Mockito.mock(UserService.class);//mock service对象
        UserController userController=new UserController(userService);//实例化controll
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();//实例化MockMvc、
    }

    @Test
    public void test_login() throws Exception {
        String json=
                "{\"userid\":null,\"uname\":null,\"password\":\"998\",\"tel\":\"15180180327\",\"vocabulary\":null,\"maxnum\":null,\"mstate\":null,\"level\":null,\"image\":null,\"serialVersionUID\":\"1\"}";

        User user=new User();
        user.setTel("15180180327");
        user.setPassword("999");

        given(userService.loginIn(user)).willReturn(user);//可以指定打桩对象的返回值
        String result=mockMvc.perform(post("/user/login")
                .param("tel","15180180327")
                .param("password","999")
                .characterEncoding("UTF-8")
                .contentType(MediaType.APPLICATION_JSON)//接受类型
                .accept(MediaType.APPLICATION_JSON)//返回类型
                .content(json))//传入/book/test4的内容

                .andExpect(status().isOk())// OK(200, "OK")
                .andDo(print())//控制台输出详细信息

                .andReturn().getResponse().getContentAsString();

        System.out.println(result);//返回从/book/test4得到的结果
    }

    @Test
    public void test_handleException() throws Exception
    {
        User user=new User();
        user.setTel("15180180327");
        user.setPassword("999");
        given(userService.loginIn(user)).willThrow(MyBatisSystemException.class);
        mockMvc.perform(MockMvcRequestBuilders.get("/user/login")
                .param("tel","15180180327")
                .param("password","999"))
                .andDo(print());
    }
}
