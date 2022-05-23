package springMVC.service;

import springMVC.po.Books;
import springMVC.po.User;
import springMVC.vo.BookExecution;

import java.util.List;

public interface BooksService {
    Books getBookDetail(int id);
    public int getBookNum();
    List<Books> getBookList();
    /**
     * 根据book分页返回相应店铺列表
     * @param book
     * @param pageIndex
     * @param pageSize
     * @return
     */
    public BookExecution getBookList(Books book, int pageIndex, int pageSize);
    /*
    获取当前学习书
     */
    public Books getBookByUserId(int userId);
    public int changeBook(String bookName,int userId);
    List<Books> getBookDetail(User user);
    /*
    获取书分页
     */
    public List<Books> getBookList(int recordIndex,int pageSize);
    public int getLearnedBookWordNum(int userId);
}
