package springMVC.mapper;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.PurchaseOrders;

import java.util.List;

import static org.junit.Assert.*;

public class OrderMapperTest extends BaseTest {
    @Autowired
    @Qualifier("OrderMapper")
    private OrderMapper orderMapper;

    /*
    查询所有订单和订单所属用户
     */
    @Test
    public void findOrderAndUser() {
        List<PurchaseOrders> list= orderMapper.findOrderAndUser();
        for (PurchaseOrders order:list){
            System.out.println(order);
        }

    }
}