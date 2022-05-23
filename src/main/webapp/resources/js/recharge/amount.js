$(document).ready(function() {
    $("#1").click(function () {
        var swiperHtml ='';
        swiperHtml +=
            '1'
        // alert(swiperHtml);
        $("#bb_amount").html(swiperHtml);
    });
    $("#5").click(function () {
        var swiperHtml ='';
        swiperHtml +='5'
        // alert(swiperHtml);
        $("#bb_amount").html(swiperHtml);
    });
    $("#10").click(function () {
        var swiperHtml ='';
        swiperHtml +='10'
        // alert(swiperHtml);
        $("#bb_amount").html(swiperHtml);
    });
    $("#50").click(function () {
        var swiperHtml ='';
        swiperHtml +='50'
        // alert(swiperHtml);
        $("#bb_amount").html(swiperHtml);
    });
    $("#100").click(function () {
        var swiperHtml ='';
        swiperHtml +='100'
        // alert(swiperHtml);
        $("#bb_amount").html(swiperHtml);
    });
    $("#200").click(function () {
        var swiperHtml ='';
        swiperHtml +=
            '200'  ;
        // alert(swiperHtml);
        $("#bb_amount").html(swiperHtml);
    });

    //点击充值
    $("#rmb-charge-button").click(function () {
        var num=$("input[name='rmb']:checked").val();
        alert(num);
        $.getJSON('/user/setRC', {num: num },function (data) {
            if (data.success){
                alert("充值成功");
            }
        } )
    })

    OrderPage();
    function OrderPage() {
        var OrderNumURL='/user/orderNum'
        $.getJSON(OrderNumURL, function (result) {
            totalCounts = result.OrdersNum;//获取总共几条记录
            if (result.success) {
                $("#paginationOrder").jqPaginator({
                    totalCounts: totalCounts,
                    pageSize: 6,
                    visiblePages: 10,//可以看见
                    currentPage: 1,//当前页数
                    first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
                    prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
                    next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
                    last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
                    page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>', //{{page}}代表当前页
                    onPageChange: function (curPage) {//传第某页（数字）
                        AllOrderF(curPage);//显示某一页数据
                    }
                })
            }
        })
    }

//显示某一页数据
    function AllOrderF(curPage) {
        var allOrderURL = '/user/OrderList';
        $.getJSON(allOrderURL, {pageIndex: curPage, pageSize: 6},
            function (result) {
                if (result.success) {
                    var swiperHtml = "<tr>\n" +
                        "<th class=\"time\">充值时间</th>\n" +
                        "<th>充值前旺词</th>\n" +
                        "<th>充值后</th>\n" +
                        "<th width=\"160px\">充值数</th>\n" +
                        "</tr>";
                    var allOrdersList = result.orderList;
                    allOrdersList.map(function (item, index) {//循环遍历数组
                        swiperHtml +='<tr>\n' +
                            '<td class="time">'+item.retime+'</td>\n' +
                            '<td>'+item.vocbefore+'</td>\n' +
                            '<td>'+item.vocafter+'</td>\n' +
                            '<td width="160px">'+item.price+'</td>\n' +
                            '</tr>';
                    })
                    $('#orderList').html(swiperHtml);
                }
            })
    }
});