package springMVC.po;

import java.io.Serializable;
import lombok.Data;

/**
 * user
 * @author 
 */
@Data
public class User implements Serializable {
    private Integer userid;

    private String uname;

    private String password;

    private String tel;

    private Integer vocabulary;

    private Integer maxnum;

    private String mstate;

    private String level;

    private String image;

    private Integer wordnum;

    private String email;

    private static final long serialVersionUID = 1L;
}