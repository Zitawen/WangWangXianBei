package springMVC.mapper;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.Clock;
import springMVC.po.PurchaseOrders;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;

public class ClockMapperTest extends BaseTest {
    @Autowired
    @Qualifier("ClockMapper")
    private ClockMapper clockMapper;

    /*
    查询所有订单和订单所属用户
     */
    @Test
    public void searchOneCheck() {
        List<Clock> list= clockMapper.searchOneCheck();
        for (Clock clock:list){
            System.out.println(clock);
        }
    }

    @Test
    public void insert() {
        Clock clock=new Clock();
        clock.setNum(10);
        clock.setUserid(1);
        clock.setDays(20);
        clock.setStudytime(new Date());
        clockMapper.insert(clock);
    }

    @Test
    public void getMaxDay() {
        System.out.println(clockMapper.getMaxDay(1));
    }

    @Test
    public void selectToday() {
        Clock clock=clockMapper.selectToday("2022-04-22",1);
        Date date=clock.getStudytime();
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        SimpleDateFormat sdf = new SimpleDateFormat();// 格式化时间
        sdf.applyPattern("yyyy-MM-dd");// a为am/pm的标记
        String data1=sdf.format(date);
        System.out.println(data1);
    }
}