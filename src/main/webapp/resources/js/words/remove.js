$(document).ready(function(){
    // 注册的controller url
    var removeUrl = '/removeWords';
    //alert("welcome");

    function ChangeNextWord() {
        // alert("wenwen");
        $.getJSON("/recite/random", function (result) {
            if (result.success) {
                //渲染前端
                var pwords = result.pwords;
                var swiperHtml = "";
                // alert(pwords);
                //用map遍历json数组prelearningwords对象k
                pwords.map(function (item, index) {
                    // alert("hhh");
                    //item元素，index索引
                    swiperHtml +='<div class="StudyPage_studyPage__1Ri5C">'+
                        '<div>' +
                        '<div>' +
                        '<div id="wenBei" class="index_wordBox__IJotZ index_center___r_K_">'+
                        '<div class="index_word__3nhJU">'+
                        '<span id="fff">' +
                        item.englishword +
                        '</span>'
                        + '<div class="index_simpleOptionBox__1bGP6">'
                        + '<i class="index_simpleOption__2_XNF"\n' + 'title="不再安排学习此单词">'
                        + '</i>'
                        + '</div>'
                        + '</div>'
                        + '<div class="index_content__2QwXl">'
                        + '<div class="index_audioWrap__3agUR">UK'
                        + '<span class="index_phonetic__o-RcB">/'
                        + item.pa
                        + '/</span>'
                        + '<span class="index_audio__2-vMp">'
                        + '<img alt="trumpet"\n' +
                        '            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII="\n' +
                        '            class="index_trump__3bTaM" style="filter: grayscale(100%);">'
                        + '</span>'
                        + '</div>'
                        + '<div class="index_audioWrap__3agUR">US'
                        + '<span class="index_phonetic__o-RcB">/'
                        + item.pa
                        + '/</span>'
                        + '<span\n' +
                        '            class="index_audio__2-vMp">'
                        + '<img alt="trumpet"\n' +
                        '            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII="\n' +
                        '            class="index_trump__3bTaM" style="filter: none;">'
                        + '</span>'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '<div id="wenHuan" class="index_btnBox__pXO_l">'
                        + '<div class="index_option__1CVr2 index_green__2lFgU">' +
                        '<div id="1" class="index_title__1zZFT">1' +
                        '</div> ' +
                        '<div id="changeWord" class="index_content__1XOlo">认识' +
                        '</div> ' +
                        '</div> ' +
                        '<div class="index_option__1CVr2 index_green__2lFgU"> ' +
                        '<div id="2" class="index_title__1zZFT">2' +
                        '</div> ' +
                        '<div id="changeWord2" class="index_content__1XOlo">模糊' +
                        '</div> ' +
                        '</div> ' +
                        '<div class="index_option__1CVr2 index_red__VSPTN"> ' +
                        '<div id="3" class="index_title__1zZFT">3' +
                        '</div> ' +
                        '<div id="changeWord3" class="index_content__1XOlo">不认识' +
                        '</div> ' +
                        '</div> ' +
                        '</div> ' +
                        '</div> ' +
                        '</div> ' +
                        '</div>';
                    // alert("666");
                });
                //alert("666");
                //alert(swiperHtml);
                $(".StudyPage_studyPage__1Ri5C").html(swiperHtml);//html() 方法返回或设置被选元素的内容 (inner HTML)。

            }
        });
    }

    $(document).on('click','.index_simpleOption__2_XNF',function () {
        //alert("123");
        var word=$('#fff').text();//把这个标签加到那个换单词的js那里
        alert("你已经熟知了"+word+":-)");

        $.ajax({
            url : removeUrl,
            async : false,
            cache : false,
            type : "post",
            dataType : 'json',
            data : {
                word:word
            },
            success : function(data) {
                //alert(data.success);
                if (data.success) {
                    alert("已经从单词本移除啦！");
                    ChangeNextWord();

                }
                else{
                    alert("删除失败");
                }
            }
        });
    });
});
