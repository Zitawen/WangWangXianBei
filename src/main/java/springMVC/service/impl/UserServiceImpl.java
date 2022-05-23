package springMVC.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import springMVC.mapper.ClockMapper;
import springMVC.mapper.RechargeMapper;
import springMVC.mapper.UserMapper;
import springMVC.po.Clock;
import springMVC.po.Recharge;
import springMVC.po.User;
import springMVC.po.Winfo;
import springMVC.service.UserService;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service("UserServiceImpl")
public class UserServiceImpl implements UserService {
    //可以对类成员变量、方法及构造函数进行标注，让 spring 完成 bean 自动装配的工作。

    private UserMapper userDao;

    @Autowired
    @Qualifier("RechargeMapper")
    private RechargeMapper rechargeMapper;

    @Autowired
    @Qualifier("ClockMapper")
    private ClockMapper clockMapper;
/*
  获取用户打卡记录总数
 */
    @Override
    public int getClockNum(int userId){
        return clockMapper.queryClockNum(userId);
    }
    /*
             获取某几条打卡记录（分页）
             pageSize：一页最大容量
             recordIndex：从第几条开始取出
            */
    @Override
    public ArrayList<Clock> queryClockByPage(int userId, int recordIndex, int pageSize) {
        return clockMapper.queryClockByUid(userId, recordIndex, pageSize);
    }
    /*
       插入学习记录
            */
    @Override
    public Clock insertClock(Clock record){
        int day=clockMapper.getMaxDay(record.getUserid());//找用户最大学习天数
        record.setDays(day+1);//加一
        Date date=record.getStudytime();
        SimpleDateFormat sdf = new SimpleDateFormat();// 格式化时间
        sdf.applyPattern("yyyy-MM-dd");// 将date变为除去分秒只剩年月日的形式
        String data1=sdf.format(date);//将天数变为字符串形式（自己写的，只接受String）
        Clock record2=clockMapper.selectToday(data1,record.getUserid());
        if(record2==null){//判断今天是否已经打卡（避免重复打卡）
            clockMapper.insert(record);//框架会自动处理
            return record;
        }
        else
            return record2;
    }
    /*
           获取某几条记录（分页）
           pageSize：一页最大容量
           recordIndex：从第几条开始取出
          */
    @Override
    public List<Recharge> getOrderList(int userId,int recordIndex,  int pageSize){
        return rechargeMapper.queryOrder(userId,recordIndex,pageSize);
    }
    /*
          获取所有充值记录数量
            */
    @Override
    public int OrderNum(){
        return rechargeMapper.queryOrderNum();
    }
    /*
      插入充值记录
      */
    @Override
    public int insertRC(Recharge record){
        return rechargeMapper.insert(record);
    }
    /*
    更新个人信息
     */
    @Override
    public int updateUser(User user){
        return userDao.updateByPrimaryKey(user);
    }

    @Autowired(required = false)
    public UserServiceImpl(@Qualifier("UserMapper") UserMapper userDao) {
        this.userDao = userDao;
    }

    @Override
    public User loginIn(User user) {
        User LoginUser=userDao.findUser(user);
//        return null;
        return LoginUser;
    }
    /*
           通过email找用户
            */
    @Override
    public User findUserByE(String email) {
        return userDao.findUserByEmail(email);
    }

    @Override
    public void saveUser(User user) {
        userDao.saveUser(user);
    }

    @Override
    public User exist(String tel) {
        return userDao.exist(tel);
    }

    @Override
    public int updateUserImg(User user) {
        return userDao.updateUserImg(user);
    }

    @Override
    public int updateNickname(User user) {
        return userDao.updateUserNickname(user);
    }

    @Override
    public int updateUserTel(User user) {
        return userDao.updateUserTel(user);
    }
}
