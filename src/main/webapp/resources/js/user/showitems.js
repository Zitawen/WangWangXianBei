$(document).ready(function(){
    // alert("雯雯");
    $(document).on('click',".index_loginWrap__9lXnS",function (e) {
        // alert("heh");
        e.stopPropagation();
        showItems();
        findInfo();
    });

    $(document).on('click',function (e) {
        e.stopPropagation();
        let target = $(e.target);
        if(!target.closest("#haha").length)//匹配选中元素
            $("#haha").hide();
    })

    function showItems() {
       var swiperHtml="";
           swiperHtml +='<div class="index_loginWrap__9lXnS">' +
                         '<div  class="index_shortInfo__2I1h4 index_expt__3-6Gj">' +
                            // '<img class="index_arrowDown__3GfG8 index_expt__3-6Gj index_trans__3gnl1" alt="" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/arrow-down.fe8d853a.svg">' +
                            '<div id="nickname" class="index_nickName__H__xF index_expt__3-6Gj">WangWang' +
                            '</div>' +
                            '<img id="imgNav" class="index_avat__3hXIp index_expt__3-6Gj" alt="" src="/resources/images/user.webp">' +
                            '</div>' +
                            '<div id="haha" class="index_toggleBox__2ectb index_expt__3-6Gj" >'+
                            '<div class="index_cate__3a5tU index_expt__3-6Gj" >' +
                            '<a href="/html/myspace.html">' +
                            '<div class="index_cateItem__11-SR index_expt__3-6Gj">我的空间' +
                            '</div>' +
                            '</a>' +
                            '<a href="/html/clockIn.html">' +
                            '<div class="index_cateItem__11-SR index_expt__3-6Gj">我的打卡</div>' +
                            '</a>' +
                            '<a href="/html/account.html">' +
                            '<div class="index_cateItem__11-SR index_expt__3-6Gj">账户设置' +
                            '</div>' +
                            '</a>' +
                            '</div>' +
                            '<div class="index_cate__3a5tU index_expt__3-6Gj">' +
                            '<a href="/html/message.html"> ' +
                            '<div class="index_cateItem__11-SR index_expt__3-6Gj">短信' +
                            '</div>' +
                            '</a>' +
                            '<a href="/html/recharge.html">' +
                            '<div class="index_cateItem__11-SR index_expt__3-6Gj">旺词' +
                            '</div' +
                            '</a>' +
                            '</div>' +
                            '<div class="index_cate__3a5tU index_expt__3-6Gj">' +
                            '<a href="/html/login.html">' +
                            '<div class="index_cateItem__11-SR index_expt__3-6Gj">退出' +
                            '</div>' +
                            '</a>' +
                            '</div>' +
                            '</div>'+
                            '</div>'
                    // alert(swiperHtml);
                    $(".index_loginWrap__9lXnS").html(swiperHtml);

    }
    findInfo();//记得执行！！
    function findInfo(){
        $.getJSON("/user/findInfo", function(data) {
            // alert("222");
            if (data.success) {
                //用户已经登录
                // alert("333");
                if (data.user!=null) $('#nickname').html(data.user.uname);
                if (data.user!=null) $('#imgNav').attr("src",data.user.image);
            }
        });
    }

});