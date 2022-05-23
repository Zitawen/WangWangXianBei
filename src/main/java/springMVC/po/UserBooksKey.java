package springMVC.po;

import java.io.Serializable;
import lombok.Data;

/**
 * user_books
 * @author 
 */
@Data
public class UserBooksKey implements Serializable {
    private Integer userid;

    private Integer bookid;

    private static final long serialVersionUID = 1L;
}