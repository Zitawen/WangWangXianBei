package springMVC.po;

import java.io.Serializable;
import lombok.Data;

/**
 * user_books
 * @author 
 */
@Data
public class UserBooks extends UserBooksKey implements Serializable {
    private String time;

    private static final long serialVersionUID = 1L;
}