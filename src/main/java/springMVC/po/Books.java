package springMVC.po;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * books
 * @author 
 */
@Data
public class Books implements Serializable {
    private Integer bookid;

    /**
     * 书籍名称
     */
    private String bookname;

    /**
     * 作者名
     */
    private String authorname;

    /**
     * 出版社
     */
    private String publisher;

    /**
     * 单词数量
     */
    private Integer wordNum;

    /**
     * 书籍描述
     */
    private String bookinf;

    /**
     * 出版日期
     */
    private Date createtime;

    /**
     * 书籍图片
     */
    private String bookImg;

    private static final long serialVersionUID = 1L;

    public int getBookId() {
        return this.bookid;
    }
}