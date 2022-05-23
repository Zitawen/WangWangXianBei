package springMVC.intercept;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import springMVC.po.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AuthorizeInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
       // System.out.println("AuthorizeInterceptor pre ");
        User user = (User) request.getSession().getAttribute("user");
        if(request.getRequestURI().endsWith("login")||request.getRequestURI().endsWith("register"))
            return true;
        if(user==null)
            return false;
        else
            return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
       // System.out.println("AuthorizeInterceptor post ");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
       // System.out.println("AuthorizeInterceptor after ");
    }
}
