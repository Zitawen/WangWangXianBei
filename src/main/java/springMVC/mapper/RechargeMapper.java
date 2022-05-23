package springMVC.mapper;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import springMVC.po.Books;
import springMVC.po.Recharge;

import java.util.List;

@Repository("RechargeMapper")
public interface RechargeMapper {
    int deleteByPrimaryKey(Integer rechargeid);
   /*
   插入充值记录
   */
    int insert(Recharge record);

    int insertSelective(Recharge record);

    Recharge selectByPrimaryKey(Integer rechargeid);

    int updateByPrimaryKeySelective(Recharge record);

    int updateByPrimaryKey(Recharge record);
 /*
       获取所有充值记录数量
         */
    @Select(" SELECT COUNT(*) FROM recharge")
    int queryOrderNum();
 /*
       获取某几条记录（分页）
       pageSize：一页最大容量
       recordIndex：从第几条开始取出
      */
    @Select("select * from recharge where userId=#{0} order by reTime DESC  limit #{1},#{2}")
    List<Recharge> queryOrder(@Param("0") int userId,@Param("1") int recordIndex, @Param("2") int pageSize);
}