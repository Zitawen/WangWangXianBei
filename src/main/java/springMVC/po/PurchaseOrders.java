package springMVC.po;

import java.util.Date;
import java.util.List;

public class PurchaseOrders {
    private int id;
    private int userId;
    private String number;
    private Date createTime;
    private String note;

    private User user;//订单与用户1:1的关系


//    //一对多的映射，一个订单对映多个订单明细
//    private List<PurOrderDetails> orderDetails;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//    public List<PurOrderDetails> getOrderDetails() {
//        return orderDetails;
//    }
//
//    public void setOrderDetails(List<PurOrderDetails> orderDetails) {
//        this.orderDetails = orderDetails;
//    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public String toString() {
        return "PurchaseOrders{" +
                "id=" + id +
                ", userId=" + userId +
                ", number='" + number + '\'' +
                ", createTime=" + createTime +
                ", note='" + note + '\'' +
                ", user=" + user +
                '}';
    }
}
