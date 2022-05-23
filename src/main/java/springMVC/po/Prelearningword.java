package springMVC.po;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

/**
 * prelearningword
 * @author 
 */
@Data
public class Prelearningword implements Serializable {
    private Integer id;

    /**
     * 用户ID
     */
    private Integer userid;

    /**
     * 预学习单词
     */
    private String englishword;

    private Integer nextdays;

    private Integer adddays;

    private List<User> users;//今日需背单词与用户1：n关系

    private static final long serialVersionUID = 1L;
}