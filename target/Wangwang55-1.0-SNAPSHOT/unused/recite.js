/*$(document).ready(function(){
    $.getJSON("/recite",function (result){
               alert(result);
    });
});*/
$(document).ready(function(){
   // alert("ww");
    ChangeWord();
    $(document).on('click','.StudyPage_nextBtn__1ygGn',function () {
        //自己的代码
        //ChangeWord();
        ChangeNextWord();
    })

    //1.换单词
        function ChangeWord() {
        $.getJSON("/recite/random", function (result) {
            // alert("WELCOME");
            if (result.success) {
                //渲染前端
                // alert("WWWWWW");
                var pwords = result.pwords;
                var swiperHtml = "";
                // alert(pwords);
                //用map遍历json数组prelearningwords对象k
                pwords.map(function (item, index) {
                    // alert("hhh");
                    //item元素，index索引
                    swiperHtml += '<div class="index_wordBox__IJotZ index_center___r_K_">'
                        + '<div class="index_word__3nhJU">'
                        + '<span id="fff">'
                        + item.englishword
                        + '</span>'
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
                        '            class="index_trump__3bTaM" onclick="playAudio();" style="filter: grayscale(100%);">'
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
                        + '</div>'+'<audio id="audio">\n' +
                        '\n' +
                        '    <source src="https://ssl.gstatic.com/dictionary/static/sounds/oxford/'+item.englishword+'--_gb_1.mp3" type="audio/mp3">\n' +
                        '</audio>'
                        ;
                    // alert("666");
                });
                //alert("666");
                // alert(swiperHtml);
                $("#wenBei").html(swiperHtml);//html() 方法返回或设置被选元素的内容 (inner HTML)。

                function playAudio(){
                    document.getElementById("audio").play();
                }


            }
        });
    }

    //3.下一个单词
    function ChangeNextWord() {
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

    //2.认识、不认识、模糊按钮出解析
    //1）认识
    $(document).on('click','#changeWord',function(){
        var word = $('.index_word__3nhJU').text();
        var nextday=$('#3').text();
        // alert(word);
        $.ajax({
            url : "/recite/parse",
            async : false,
            cache : false,
            type : "post",
            dataType : 'json',
            data : {    //发送到服务器的数据
                words : word,
                nextday: nextday
            },
            success : function(data) {
                if (data.success) {  //data为json返回的数据
                     var  pwords=data.pwords;
                     var swiperHtml="";
                    //alert(pwords);
                   pwords.map(function (item,index){
                        // alert("hhh");
                        swiperHtml+='<div class="BayTrans_container__PDsgF">' +
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
                            '<div class="StudyPage_nextBtn__1ygGn" >'+
                            '</div>';
                    });
                    //alert(swiperHtml);
                    $("#wenHuan").html(swiperHtml);
                }else
                {
                    alert("FAIL");
                }
            }
        });
    });

    //2）模糊
    $(document).on('click','#changeWord2',function(){
        var word = $('.index_word__3nhJU').text();
        var nextday=$('#2').text();
        //alert(word);
        $.ajax({
            url : "/recite/parse",
            async : false,
            cache : false,
            type : "post",
            dataType : 'json',
            data : {    //发送到服务器的数据
                words : word,
                nextday: nextday
            },
            success : function(data) {
                if (data.success) {  //data为json返回的数据
                    var  pwords=data.pwords;
                    var swiperHtml="";
                    //alert(pwords);
                    pwords.map(function (item,index){
                        // alert("hhh");
                        swiperHtml+='<div class="BayTrans_container__PDsgF">' +
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
                            '<div class="StudyPage_nextBtn__1ygGn" >'+
                            '</div>';
                    });
                    //alert(swiperHtml);
                    $("#wenHuan").html(swiperHtml);
                }else
                {
                    alert("FAIL");
                }
            }
        });
    });

    //3）不认识
    $(document).on('click','#changeWord3',function(){
        var word = $('.index_word__3nhJU').text();
        var nextday=$('#1').text();
        //alert(word);
        $.ajax({
            url : "/recite/parse",
            async : false,
            cache : false,
            type : "post",
            dataType : 'json',
            data : {    //发送到服务器的数据
                words : word,
                nextday: nextday
            },
            success : function(data) {
                if (data.success) {  //data为json返回的数据
                    var  pwords=data.pwords;
                    var swiperHtml="";
                    //alert(pwords);
                    pwords.map(function (item,index){
                        // alert("hhh");
                        swiperHtml+='<div class="BayTrans_container__PDsgF">' +
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
                            '<div class="StudyPage_nextBtn__1ygGn" >'+
                            '</div>';
                    });
                    //alert(swiperHtml);
                    $("#wenHuan").html(swiperHtml);
                }else
                {
                    alert("FAIL");
                }
            }
        });
    });



});
