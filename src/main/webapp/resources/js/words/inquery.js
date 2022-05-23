function playAudioBG(){
    document.getElementById("audioBG").play();
}
function playAudioUS(){
    document.getElementById("audioUS").play();
}
function playAudioBG1(){
    document.getElementById("audioBG1").play();
}
function playAudioUS1(){
    document.getElementById("audioUS1").play();
}
$(document).ready(function(){
     // alert("11");
    var inqueryUrl = '/inquery';

    $(document).on('click',"#ww",function (e) {
        e.stopPropagation();
        inqueryWord();
    })

    $(document).on('click',function (e) {
        let target = $(e.target);
        if(!target.closest(".resultModal").length)//匹配选中元素
        $(".resultModal").hide();
    })

    $(document).on('click',".head-toDetail",function () {
       // alert("124");
        checkParticulars()
    })

    //查看详情页
    function checkParticulars() {
        var wenCheck=$(".head-word").text();
       // alert(wenCheck);

        $.ajax({
            url : inqueryUrl,
            async : false,
            cache : false,
            type : "post",
            dataType : 'json',
            data : {    //发送到服务器的数据
                wenCheck: wenCheck
            },

            success : function(data) {
                if (data.success) {  //data为json返回的数据
                    //alert("成功！");
                    var check=data.pwords;
                    var swiperHtml="";

                    check.map(function (item,index){
                        swiperHtml +='<div class="StudyPage_studyPage__1Ri5C">' +
                            '<div>' +
                            '<div>' +
                            '<div class="index_wordBox__IJotZ index_center___r_K_">' +
                            '<div class="index_word__3nhJU">' +
                            '<span id="fff">' +
                            item.englishword +
                            '</span>' +
                            '<div class="index_simpleOptionBox__1bGP6">' +
                            '<i class="index_simpleOption__2_XNF"\n' + 'title="不再安排学习此单词">' +
                            '</i>' +
                            '</div>' +
                            '</div>' +
                            '<div class="index_content__2QwXl">' +
                            '<div class="index_audioWrap__3agUR">UK' +
                            '<span class="index_phonetic__o-RcB">/' +
                            item.pa +
                            '/</span>' +
                            '<span class="index_audio__2-vMp">' +
                            '<img alt="trumpet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" class="index_trump__3bTaM" onclick="playAudioBG()" style="filter: grayscale(100%);">' +
                            '</span>' +
                            '</div>' +
                            '<div class="index_audioWrap__3agUR">US' +
                            '<span class="index_phonetic__o-RcB">/' +
                            item.pa +
                            '/</span>' +
                            '<span class="index_audio__2-vMp">' +
                            '<img alt="trumpet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" class="index_trump__3bTaM" onclick="playAudioUS()" style="filter: none;">' +
                            '</span>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="BayTrans_container__PDsgF">' +
                            '<div class="BayTrans_exampleBox__3CsaJ"">' +
                            '<p class="BayTrans_tag__I6e7V">' +
                            '<strong>单词解析' +
                            '</strong>' +
                            '</p>\n' +
                            '</div>'+
                            '<div class="BayTrans_paraphrase__2JMIz">' +
                            '<p>' +
                            '<span>' +
                            item.chineseword +
                            '</span>' +
                            '</p>' +
                            '</div>' +
                            '<div class="BayTrans_exampleBox__3CsaJ">' +
                            '<p class="BayTrans_tag__I6e7V">' +
                            '<strong>例句' +
                            '</strong>' +
                            '</p>' +
                            '<div>' +
                            '<div class="BayTrans_example__1kVZI">' +
                            '<div class="index_container__LuiIf">' +
                            '<div class="index_left__2LkyW">' +
                            '<p class="index_exampleEN__3OIEA">' +
                            item.englishinstance1 +
                            '<div class="index_right__2ayBh">' +
                            '<img alt="trumpet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" class="index_icon__1IK2K" style="filter: none;">\n' +
                            '</div>' +
                            '</p>' +
                            '<p>' +
                            item.chineseinstance1 +
                            '</p>' +
                            '<br/>'+
                            '<p class="index_exampleEN__3OIEA">' +
                            item.englishinstance2 +
                            '<div class="index_right__2ayBh">' +
                            '<img alt="trumpet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" class="index_icon__1IK2K" style="filter: none;">\n' +
                            '</div>' +
                            '</p>' +
                            '<p>' +
                            item.chineseinstance2 +
                            '</p>' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>'+
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<audio id="audioBG">\n' +
                            '\n' +
                            '<source src="https://ssl.gstatic.com/dictionary/static/sounds/oxford/'+item.englishword+'--_gb_1.mp3" type="audio/mp3">\n' +
                            '</audio>\n' +
                            '<audio id="audioUS">\n' +
                            '\n' +
                            '<source src="https://ssl.gstatic.com/dictionary/static/sounds/oxford/'+item.englishword+'--_us_1.mp3" type="audio/mp3">\n' +
                            '</audio>\n';
                    });
                    //alert(swiperHtml);
                  // $(".StudyPage_studyPage__1Ri5C").html(swiperHtml);
                    $("#zheshiganamde").removeClass("active2");
                    $("#zheshiganamde").html(swiperHtml);
                    $("#main1").addClass("active2");
                    $("#book1").addClass("active2");
                    $("#today1").addClass("active2");
                    $("#set1").addClass("active2");

                } else {
                    alert('失败！' + data.errMsg);
                }
            }
        });
    }

    //查单词
   function inqueryWord() {
        // alert("123");
       var wenCheck=$("#wenCheck").val();

        $.ajax({
            url : inqueryUrl,
            async : false,
            cache : false,
            type : "post",
            dataType : 'json',
            data : {    //发送到服务器的数据
                wenCheck: wenCheck
            },

            success : function(data) {
                if (data.success) {  //data为json返回的数据
                    // alert("成功！");
                    var check=data.pwords;
                    var swiperHtml="";

                    check.map(function (item,index){
                        swiperHtml +='' +
                            '<input id="wenCheck" class="input" placeholder="'+item.englishword+'">' +
                            '<div class="clear">' +
                            '</div>' +
                            '<div class="submit" >' +
                            '<i id="ww" class="icon">' +
                            '</i>' +
                            '</div>' +
                            '<div>' +
                            '<div class="resultModal">' +
                            '<div class="resultContent">' +
                            '<div class="resultContent-head">' +
                            '<span class="head-word">' +
                            item.englishword +
                            '</span>' +
                            '<span class="head-toDetail">: )详情 &gt;' +
                            '</span>' +
                            '</div>' +
                            '<div class="resultContent-pronunciation">' +
                            '<div class="pronunciationItem">' +
                            '<span class="pronunciationItem-title">UK' +
                            '</span>' +
                            '<i class="pronunciationItem-icon" onclick="playAudioBG1()">' +
                            '</i>' +
                            '<span class="pronunciationItem-content">/' +
                            item.pa +
                            '/</span>' +
                            '</div>' +
                            '<div class="pronunciationItem">' +
                            '<span class="pronunciationItem-title">US' +
                            '</span>' +
                            '<i class="pronunciationItem-icon" onclick="playAudioUS1()">' +
                            '</i>' +
                            '<span class="pronunciationItem-content">/' +
                            item.pa +
                            '/</span>' +
                            '</div>' +
                            '</div>' +
                            '<div class="resultContent-senses">' +
                            '<div class="sensesItem">' +
                            item.chineseword +
                            '</div>' +
                            '</div>' +
                            '<div class="resultContent-collectControl">' +
                            '<div>' +
                            '<div class="collectControl-btnItem">添加到生词本' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<audio id="audioBG1">\n' +
                            '\n' +
                            '    <source src="https://ssl.gstatic.com/dictionary/static/sounds/oxford/'+item.englishword+'--_gb_1.mp3" type="audio/mp3">\n' +
                            '</audio>\n' +
                            '<audio id="audioUS1">\n' +
                            '\n' +
                            '    <source src="https://ssl.gstatic.com/dictionary/static/sounds/oxford/'+item.englishword+'--_us_1.mp3" type="audio/mp3">\n' +
                            '</audio>\n';
                    });
                        //alert(swiperHtml);
                    $(".searchContainer").html(swiperHtml);

                } else
                    {
                    // alert("没有该单词");
                    var swiperHtml="";
                        swiperHtml +='<div class="searchContainer">' +
                            '<input id="wenCheck" class="input" placeholder="查词">' +
                            '<div class="clear">' +
                            '</div>' +
                            '<div class="submit" >' +
                            '<i id="ww" class="icon">' +
                            '</i>' +
                            '</div>' +
                            '<div>' +
                            '<div class="resultModal">' +
                            '<div>查询不到该单词嗷 :(' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                    //alert(swiperHtml);
                   $(".searchContainer").html(swiperHtml);
                }
            }
        });
    }

});
