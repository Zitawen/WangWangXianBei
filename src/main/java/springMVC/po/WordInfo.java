package springMVC.po;

import java.io.Serializable;
import lombok.Data;

/**
 * word_info
 * @author 
 */
@Data
public class WordInfo implements Serializable {
    private Integer userid;

    private String englishword;

    private String pa;

    private String chineseword;

    private String englishinstance1;

    private String chineseinstance1;

    private String englishinstance2;

    private String chineseinstance2;

    private static final long serialVersionUID = 1L;
}