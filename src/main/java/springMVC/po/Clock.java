package springMVC.po;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

/**
 * clock
 * @author 
 */
@Data
public class Clock implements Serializable {
    private Integer clockid;

    /**
     * 用户id
     */
    private Integer userid;

    private Integer num;

    private Integer days;

    /**
     * 打卡内容
     */
    private String context;

    /**
     * 学习日期
     */
    @JsonFormat(pattern="yyyy-MM-dd",timezone="GMT+8")
    private Date studytime;

    private User user;//打卡记录与用户1:1的关系

    private static final long serialVersionUID = 1L;
}