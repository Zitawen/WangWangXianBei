package springMVC.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import springMVC.enums.BookStateEnum;
import springMVC.mapper.BooksMapper;
import springMVC.mapper.BooksWordMapper;
import springMVC.mapper.PrelearningwordMapper;
import springMVC.mapper.UserBooksMapper;
import springMVC.po.Books;
import springMVC.po.Prelearningword;
import springMVC.po.User;
import springMVC.service.BooksService;
import springMVC.utils.PageCalculator;
import springMVC.vo.BookExecution;

import java.util.ArrayList;
import java.util.List;

@Service("BookServiceImpl")
public class BookServiceImpl implements BooksService {

    @Autowired
    @Qualifier("BookMapper")
    private BooksMapper bookMapper;

    @Autowired
    @Qualifier("PrelearningwordMapper")
    private PrelearningwordMapper prelearningwordMapper;

    @Autowired
    @Qualifier("BookUserMapper")
    UserBooksMapper userBooksMapper;

    @Autowired
    @Qualifier("BooksWordMapper")
    private BooksWordMapper booksWordMapper;
    /*
        获取当前学习书
         */
    @Override
    public Books getBookByUserId(int userId){
        int bookId= userBooksMapper.getBookIdByUserId(userId);
        Books book = bookMapper.selectByPrimaryKey(bookId);
        return book;
    }

    /*
    获取书中已学单词（进度条）
     */
    @Override
    public int getLearnedBookWordNum(int userId){
        int bookId= userBooksMapper.getBookIdByUserId(userId);//取出用户当前学习书ID
        Books book = bookMapper.selectByPrimaryKey(bookId);
        ArrayList<String> englishWord=booksWordMapper.queryWordWByBook(book.getBookId());//取出书中所有单词
        book.setWordNum(englishWord.size());//设置书籍单词量
        bookMapper.updateByPrimaryKey(book);//更新
        int learnedWordNumInBook=0;

        for (int i = 0; i < englishWord.size(); i++){
            if (prelearningwordMapper.iflearned(userId, englishWord.get(i))!=0){//如果学过
                learnedWordNumInBook++;
            }
        }
        return learnedWordNumInBook;
    }

    /*
        换书
         */
    @Override
    public int changeBook(String bookName,int userId){
        //删除旧书的单词
        int ObookId=userBooksMapper.getBookIdByUserId (userId);//获取旧书ID
        Books Obook=bookMapper.selectByPrimaryKey(ObookId);//获取旧书对象
        ArrayList<String> OenglishWord=booksWordMapper.queryWordWByBook(Obook.getBookId());//把旧书单词拿出来

        for (int i = 0; i < OenglishWord.size(); i++){
            if (prelearningwordMapper.queryWordNum(userId, OenglishWord.get(i))!=0){//判断单词是否存在在生词本中
                prelearningwordMapper.deletePrelearningword(userId,OenglishWord.get(i));//就删除
            }
        }

        //加新书单词进生词本
        Books book=bookMapper.selectByBookName(bookName);//找到新书
        ArrayList<String> englishWord=booksWordMapper.queryWordWByBook(book.getBookId());
        for (int i = 0; i < englishWord.size(); i++){
            //初始化生词对象
            Prelearningword prelearningword=new Prelearningword();
            prelearningword.setUserid(userId);
            prelearningword.setEnglishword(englishWord.get(i));
            prelearningword.setAdddays(0);
            prelearningword.setNextdays(0);

            if (prelearningwordMapper.queryWordNum(userId, englishWord.get(i))==0){//判断生词本里有没有这个单词
                prelearningwordMapper.insert(prelearningword);//插入
            }
        }

        int result=userBooksMapper.changeBookByBookId(userId,book.getBookId());//换书皮皮皮
        return result;
    }

    @Override
    public int getBookNum(){
        return  bookMapper.queryBookNum();
    }

    /*
     获取书分页
      */
    @Override
    public List<Books> getBookList(int recordIndex,int pageSize) {
        return bookMapper.queryBook(recordIndex,pageSize);
    }






    @Override
    public Books getBookDetail(int id) {
        return null;
//        return bookMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Books> getBookList() {
        return null;
    }

    @Override
    public BookExecution getBookList(Books book, int pageIndex, int pageSize) {
        return null;
    }

    @Override
    public List<Books> getBookDetail(User user) {
        return null;
    }

}
