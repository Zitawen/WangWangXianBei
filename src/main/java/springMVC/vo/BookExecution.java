package springMVC.vo;



import springMVC.enums.BookStateEnum;
import springMVC.po.Books;
import java.util.List;

public class BookExecution {
	// 结果状态 为整数，如0
	private int state;

	// 状态标识 为字符串，说明state整数的业务意义。 如0表示在审核中
	private String stateInfo;

	// 店铺数量
	private int count;

	// 操作的shop(增删改店铺的时候用到)
	private Books book;

	// shop列表(查询店铺列表的时候使用)
	private List<Books> bookList;

	public BookExecution() {

	}

	// 店铺操作失败的时候使用的构造器
	public BookExecution(BookStateEnum stateEnum) {
		this.state = stateEnum.getState();
		this.stateInfo = stateEnum.getStateInfo();
	}

	// 店铺操作成功的时候使用的构造器
	public BookExecution(BookStateEnum stateEnum, Books book) {
		this.state = stateEnum.getState();
		this.stateInfo = stateEnum.getStateInfo();
		this.book = book;
	}

	// 店铺操作成功的时候使用的构造器
	public BookExecution(BookStateEnum stateEnum, List<Books> shopList) {
		this.state = stateEnum.getState();
		this.stateInfo = stateEnum.getStateInfo();
		this.bookList = shopList;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public String getStateInfo() {
		return stateInfo;
	}

	public void setStateInfo(String stateInfo) {
		this.stateInfo = stateInfo;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public Books getBook() {
		return book;
	}

	public void setBook(Books book) {
		this.book = book;
	}

	public List<Books> getBookList() {
		return bookList;
	}

	public void setBookList(List<Books> bookList) {
		this.bookList = bookList;
	}
}
