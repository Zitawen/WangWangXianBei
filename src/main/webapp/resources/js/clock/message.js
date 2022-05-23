$(document).ready(function() {
    $("#message1").click(function () {
        // alert("hah");
        var swiperHtml ='';
        swiperHtml +='<div class="main-body container">' +
            '<div class="row message-main">' +
            '<div class="span8">' +
            '<div class="message-div">' +
            '<div class="message-container">' +
            '<h1>踢除短信' +
            '</h1>' +
            '<div>' +
            '<div>' +
            '<p>亲爱的组员，很遗憾地通知你，因为你没有坚持打卡，我们不得不将你从小组暂时移出，但我们欢迎你随时回来。你可以点击本短信下方的链接重新加入小组，和大家一起并肩战斗。' +
            '</p>' +
            '<p>小组: ' +
            '<a href="https://web.shanbay.com/team/group/m/detail/414895?shanbay_immersive_mode=true&amp;direct=1">天天向上，学习英语' +
            '</a>小组组长: ' +
            '<a href="http://www.shanbay.com/bdc/review/progress/223473077">🐠小河马' +
            '</a>' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<a href="message.html">' +
            '<button type="button">返回' +
            '</button>' +
            '</a>' +
            '</div>'
        // alert(swiperHtml);
        $("#mainwen").html(swiperHtml);
    });
   });