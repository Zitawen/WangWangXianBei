package springMVC.mappermock;

import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.test.context.junit.jupiter.web.SpringJUnitWebConfig;
import springMVC.mapper.UserMapper;
import springMVC.po.User;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringJUnitWebConfig(locations = { "classpath:/spring/spring-config.xml" })
@MapperScan(basePackages = "springMVC.mapper")
public class UserMapperMockTest {

        @Autowired(required = false)
        private UserMapper userMapper;


        @Test
        void saveUser() {
            User user=new User();
            user.setUname("wenwen");
            user.setPassword("999");
            assertThrows(DataAccessException.class,()->{
                userMapper.saveUser(user);
            });
        }

        @Test
        void updateUserImg(){
            User user=new User();
            user.setUserid(1);
            user.setImage("/resources/user_image/01.jpg");
            userMapper.updateUserImg(user);
        }

        @Test
        void exist(){
            if(userMapper.exist("15180180327")!=null){
                System.out.println("success");
            }else{
                System.out.println("false");
            }
        }
}
