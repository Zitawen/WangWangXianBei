//package springMVC.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;
//import springMVC.po.Books;
//import springMVC.po.User;
//import springMVC.service.BooksService;
//import springMVC.vo.BookExecution;
//
//import javax.servlet.http.HttpServletRequest;
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//
//@Controller
//@RequestMapping("/bookadmin")
//public class BookManagementController {
//	@Autowired
//	private BooksService bookService;
//
//
//	@RequestMapping(value = "/getbooklist", method = RequestMethod.GET)
//	@ResponseBody
//	private Map<String, Object> getBookList(HttpServletRequest request) {
//		Map<String, Object> modelMap = new HashMap<String, Object>();
//
//		// 由于还没有做登录，以后通过拦截器实现。无法从session中获取user.创建一个user,先将userId和username写死
//		User user = new User();
//		user.setUserid(1);
//		user.setUname("张紫雯");
//		request.getSession().setAttribute("user", user);
//		//如果已经登录，从session中获取session
//		user = (User) request.getSession().getAttribute("user");
//
//		try {
//			Books book = new Books();
//			List<User> users=new ArrayList<>();
//			users.add(user);
//			book.setUsers(users);
//			BookExecution se = bookService.getBookList(book, 0, 20);
//			modelMap.put("bookList", se.getBookList());
//			// 列出店铺成功之后，将店铺放入session中作为权限验证依据，即该帐号只能操作它自己的店铺
//			request.getSession().setAttribute("bookList", se.getBookList());
//			modelMap.put("user", user);
//			modelMap.put("success", true);
//		} catch (Exception e) {
//			modelMap.put("success", false);
//			modelMap.put("errMsg", e.getMessage());
//		}
//		return modelMap;
//	}
//
//
//}
