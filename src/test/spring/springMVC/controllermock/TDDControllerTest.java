package springMVC.controllermock;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import springMVC.po.User;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class TDDControllerTest {
    MockMvc mockMvc;
    private TDDController tddController;
    private TDDService tddService;

    @Before
    public void setup(){
        tddService = Mockito.mock(TDDService.class);
        TDDController tddController = new  TDDController(tddService);
        mockMvc = MockMvcBuilders.standaloneSetup(tddController).build();
    }

    @Test
    public void test_login() throws Exception {
        TDDuser tdDuseruser=new TDDuser();
        tdDuseruser.setTel("15180180327");
        tdDuseruser.setPassword("999");
        given(tddService.loginIn(tdDuseruser)).willReturn(tdDuseruser);
        mockMvc.perform(get("/TDD/login")
                .param("tel","15180180327")
                .param("password","999"))
                .andExpect(status().isOk())
                .andDo(print());
    }
}
