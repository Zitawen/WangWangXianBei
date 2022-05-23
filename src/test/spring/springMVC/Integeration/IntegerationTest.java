package springMVC.Integeration;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.web.SpringJUnitWebConfig;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import springMVC.controller.UserController;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/*
有真实的service
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringJUnitWebConfig(locations={"classpath:spring/spring-config.xml"})
public class IntegerationTest {
    MockMvc mockMvc;

    @Autowired
    WebApplicationContext wac;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    @Test
    public void test_login() throws Exception {
//        System.out.println("hhaha");

        String json=
                "{\"userid\":null,\"uname\":null,\"password\":\"999\",\"tel\":\"15180180327\",\"vocabulary\":null,\"maxnum\":null,\"mstate\":null,\"level\":null,\"image\":null,\"serialVersionUID\":\"1\"}";
        String result=mockMvc.perform(get("/user/login")
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


}
