package springMVC.service;

import springMVC.po.Clock;
import springMVC.po.Recharge;
import springMVC.po.User;

import java.util.ArrayList;
import java.util.List;

public interface UserService {

    public User loginIn(User user);

    public void saveUser(User user);

    public User exist(String tel);

    public int updateUserImg(User user);

    public int updateNickname(User user);

    public int updateUserTel(User user);

    public int insertRC(Recharge record);
    /*
    更新用户信息
     */
    public int updateUser(User user);
    /*
          获取所有充值记录数量
            */
    public int OrderNum();
    /*
           获取某几条充值记录（分页）
           pageSize：一页最大容量
           recordIndex：从第几条开始取出
          */
    public List<Recharge> getOrderList(int userId,int recordIndex, int pageSize);

    public Clock insertClock(Clock record);
/*
获取用户打卡记录总数
 */
    public int getClockNum(int userId);
    /*
             获取某几条打卡记录（分页）
             pageSize：一页最大容量
             recordIndex：从第几条开始取出
            */
    public ArrayList<Clock> queryClockByPage(int userId, int recordIndex, int pageSize);
    /*
        通过email找用户
         */
    public User findUserByE(String email);
}
