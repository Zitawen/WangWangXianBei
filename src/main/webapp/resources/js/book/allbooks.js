
$(function () {
    var queryBooksNumURL='/book/bookNum'
    $.getJSON(queryBooksNumURL, function (result) {
        if (result.success) {
            totalCounts = result.BooksNum;
            var swiperHtml = "";
            swiperHtml='<span class="index_title__V7IqC">词库书籍</span>\n' +
                '<div class="desk-info"><span>('+totalCounts+')</span>' +
                '<img src="https://assets.baydn.com/web_static/words_wordsweb/static/media/plus-o.7b1770b6.svg"\n' +
                'alt=""></div>'
            $('#getBookNum').html(swiperHtml);//书的总数

            $("#pagination3").jqPaginator({
                totalCounts: totalCounts,
                pageSize: 4,
                visiblePages: 10,
                currentPage: 1,
                first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
                prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
                next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
                last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
                page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>', //{{page}}代表当前页
                onPageChange: function (curPage) {
                    AllBookF(curPage);
                }
            });
        }
    });
    /*
    分页
     */
    function AllBookF(curPage) {
        var allBooksURL = '/book/allbook';
        $.getJSON(allBooksURL, {pageIndex: curPage, pageSize: 4},
            function (result) {
            if (result.success) {
                var swiperHtml = "";
                var allBookList = result.BookList;
                allBookList.map(function (item, index) {
                    swiperHtml += '<div class="index_bookBox__2iInd">\n' +
                        '<div class="index_coinsWrap__3m_2_">' +
                        '<img class="index_img__OSF9-"\n' +
                        'src=" '+item.bookImg+' "\n' +
                        'alt="">' +
                        '</div>\n' +
                        '<div class="index_content__2fjn3">\n' +
                        '<div>' +
                        '<p class="index_name__sO81W">'+item.bookname+'</p>\n' +
                        '<div>' +
                        '<span class="index_bookLabel__2fR4x">真题例句</span>' +
                        '</div>\n' +
                        '<p class="index_complete__S0Y_E">已完成：<span>0/'+item.wordNum+'词</span></p></div>\n' +
                        '<div class="index_handleBox__6gJAw">' +
                        '<img class="index_icon__1egA0" src=""\n' +
                        'alt="">' +
                        '<span\n' +
                        'class="index_handle__1c1p9">学习此书</span></div>\n' +
                        '</div>\n' +
                        '</div>'
                })
                $('#allBookBody').html(swiperHtml);

                $(".index_handle__1c1p9").click(function () {//点击后更换书
                    var name = $(this).parents(".index_content__2fjn3").find(".index_name__sO81W").text();
                    alert(name);
                    var changeBookURL = '/book/changeBook';
                    $.getJSON(changeBookURL, {bookName: name}, function (result) {//数据库里把书换了，但是前端没有
                        if (result.success) {
                            alert("更换成功");
                            MyBookF();//更新
                            MyBookS();//更新
                        }
                    })
                })
            }
        })
    }

    /*
    单词书进度条
     */
    function MyBookF() {
        var myBookURL = '/book/mybook';
        $.getJSON(myBookURL, function (result) {
            if (result.success) {
                var swiperHtml2 = "";
                var Book = result.Book;
                console.log(Book);
                var lnum;
                var bookNum=Book.wordNum;
                $.ajax({
                    url: '/pre/ShowAllNum',
                    async: false,
                    dataType: 'json',
                    success: function (allnum) {
                        lnum= allnum.LWNumInBook;
                    }
                });
                var pc=lnum/bookNum*100;//百分比
                if (bookNum==0){
                    pc=100;
                }
                pc= Math.round(pc);//四舍五入
                swiperHtml2 +=
                    '<div class="index_container__YmQjX">\n' +
                    '<div class="index_header__XwdPA">' +
                    '<p class="index_title__2zluf">正在学习的单词书' +
                    '</p>' +
                    '<a href="/html/word.html">' +
                    '<p class="index_entrance__3IZoL">' +
                    '<img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAbdpuRjiV9pkZEeuMYi4LA/rZyMGwmnhN5ODcpHtWUSHE9lQ9AAAAtElEQVRIx+3QyQ7CMAxF0YQkNOnc0omZ9/8/CSskXJuCKgGVuEvrLGyrTxVbzZTlJYcLD6FkYHQNuX7EPRB5w3RsgCqne990rvhS4EBGFvBKqKhQk5EGjJLaA2OuRb5aBnf6IfecO5DcDD69zJIe+f/7Ivj91CzmuPzIzRw+vcz3P/M6N2/wAUglXUbYkVEAkiBwA7R01gJbY5nOHQBLeUgg16lRl0bCUV8qJqfXTOkpqB/tCltBL9/dCM9nAAAAAElFTkSuQmCC" alt="">' +
                    '<span>词表' +
                    '</span>' +
                    '<img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeBAMAAADePCNYAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4r4UBPaPWzLTkFhMSavX7QkAAABVSURBVBjTYyACXJSBM+WeNsCZ74RhzLp3jxygTLZ37xZAmSx6757DVBi+g2vkiMOlMQGh8TVC40skJqYCLrA2hGEIKxAWYziHDV0TwkMIbyI8TxwAACcKLq0fWv2zAAAAAElFTkSuQmCC" alt="">' +
                    '</p>' +
                    '</a>' +
                    '</div>' +
                    '<div class="index_bookBox__Pb-ea">' +
                    '<div>' +
                    '<img class="index_img__16fFs" src="'+ Book.bookImg +'"\n' +
                    'alt="">' +
                    '</div>' +
                    '<div class="index_content__2S6N2">' +
                    '<div>' +
                    '<div class="index_title__2zluf">' +
                    '<p class="index_book__1x5TY">' +
                    ''+ Book.bookname +'<span>真题例句' +
                    '</span>' +
                    '</p>' +
                    '<p class="index_entrance__3IZoL">' +
                    '加油哦！' +
                    '</p>' +
                    '</div>' +
                    '<p class="index_text__1Hc4c">' +
                    '<span>预计完成时间' +
                    '</span>2023年3月27日' +
                    '</p>' +
                    '</div>' +
                    '<div>' +
                    '<div>' +
                    '</div>' +
                    '<p class="index_complete__2x6Ox">已完成：' +
                    '<span>'+lnum+'/'+ Book.wordNum +'</span>词' +
                    '</p>' +
                    '<div class="index_progress__1A1NU">' +
                    '<div class="index_progress__3dDPY">' +
                    '<div class="index_green__2qjxI" style="width: '+pc+'%;">' +
                    '</div>' +
                    '<div class="index_lightGreen__3uRir" style="width: 0%;">' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                $('#myBookBody').html(swiperHtml2);
            }
        })
    }

    //进度条+换书选项卡
    function MyBookS() {
        var myBookURL = '/book/mybook';
        $.getJSON(myBookURL, function (result) {
            if (result.success) {
                var swiperHtml2 = "";
                var Book = result.Book;
                var bookNum=Book.wordNum;
                var lnum;
                $.ajax({
                    url: '/pre/ShowAllNum',//书的单词书要是真的，那我好像js也不用修改太多，让allnum多传两个真实的数字回来就好了，booknum和learnedWordInBookNum
                    async: false,           //那我得去showAllNUM这里看下怎么改
                    dataType: 'json',
                    success: function (allnum) {//controller层拿出来的
                        lnum= allnum.LWNumInBook;
                    }
                });
                var pc=lnum/bookNum*100;//百分比
                if (bookNum==0){
                    pc=100;
                }
                pc= Math.round(pc);//四舍五入
                swiperHtml2 +='<div class="Book_book__2zLyg">\n' +
                    '<img class="Book_img__3bglg" src="'+Book.bookImg+'"\n' +
                    'alt="'+Book.bookname+'">\n' +
                    '<div class="Book_right__1bR8n">\n' +
                    '<div>\n' +
                    '<div class="Book_title__32iYk"><span class="Book_name__1-4Q1">'+Book.bookname+'</span>\n' +
                    '<img id="changebook" class="Book_switchBtn__29Njy" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/switch.473b2087.svg" alt="切换单词书"></div>\n' +
                    '<div class="Book_timeWrapper__1RYvh"><span class="Book_tag__3dJ-F">预计完成时间</span><span class="Book_time__1RNcG">2023年3月27日</span></div>\n' +
                    '</div>\n' +
                    '<div>\n' +
                    '<div class="Book_progText__3qseZ"><span>已完成'+pc+'%</span><span id="num">'+lnum+'/'+ Book.wordNum +'词</span></div>\n' +
                    '<div class="Book_prog__2AVmh">\n' +
                    '<div style="width: '+pc+'%;"></div>\n' +
                    '</div>\n' +
                    '</div>\n' +
                    '</div>\n' +
                    '</div>'
                $('#myBookBodyS').html(swiperHtml2);

                //换书选项卡
                $("#changebook").click(function() {
                    $("#main1").addClass("active2");//actice2样式是display：none  隐藏main
                    $("#book1").removeClass("active2");//去除book的隐藏
                    $("#word").removeClass("SubNav_active__MC6yN");//去除绿样式
                    $("#book").addClass("SubNav_active__MC6yN");//加上绿样式
                });
            }
        })
    }



    AllBookF();
    MyBookF();
    MyBookS();
})