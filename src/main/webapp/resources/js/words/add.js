$(document).ready(function(){
    // 注册的controller url
    //alert("welcome");

    /*
             添加进生词本
         */
    $(document).on('click','.collectControl-btnItem',function (e) {
        e.stopPropagation();
        var addUrl = '/addWords';
        //alert("123");
        var word=$('.head-word').text();
        //alert(word);
        $.ajax({
            url : addUrl,
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
                    // alert("添加成功！");
                    var swiperHtml ='';
                    swiperHtml +='<div class="resultContent-collectControl">' +
                        '<div>' +
                        '<div class="collectControl-info">' +
                        '<i class="collectControl-successIcon">' +
                        '</i>' +
                        '<span>添加好啦(#^.^#)' +
                        '</span>' +
                        '</div>' +
                        '<div class="collectControl-desc">日后可学习哦，加油！！' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    // alert(swiperHtml);
                    $(".resultContent-collectControl").html(swiperHtml);
                    getWord();
                }
                else{
                   // alert("单词已经存在生词本");
                    var swiperHtml = "";
                    swiperHtml +=''+'<div class="resultContent-collectControl">' +
                        '<div>' +
                        '<div class="collectControl-btnItem">我忘了' +
                        '</div>' +
                        '<div class="collectControl-desc">该词已在生词本中，点击安排今天学习' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    // alert(swiperHtml);
                    $(".resultContent-collectControl").html(swiperHtml);

                }
            }
        });

    });

    /*
           未学单词分页
         */
    function getWord() {
        // alert("hahahah")
        $(function () {
            var queryTodayNumURL = '/pre/queryNum';
            var queryTodayURL = '/pre/queryWord';
            $.getJSON(queryTodayNumURL, function (result) {
                if (result.success) {
                    // alert(result.recordCount);
                    totalCounts = result.recordCount;
                    $("#pagination1").jqPaginator({
                        totalCounts: totalCounts,
                        pageSize: 6,
                        visiblePages: 10,
                        currentPage: 1,
                        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
                        prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
                        next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
                        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
                        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>', //{{page}}代表当前页
                        onPageChange: function (curPage) {
                            pageInfo1(curPage);
                        }
                    });
                    $("#pagination2").jqPaginator({
                        totalCounts: totalCounts,
                        pageSize: 6,
                        visiblePages: 10,
                        currentPage: 1,
                        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
                        prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
                        next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
                        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
                        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>', //{{page}}代表当前页
                        onPageChange: function (curPage) {
                            pageInfo2(curPage);
                        }
                    });
                }
            });
            function pageInfo1(curPage) {
                // alert(curPage);
                $.getJSON(queryTodayURL, {pageIndex: curPage, pageSize: 6}, function (result) {

                    if (result.success) {
                        // alert("success");
                        var swiperHtml = "";
                        var todayWordsList = result.todayWordsList;
                        todayWordsList.map(function (item, index) {
                            console.log(item);
                            console.log(item.englishword);
                            swiperHtml += ' <tr class="' + item.englishword +'">\n' + '<td>\n' +
                                '<div class="Pronounce_pronounce__g6QPf"><img alt="trumpet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" class="Pronounce_audio__3xdMh" style="width: 26px; height: 26px;">\n' +
                                '</div>\n' +
                                '</td>\n' +
                                '<td class="CollectionList_pointer__FdvfF">\n' +
                                '<div><span class="CollectionList_word__7zQwd">' + item.englishword +
                                '</span><span class="CollectionList_phonetic__NROhB">/' + item.pa + '/</span>\n' +
                                '</div>\n' +
                                '<div class="CollectionList_definitionCn__3MoTq"><span>v.</span><span>' + item.chineseword + '</span>\n' +
                                '</div>\n' +
                                '</td>\n' +
                                '<td>\n'+
                                '<audio id="'+item.englishword+'">\n' +
                                '    <source src="https://ssl.gstatic.com/dictionary/static/sounds/oxford/'+item.englishword+'--_gb_1.mp3" type="audio/mp3">\n' +
                                '</audio>'+
                                '</td>\n' +
                                '</tr>\n'
                        });

                        $('#tbody1').html(swiperHtml);
                        $(".Pronounce_audio__3xdMh").click(function () {
                            var name = $(this).parents().parents().parents().attr("class");
                            // alert(name);
                            document.getElementById(name).play();
                        })
                    }

                });
            }
            function pageInfo2(curPage) {
                // alert(curPage);
                $.getJSON(queryTodayURL, {pageIndex: curPage, pageSize: 6}, function (result) {

                    if (result.success) {
                        // alert("success");
                        var swiperHtml = "";
                        var todayWordsList = result.todayWordsList;
                        todayWordsList.map(function (item, index) {
                            console.log(item);
                            console.log(item.englishword);
                            swiperHtml += ' <tr class="' + item.englishword +'">\n' + '<td>\n' +
                                '<div class="Pronounce_pronounce__g6QPf"><img alt="trumpet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" class="Pronounce_audio__3xdMh" style="width: 26px; height: 26px;">\n' +
                                '</div>\n' +
                                '</td>\n' +
                                '<td class="CollectionList_pointer__FdvfF">\n' +
                                '<div><span class="CollectionList_word__7zQwd">' + item.englishword +
                                '</span><span class="CollectionList_phonetic__NROhB">/' + item.pa + '/</span>\n' +
                                '</div>\n' +
                                '<div class="CollectionList_definitionCn__3MoTq"><span>v.</span><span>' + item.chineseword + '</span>\n' +
                                '</div>\n' +
                                '</td>\n' +
                                '<td>\n'+
                                '<audio id="'+item.englishword+'">\n' +
                                '    <source src="https://ssl.gstatic.com/dictionary/static/sounds/oxford/'+item.englishword+'--_gb_1.mp3" type="audio/mp3">\n' +
                                '</audio>'+
                                '</td>\n' +
                                '</tr>\n'
                        });

                        $('#tbody2').html(swiperHtml);
                        $(".Pronounce_audio__3xdMh").click(function () {
                            var name = $(this).parents().parents().parents().attr("class");
                            // alert(name);
                            document.getElementById(name).play();
                        })

                    }

                });
            }
        })
    }

    /*
               已学和未学生词分页功能
               NumURL,总数
               WordURL,controller
               id,单词渲染位置
               pageId,页码渲染位置
         */
    function getWordP(NumURL,WordURL,id,pageId) {
        // alert("hahahah")
        $(function () {
            var queryTodayNumURL = NumURL;
            var queryTodayURL = WordURL;
            $.getJSON(queryTodayNumURL, function (result) {
                if (result.success) {
                    // alert(result.recordCount);
                    totalCounts = result.recordCount;
                    $(pageId).jqPaginator({
                        totalCounts: totalCounts,
                        pageSize: 6,
                        visiblePages: 10,
                        currentPage: 1,
                        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
                        prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
                        next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
                        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
                        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>', //{{page}}代表当前页
                        onPageChange: function (curPage) {
                            pageInfo3(curPage);
                        }
                    });
                }
            });

            function pageInfo3(curPage) {
                // alert(curPage);
                $.getJSON(queryTodayURL, {pageIndex: curPage, pageSize: 6}, function (result) {

                    if (result.success) {
                        // alert("success");
                        var swiperHtml = "";
                        var todayWordsList = result.WordsList;
                        todayWordsList.map(function (item, index) {

                            swiperHtml += ' <tr class="' + item.englishword +'">\n' + '<td>\n' +
                                '<div class="Pronounce_pronounce__g6QPf"><img alt="trumpet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" class="Pronounce_audio__3xdMh" style="width: 26px; height: 26px;">\n' +
                                '</div>\n' +
                                '</td>\n' +
                                '<td class="CollectionList_pointer__FdvfF">\n' +
                                '<div><span class="CollectionList_word__7zQwd">' + item.englishword +
                                '</span><span class="CollectionList_phonetic__NROhB">/' + item.pa + '/</span>\n' +
                                '</div>\n' +
                                '<div class="CollectionList_definitionCn__3MoTq"><span>v.</span><span>' + item.chineseword + '</span>\n' +
                                '</div>\n' +
                                '</td>\n' +
                                '<td>\n'+
                                '<audio id="'+item.englishword+'">\n' +
                                '    <source src="https://ssl.gstatic.com/dictionary/static/sounds/oxford/'+item.englishword+'--_gb_1.mp3" type="audio/mp3">\n' +
                                '</audio>'+
                                '</td>\n' +
                                '</tr>\n'
                        });

                        $(id).html(swiperHtml);
                        //小喇叭发音
                        $(".Pronounce_audio__3xdMh").click(function () {
                            var name = $(this).parents().parents().parents().attr("class")//获取单词
                            // alert(name);
                            document.getElementById(name).play();
                        })

                    }

                });
            }

        })
    }
    //调用已学单词分页函数
    getWordP('/pre/LWordNum','/pre/LearnedWord','#learnedWord',"#LWPage");
    //调用总单词分页函数
    getWordP('/pre/AllWNum','/pre/AWord','#tbody11',"#pagination11");//js只需要一行啦，第一个是总数控制层，第二个是单词控制层，第三个是单词要插入的id，第四个是分页按钮插入的id
    //调用未学单词分页函数
    getWord();



    /*
    设置学习量
     */
        $("#select").change(function() {
            WordNum = $("#select").val();
            //alert(WordNum);
            getWord();
            showAllNum();
            $.getJSON("/user/setLWNum", {num: WordNum}, function (result) {
                if (result.success) {
                    alert("修改成功");
                }
            })
        })

    /*
    三个数
     */
    function showAllNum() {
        $.getJSON("/pre/ShowAllNum",  function (result) {
            if (result.success) {
                var swiperHtml = "";
                var swiperHtml1 = "";
                swiperHtml +='<div class="CollectionExamBooter_examProgress__3j_P8">\n' +
                    '<div>\n' +
                    '<div class="CollectionExamBooter_label__34gtQ">今日词数</div>\n' +
                    '<div class="CollectionExamBooter_value__O62Yf">'+result.UserNum+'</div>\n' +
                    '</div>\n' +
                    '<div>\n' +
                    '<div class="CollectionExamBooter_label__34gtQ">已学生词</div>\n' +
                    '<div class="CollectionExamBooter_value__O62Yf">'+result.lWordNum+'</div>\n' +
                    '</div>\n' +
                    '<div>\n' +
                    '<div class="CollectionExamBooter_label__34gtQ">未学生词</div>\n' +
                    '<div class="CollectionExamBooter_value__O62Yf">'+result.UlWordNum+'</div>\n' +
                    '</div>\n' +
                    '</div>\n' +
                    '                                <div>\n' +
                    '                                    <a href="startlearning.html"><button class="CollectionExamBooter_beginBtn__tC0NS">开始学习</button></a>\n' +
                    '                                </div>'
                swiperHtml1 +='                                <div class="DailyTask_title__30qax">— 我的任务 —</div>\n' +
                    '                                <div class="DailyTask_itemsWrapper__10XO7">\n' +
                    '                                    <div class="DailyTask_item__3qF5E">\n' +
                    '                                        <div class="DailyTask_num__1GeJP">'+result.UserNum+'</div>\n' +
                    '                                        <div class="DailyTask_name__1spOK">今日词数</div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="DailyTask_item__3qF5E">\n' +
                    '                                        <div class="DailyTask_num__1GeJP">'+result.lWordNum+'</div>\n' +
                    '                                        <div class="DailyTask_name__1spOK">已学生词</div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="DailyTask_item__3qF5E">\n' +
                    '                                        <div class="DailyTask_num__1GeJP">'+result.UlWordNum+'</div>\n' +
                    '                                        <div class="DailyTask_name__1spOK">未学生词</div>\n' +
                    '                                    </div>\n' +
                    '                                </div>'
                $('#showAllNum').html(swiperHtml);
                $('#showAllNum1').html(swiperHtml1);
            }
        })
    }
    showAllNum();
});
