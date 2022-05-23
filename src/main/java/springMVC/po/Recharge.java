package springMVC.po;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

/**
 * recharge
 * @author 
 */
@Data
public class Recharge implements Serializable {
    private Integer rechargeid;

    private Integer vocbefore;

    private Integer vocafter;

    private Integer price;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date retime;

    private Integer userid;

    private static final long serialVersionUID = 1L;
}