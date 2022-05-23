package springMVC.mapper;

import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import springMVC.po.PurchaseOrders;
import springMVC.po.User;

import java.util.List;

@Repository("OrderMapper")
public interface OrderMapper {

    /*
    一对一查询，查询订单及其对应用户信息
    FetchType.LAZY：懒加载，加载一个实体时，定义懒加载的属性不会马上从数据库中加载
    FetchType.EAGER：急加载，加载一个实体时，定义急加载的属性会立即从数据库中加载
     */
    @Select("select *\n" +
            "FROM purchaseorders")
    @Results({
            @Result(id = true,property = "id",column = "id"),
            @Result(property = "userId",column = "userID"),
            @Result(property = "number",column = "number"),
            @Result(property = "createTime",column = "createtime"),
            @Result(property = "note",column = "note"),
            @Result(property = "user",column = "userId",javaType = User.class,
            one = @One(select = "springMVC.mapper.UserMapper.selectByPrimaryKey"))//一个订单下仅有一个用户(根据用户ID查用户)
    }
    )
    public List<PurchaseOrders> findOrderAndUser() ;

    /*
   根据用户ID查订单集合
    */
    @Select("select *\n" +
            "from purchaseorders\n" +
            "where userID=#{userID}\n")
    public List<PurchaseOrders> selectOrdersByUid();


}
