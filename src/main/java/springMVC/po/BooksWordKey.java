package springMVC.po;

import java.io.Serializable;
import lombok.Data;

/**
 * books_word
 * @author 
 */
@Data
public class BooksWordKey implements Serializable {
    private Integer bookid;

    private String englishword;

    private static final long serialVersionUID = 1L;
}