$(document).ready(function() {
    var indexUrl = '/user/changeNick';
    var centerUrl = '/user/findInfo';

    function getUserInfo() {
        $.getJSON(centerUrl, function (data) {
            if (data.success) {
                // alert(data.user.uname);
                if (data.user != null){
                    console.log(data.user.uname);
                    $('#nickname').html(data.user.uname);
                    $('#iPhone').attr("placeholder", data.user.tel);
                    $('#na').attr("placeholder", data.user.uname);//attr() 方法设置或返回被选元素的属性值
                    $('#email').attr("placeholder", data.user.email);
                }
            }
        });
    }
    getUserInfo();

    $("#saveMessage").click(function () {
        var tel = $("#iPhone").val();
        var name = $("#na").val();

        $.ajax({
            url: indexUrl,
            async: false,
            cache: false,
            type: "post",
            dataType: "json",
            data: {
                name: name,
                tel: tel
            },
            success : function(data) {
                if (data.success) {
                    // alert(data.name);
                    getUserInfo();
                } else {
                    alert('昵称更新失败！' + data.errMsg);
                }
            }
        });
    });
    change2.onclick=function(){//点击绑定
        change2.style.visibility="hidden";
        save2.style.visibility="visible";
        email.removeAttribute("disabled");//邮箱内容清空
    }
    save2.onclick=function(){//点击保存
        change2.style.visibility="visible";
        save2.style.visibility="hidden";

        $('#email').attr("disabled",true);//邮箱内容显示
        var email = $("#email").val();

        $.ajax({
            url: "/user/setEmail",
            async: false,
            cache: false,
            type: "post",
            dataType: "json",
            data: {
                email: email
            },
            success : function(data) {
                if (data.success) {
                    // alert(data.name);
                    $('#nickname').html(data.name);
                } else {
                    alert('失败！' + data.errMsg);
                }
            }
        });
    }
});
