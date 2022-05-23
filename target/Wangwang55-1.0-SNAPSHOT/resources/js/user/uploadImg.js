$(document).ready(function(){
    // alert("hehehe");

    var imgUrl = '/user/upImg';
    // 访问后台，获取已经登录的用户信息
    findInfo();
    showUInfo();
    function showUInfo() {
        $.getJSON("/user/findInfo", function (data) {
            var swiperHtml ='';
            if (data.success) {
                swiperHtml +='                        <div class="span1">\n' +
                    '                            <h1><small  class="label label-info">总数：</small><span id="sum">'+data.user.vocabulary+'</span></h1>\n' +
                    '                        </div>\n' +
                    '                        <div class="span1">\n' +
                    '                            <h1><small  class="label label-success">最多可用：</small><span id="max">'+data.user.maxnum+'</span></h1>\n' +
                    '                        </div>\n' +
                    '                        <div class="span1">\n' +
                    '                            <h1><small  class="label label-warning">等级：</small><span id="level">'+data.user.level+'</span></h1>\n' +
                    '                        </div>'
                $("#reposits").html(swiperHtml);
            }
        })
    }
    function findInfo(){
        $.getJSON("/user/findInfo", function(data) {
            // alert("222");
            if (data.success) {
                //用户已经登录
                // alert("333");
                if (data.user!=null) $('#nickname').html(data.user.uname);
                if (data.user!=null) $('#nickname2').html(data.user.uname);
                if (data.user!=null) $('#imgHead').attr("src",data.user.image);
                // alert(data.user.image);
                if (data.user!=null) $('#imgNav').attr("src",data.user.image);
            }
        });
    }

    $('#submit').click(function() {
        // alert("www");
        // 获取上传的图片文件流
        var imgHead = $('#head-img')[0].files[0];//jQuery对象是数组
        // 手工生成表单对象，用于接收参数并传递给后台
        var formData = new FormData();//把表单的数据(文件流)放入对象
        // 添加图片流进表单对象里
        formData.append('imgHead', imgHead);//(key(任意),value)

        // 访问后台进行登录验证
        $.ajax({
            url : imgUrl,
            async : false,
            cache : false,
            type : "post",
            dataType:"json",
            contentType : false,
            processData : false,
            data : formData,
            success : function(data) {
                if (data.success) {
                    alert("头像更新成功！");
                    window.location.reload();
                    $('#imgHead').attr("src",data.url);
                } else {
                    alert('头像更新失败！' + data.errMsg);
                }
            }
        });
        $('#myModal').modal('hide');//手动隐藏模态框
    });

});