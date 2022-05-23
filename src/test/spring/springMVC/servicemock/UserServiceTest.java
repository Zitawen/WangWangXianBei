package springMVC.servicemock;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import springMVC.mapper.UserMapper;
import springMVC.po.User;
import springMVC.service.UserService;
import springMVC.service.impl.UserServiceImpl;

import java.io.IOException;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @InjectMocks
    UserServiceImpl userService;

    @Mock
    UserMapper userMapper;

    @Test
    void updateUserImg(){
        User user=new User();
        user.setUserid(1);
        user.setImage("/resources/user_image/01.jpg");
        userService.updateUserImg(user);
        verify(userMapper).updateUserImg(user);
    }

    @Test
    void exist(){
        User user=new User();
        user.setTel("15180180327");
        when(userMapper.exist("15180180327")).thenReturn(user);
        User userDomain=userService.exist("15180180327");
        assertThat(userDomain.getTel()).isEqualTo("15180180327");
    }
}
