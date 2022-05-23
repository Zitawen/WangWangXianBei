package springMVC.po;

import java.io.Serializable;
import lombok.Data;

/**
 * word
 * @author 
 */
@Data
public class Word implements Serializable {
    private String englishword;

    private String pa;

    private String chineseword;

    private String englishinstance1;

    private String chineseinstance1;

    private String englishinstance2;

    private String chineseinstance2;

    private String audio;

    private static final long serialVersionUID = 1L;
}