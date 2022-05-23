$(function () {
    function set() {
    }

    function book() {
        var bookNum = 0;
        var comHtml = '<div class="index_container__2E1XM"><div><div><div class="index_container__YmQjX"></div></div><div><div class="index_container__2u7Lc"><div class="index_flexBox__NEhPV"><div>' +
            '<span class="index_title__V7IqC">我的书桌</span><div class="desk-info"><span id="changeNum">(' + bookNum + '/10)</span><img src="https://assets.baydn.com/web_static/words_wordsweb/static/media/plus-o.7b1770b6.svg" alt=""></div></div><p id="addBook" class="index_entrance__2-G2s">' +
            '<img class="index_icon__1egA0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAMAAABkkgs4AAAAb1BMVEUAAAAovqApvqEqv6ErvqIuwaUov6Ax07ApvqApv6Aov6AuxKQov6Eov6Eqw6QwwqUwxqwovqEov6Eov6ErwKMov6Apv6Apv6EpwKMov6Eov6Eov6Irv6Urw6Ixwqopv6Aov6Iov6IpwaUtw60ovqDk3eCWAAAAJHRSTlMA3tuTRxvABtS0+Sfz6SATC+TJijnvp6Fcq5pnMC4VwnhBJRFj7WXtAAAA20lEQVRIx+2V26rCQAxF06ltdezV1uo53nX9/zdaBaWjVoOgIrhe8rJgwpBky/eS/vct19hRmckl05gukp64LCzgGWPAmjYFMA5ceQR/x+fAu2hvBbW0ycGL5KYsy5hE2lQwkQ5ZQnD66IHfKQ9g+JNPrCkitSybTNRyg17elpVeHlDo5T5En5WjoMFA2pT8gbxI4Iyd3pdntJncl3d+2BDDodTD7/g6lfz8bKRl9aJ5zmdzvVwyzp/YbuVh1J7cLCbRHvMghFoc5l0x4TkxoQ8gN9q4GW3+Ut7BHm7aNIf3SZ0qAAAAAElFTkSuQmCC" alt=""><span>添加新书</span></p></div><div class="index_bookList-foot__vETsI"><ul class="index_pageContainer__2l7E1"><li class="index_nomore__2fTsZ">上一页</li><li class="index_activePage__3C9pk">1</li><li class="index_nomore__2fTsZ">下一页</li></ul></div></div></div></div></div>'
        $(".Layout_main__2_zw8").html(comHtml);
        $.getJSON('/book/countMyBooksNum', function (map) {
            // console.log(map.success);
            if (map.success) {
                if (map.booksNum !== 0) {
                    bookNum = map.booksNum;
                    alert(bookNum)
                    var spanCont = '(' + bookNum + '/10)';
                    $("#changeNum").text(spanCont);
                }
            }
        })

        $.getJSON('/book/findLearningBook', function (map) {
            // console.log(map.success);
            if (map.success) {
                if (map.book) {
                    console.log(map.book);
                    var html = '<div class="index_header__XwdPA"><p class="index_title__2zluf">正在学习的单词书</p><p class="index_entrance__3IZoL"><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAbdpuRjiV9pkZEeuMYi4LA/rZyMGwmnhN5ODcpHtWUSHE9lQ9AAAAtElEQVRIx+3QyQ7CMAxF0YQkNOnc0omZ9/8/CSskXJuCKgGVuEvrLGyrTxVbzZTlJYcLD6FkYHQNuX7EPRB5w3RsgCqne990rvhS4EBGFvBKqKhQk5EGjJLaA2OuRb5aBnf6IfecO5DcDD69zJIe+f/7Ivj91CzmuPzIzRw+vcz3P/M6N2/wAUglXUbYkVEAkiBwA7R01gJbY5nOHQBLeUgg16lRl0bCUV8qJqfXTOkpqB/tCltBL9/dCM9nAAAAAElFTkSuQmCC" alt=""><span>词表</span><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeBAMAAADePCNYAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4r4UBPaPWzLTkFhMSavX7QkAAABVSURBVBjTYyACXJSBM+WeNsCZ74RhzLp3jxygTLZ37xZAmSx6757DVBi+g2vkiMOlMQGh8TVC40skJqYCLrA2hGEIKxAWYziHDV0TwkMIbyI8TxwAACcKLq0fWv2zAAAAAElFTkSuQmCC" alt=""></p></div><div class="index_bookBox__Pb-ea"><div><img class="index_img__16fFs" ' +
                        'src="' + map.book.book_Image + '" alt=""></div><div class="index_content__2S6N2"><div><div class="index_title__2zluf">' +
                        '<p class="index_book__1x5TY">' + map.book.book_Name + '<span>真题例句</span></p><p class="index_entrance__3IZoL"><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAe1BMVEUAAAAqwaIov6Eov6Eov6IsxqhA5rMpv6Apv6ApvqEpvqMqwKQtwKUovqEswaMov6Eov6Epv6Iqv6Iov6ApvqAov6Apv6Epv6Aov6ErwKIrwqQxxq0ov6Eov6IpwKEpv6IpwKEqwaErv6oovqEov6Eov6Aov6EsxaAovqAWwLsxAAAAKHRSTlMAMMvtdxEE++fJSzUc0iir+FhH9OjdpHxmPysKvZeMg2BPGOm+smwjUUo6RgAAATJJREFUOMu9lFlug0AMQA0ME5ZhT5OSNFtX7n/CtmNbiHGwlJ+8P8tPBtljw+NYV0fE+7qVmnwzzbylK16RTEt2c4lLYywH+ykkAaLO/qJPrjcJXgCJPnw4YvFEiq/olZTqfGQomVUx8YUJGAfMtM6HuQ+2JYT0w6K+xb5I79YuPHD4XeF11NhNxw3wYRV61wlpb0BEPo4D75u9HlSROzGMoIoXHlAJqnhmLwJVPPEEDqCJdsfz/vHx4dRc74m2Yc+h99/28x2RvYqeOdY/CrEnL04xppcQCZEamLMH8YpY4M4cQRX5Hxv0dBEKg+PVROYponi4gsqna7EKgsynnbJcSIl7Y5V1RW+LgwoPQECVUcrMJ0UlSef5qhTz2VPZB4d0haSQp1myyU2qHHumdhYe5hfNEmAUcNx9BwAAAABJRU5ErkJggg==" alt="">设置任务量</p></div>' +
                        '<p class="index_text__1Hc4c"><span>预计完成时间</span>' + map.book.finishDate + '</p></div><div><div></div>' +
                        '<p class="index_complete__2x6Ox">已完成：<span>0/' + map.book.word_Num + '</span>词</p><div class="index_progress__1A1NU"><div class="index_progress__3dDPY"><div class="index_green__2qjxI" style="width: 0%;"></div><div class="index_lightGreen__3uRir" style="width: 0%;"></div></div></div></div></div></div>'
                    $(".index_container__YmQjX").html(html);
                    $(".index_entrance__3IZoL").click(function () {
                        // alert("index_BookWrap__ZDrrS")//set()
                        var name = $(this).find(".index_title__1Stb1").text();
                        var img = $(this).parents(".index_bookBox__Pb-ea").find(".index_img__16fFs").attr("src");
                        // alert(img)
                        var wordsNum = $(this).find(".index_wordsNum__1BORb").text();
                        var swiperHtml = '<div class="index_container__3IV4m"><p class="index_title__18j3R">设置任务量</p>' +
                            '<div class="index_content__JQggQ">' + '<div class="index_children__2SEg5">' + '<div class="index_container__1Yi6k">' +
                            '<div class="index_bookBox__1j7u8"><div>' +
                            '<img class="index_img__1-Zln" src="' + img + '" alt="">' +
                            // img.src+
                            '</div><div class="index_content__312Ph"><div><div class="index_title__2BeVJ">' +
                            '<p class="index_book__28ncL">' + name + '<span>真题例句</span></p>' +
                            '</div>' +
                            '<p class="index_text__3ugz6"><span>预计完成时间</span>2021年11月10日</p>' +
                            '</div><div><p class="index_complete__2mG7q">已完成：<span>0/' + wordsNum + '</span>词</p><div class="index_progress__1bKTC"><div class="index_progress__3dDPY"><div class="index_green__2qjxI" style="width: 0%;"></div><div class="index_lightGreen__3uRir" style="width: 0%;"></div></div></div></div></div></div></div></div><div class="index_children__2SEg5"><div class="index_container__3z_EW"><div class="index_selectBox__1bS4k"><div>' +
                            '<div class="index_title__3wWTf">每日学习任务</div><ul class="index_select__1X5S-"><div class="index_roll__j8aLk"><li class="index_option__2-uY1" value="bsjlni"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">5</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">10</span></span><span class="index_num__1scPb">1109</span> 天</span></li><li class="index_option__2-uY1" value="iycfg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">5</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">15</span></span><span class="index_num__1scPb">1109</span> 天</span></li><li class="index_option__2-uY1" value="zkvse"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">5</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">20</span></span><span class="index_num__1scPb">1109</span> 天</span></li><li class="index_option__2-uY1" value="cafan"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">10</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">20</span></span><span class="index_num__1scPb">555</span> 天</span></li><li class="index_option__2-uY1" value="wnzun"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">10</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">30</span></span><span class="index_num__1scPb">555</span> 天</span></li><li class="index_option__2-uY1" value="ksxwl"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">10</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">40</span></span><span class="index_num__1scPb">555</span> 天</span></li><li class="index_option__2-uY1" value="balqtu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">15</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">30</span></span><span class="index_num__1scPb">370</span> 天</span></li><li class="index_option__2-uY1" value="bvfjmu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">15</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">45</span></span><span class="index_num__1scPb">370</span> 天</span></li><li class="index_option__2-uY1" value="bbohes"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">15</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">60</span></span><span class="index_num__1scPb">370</span> 天</span></li><li class="index_option__2-uY1" value="ytmwg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">20</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">40</span></span><span class="index_num__1scPb">278</span> 天</span></li><li class="index_option__2-uY1" value="salou"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">20</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">60</span></span><span class="index_num__1scPb">278</span> 天</span></li><li class="index_option__2-uY1" value="swcvz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">20</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">80</span></span><span class="index_num__1scPb">278</span> 天</span></li><li class="index_option__2-uY1" value="bkpzex"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">25</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">50</span></span><span class="index_num__1scPb">222</span> 天</span></li><li class="index_option__2-uY1" value="gkyza"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">25</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">75</span></span><span class="index_num__1scPb">222</span> 天</span></li><li class="index_option__2-uY1" value="giwnn"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">25</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">100</span></span><span class="index_num__1scPb">222</span> 天</span></li><li class="index_option__2-uY1" value="aphen"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">30</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">60</span></span><span class="index_num__1scPb">185</span> 天</span></li><li class="index_option__2-uY1" value="otbqx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">30</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">90</span></span><span class="index_num__1scPb">185</span> 天</span></li><li class="index_option__2-uY1" value="odihq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">30</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">120</span></span><span class="index_num__1scPb">185</span> 天</span></li><li class="index_option__2-uY1" value="zisju"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">35</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">70</span></span><span class="index_num__1scPb">159</span> 天</span></li><li class="index_option__2-uY1" value="btpcvl"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">35</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">105</span></span><span class="index_num__1scPb">159</span> 天</span></li>' +
                            '<li class="index_option__2-uY1 index_highLight__2Cbgy" value="burubg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">35</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">140</span></span><span class="index_num__1scPb">159</span> 天</span></li>' +
                            '<li class="index_option__2-uY1" value="kdpkg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">40</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">80</span></span><span class="index_num__1scPb">139</span> 天</span></li><li class="index_option__2-uY1" value="cwzei"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">40</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">120</span></span><span class="index_num__1scPb">139</span> 天</span></li><li class="index_option__2-uY1" value="qvyrg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">40</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">160</span></span><span class="index_num__1scPb">139</span> 天</span></li><li class="index_option__2-uY1" value="bqqfpx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">45</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">90</span></span><span class="index_num__1scPb">124</span> 天</span></li><li class="index_option__2-uY1" value="baijjz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">45</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">135</span></span><span class="index_num__1scPb">124</span> 天</span></li><li class="index_option__2-uY1" value="exicx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">45</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">180</span></span><span class="index_num__1scPb">124</span> 天</span></li><li class="index_option__2-uY1" value="tsuqs"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">50</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">100</span></span><span class="index_num__1scPb">111</span> 天</span></li><li class="index_option__2-uY1" value="yeklc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">50</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">150</span></span><span class="index_num__1scPb">111</span> 天</span></li><li class="index_option__2-uY1" value="mnvdu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">50</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">200</span></span><span class="index_num__1scPb">111</span> 天</span></li><li class="index_option__2-uY1" value="hooui"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">60</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">120</span></span><span class="index_num__1scPb">93</span> 天</span></li><li class="index_option__2-uY1" value="blrxwq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">60</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">180</span></span><span class="index_num__1scPb">93</span> 天</span></li><li class="index_option__2-uY1" value="brfpia"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">60</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">240</span></span><span class="index_num__1scPb">93</span> 天</span></li><li class="index_option__2-uY1" value="pcgyp"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">70</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">140</span></span><span class="index_num__1scPb">80</span> 天</span></li><li class="index_option__2-uY1" value="avmhu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">70</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">210</span></span><span class="index_num__1scPb">80</span> 天</span></li><li class="index_option__2-uY1" value="ugjmp"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">70</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">280</span></span><span class="index_num__1scPb">80</span> 天</span></li><li class="index_option__2-uY1" value="buzrgc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">80</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">160</span></span><span class="index_num__1scPb">70</span> 天</span></li><li class="index_option__2-uY1" value="zxdqa"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">80</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">240</span></span><span class="index_num__1scPb">70</span> 天</span></li><li class="index_option__2-uY1" value="juuxc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">80</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">320</span></span><span class="index_num__1scPb">70</span> 天</span></li><li class="index_option__2-uY1" value="qgpic"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">90</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">180</span></span><span class="index_num__1scPb">62</span> 天</span></li><li class="index_option__2-uY1" value="knqnx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">90</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">270</span></span><span class="index_num__1scPb">62</span> 天</span></li><li class="index_option__2-uY1" value="xbxai"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">90</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">360</span></span><span class="index_num__1scPb">62</span> 天</span></li><li class="index_option__2-uY1" value="ftgrq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">100</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">200</span></span><span class="index_num__1scPb">56</span> 天</span></li><li class="index_option__2-uY1" value="bbfkyl"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">100</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">300</span></span><span class="index_num__1scPb">56</span> 天</span></li><li class="index_option__2-uY1" value="bclhtz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">100</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">400</span></span><span class="index_num__1scPb">56</span> 天</span></li><li class="index_option__2-uY1" value="nbtoz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">125</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">250</span></span><span class="index_num__1scPb">45</span> 天</span></li><li class="index_option__2-uY1" value="sgesi"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">125</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">375</span></span><span class="index_num__1scPb">45</span> 天</span></li><li class="index_option__2-uY1" value="brfpi"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">125</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">500</span></span><span class="index_num__1scPb">45</span> 天</span></li><li class="index_option__2-uY1" value="bslnzn"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">150</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">300</span></span><span class="index_num__1scPb">37</span> 天</span></li><li class="index_option__2-uY1" value="hubkz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">150</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">450</span></span><span class="index_num__1scPb">37</span> 天</span></li><li class="index_option__2-uY1" value="doqdz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">150</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">600</span></span><span class="index_num__1scPb">37</span> 天</span></li><li class="index_option__2-uY1" value="vmhua"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">175</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">350</span></span><span class="index_num__1scPb">32</span> 天</span></li><li class="index_option__2-uY1" value="pblec"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">175</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">525</span></span><span class="index_num__1scPb">32</span> 天</span></li><li class="index_option__2-uY1" value="lcnsc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">175</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">700</span></span><span class="index_num__1scPb">32</span> 天</span></li><li class="index_option__2-uY1" value="jfsle"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">200</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">400</span></span><span class="index_num__1scPb">28</span> 天</span></li><li class="index_option__2-uY1" value="bulyjq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">200</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">600</span></span><span class="index_num__1scPb">28</span> 天</span></li><li class="index_option__2-uY1" value="bqydkq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">200</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">800</span></span><span class="index_num__1scPb">28</span> 天</span></li></div></ul></div><div class="index_handleBox__mq5tP"><img class="index_icon__2xGC8" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/arrowTop.59450c5d.svg" alt=""><img class="index_icon__2xGC8" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/arrowDown.cea5e8e7.svg" alt=""></div></div></div></div></div><div class="index_handleBox__gE3qP">' +
                            '<p class="index_tip__2ZlV-" style="font-size: 20px;color: red;"></p><div class="index_handle__3fIDB">完成设置</div></div></div>'

                        $('.Layout_main__2_zw8').html(swiperHtml);
                        var finishDate;
                        $(".index_option__2-uY1").click(function () {
                            $(".index_option__2-uY1").removeClass("index_highLight__2Cbgy");
                            $(this).addClass("index_highLight__2Cbgy");
                            var num = $(".index_highLight__2Cbgy").find(".index_num__1scPb").last().text();
                            console.log(num);
                            finishDate = dateChange(num);
                        });
                        $(".index_handle__3fIDB").click(function () {
                            console.log("success");
                            $(".index_tip__2ZlV-").text("设置成功").fadeIn();
                            $.getJSON('/book/addAndSetBook', {bookName: name, finishDate: finishDate});
                            setTimeout(book, 1000);

                        });
                    });
                } else {
                    var html = '<div class="index_header__XwdPA"><p class="index_title__2zluf">正在学习的单词书</p><p class="index_entrance__3IZoL"><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAbdpuRjiV9pkZEeuMYi4LA/rZyMGwmnhN5ODcpHtWUSHE9lQ9AAAAtElEQVRIx+3QyQ7CMAxF0YQkNOnc0omZ9/8/CSskXJuCKgGVuEvrLGyrTxVbzZTlJYcLD6FkYHQNuX7EPRB5w3RsgCqne990rvhS4EBGFvBKqKhQk5EGjJLaA2OuRb5aBnf6IfecO5DcDD69zJIe+f/7Ivj91CzmuPzIzRw+vcz3P/M6N2/wAUglXUbYkVEAkiBwA7R01gJbY5nOHQBLeUgg16lRl0bCUV8qJqfXTOkpqB/tCltBL9/dCM9nAAAAAElFTkSuQmCC" alt=""><span>词表</span><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeBAMAAADePCNYAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4r4UBPaPWzLTkFhMSavX7QkAAABVSURBVBjTYyACXJSBM+WeNsCZ74RhzLp3jxygTLZ37xZAmSx6757DVBi+g2vkiMOlMQGh8TVC40skJqYCLrA2hGEIKxAWYziHDV0TwkMIbyI8TxwAACcKLq0fWv2zAAAAAElFTkSuQmCC" alt=""></p></div>' + '<div class="index_bucket__1Fl66" style="text-align: center;"><div><img class="index_img__12nTu" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/empty.60e1a871.svg" alt=""></div><div class="index_textBox__2U1cL"><p>没有正在学的单词书</p><p>点击“添加新书”，去挑选单词书吧～</p></div></div>';
                    $(".index_container__YmQjX").html(html);
                }
            } else {
                var html = '<div class="index_header__XwdPA"><p class="index_title__2zluf">正在学习的单词书</p><p class="index_entrance__3IZoL"><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAbdpuRjiV9pkZEeuMYi4LA/rZyMGwmnhN5ODcpHtWUSHE9lQ9AAAAtElEQVRIx+3QyQ7CMAxF0YQkNOnc0omZ9/8/CSskXJuCKgGVuEvrLGyrTxVbzZTlJYcLD6FkYHQNuX7EPRB5w3RsgCqne990rvhS4EBGFvBKqKhQk5EGjJLaA2OuRb5aBnf6IfecO5DcDD69zJIe+f/7Ivj91CzmuPzIzRw+vcz3P/M6N2/wAUglXUbYkVEAkiBwA7R01gJbY5nOHQBLeUgg16lRl0bCUV8qJqfXTOkpqB/tCltBL9/dCM9nAAAAAElFTkSuQmCC" alt=""><span>词表</span><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeBAMAAADePCNYAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4r4UBPaPWzLTkFhMSavX7QkAAABVSURBVBjTYyACXJSBM+WeNsCZ74RhzLp3jxygTLZ37xZAmSx6757DVBi+g2vkiMOlMQGh8TVC40skJqYCLrA2hGEIKxAWYziHDV0TwkMIbyI8TxwAACcKLq0fWv2zAAAAAElFTkSuQmCC" alt=""></p></div>' + '<div class="index_bucket__1Fl66" style="text-align: center;"><div><img class="index_img__12nTu" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/empty.60e1a871.svg" alt=""></div><div class="index_textBox__2U1cL"><p>没有正在学的单词书</p><p>点击“添加新书”，去挑选单词书吧～</p></div></div>';
                $(".index_container__YmQjX").html(html);
            }
        })

        $.getJSON('/book/findMyBooks', function (map) {
            // console.log(map.success);
            var comHtml = '<div class="index_listBox__3Xp7y"></div>';
            if (map.success) {
                if (map.books) {
                    var swiperHtml = '';
                    $(".index_flexBox__NEhPV").after(comHtml);
                    map.books.map(function (book) {
                        // console.log(index);
                        // console.log(book);
                        console.log(book.book_Name);
                        swiperHtml += '<div class="index_bookBox__2iInd">' +
                            '<div class="index_coinsWrap__3m_2_">' +
                            '<img class="index_img__OSF9-" src="' + book.book_Image + '" alt=""></div><div class="index_content__2fjn3">' +
                            '<div><p class="index_name__sO81W">' + book.book_Name + '</p><div><span class="index_bookLabel__2fR4x">真题例句</span></div>' +
                            '<p class="index_complete__S0Y_E">已完成：<span>0/' + book.word_Num + '词</span></p></div><div class="index_handleBox__6gJAw"><img class="index_icon__1egA0 del" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA0CAMAAAD/uJueAAAAYFBMVEUAAACxtsGxtb+0tMOytcK5ucKwtb6wtL60vsCxtL6wtb+xtb/i4uKxtb+wtL+xtb+xtb+zuMLMzMyxtb+6vcaxtb+yt8GztsCzt8CwtL+xtL6xuL+xtcCwtL+ytcCwtL6VTreXAAAAH3RSTlMAYtgRKR3tfhTkz/YCwruzqjEFmg1tTko5080kjYhZAfDYxgAAAOlJREFUSMftld2OgjAQRsdWdoFWbPlT92/e/y2Xz10nCurU6IWJnJseUk5omkmgs8TGOGeaLaXSBv4n2LTC7lgweVJSMXCOwcqTTr9/M3of9+0P6axR1DBfQfXC40Dxz5c8gHqM7d6P+OaBwwPyr+PdzhIo+QZKFDnfhJVLTaUiUPeLZPqanp+sCctr+3kT4nQWC2WMitGEvjHztUEvmDl7YJKF1QaruJrg1K6FiKuJGQyXJz4nczInj0w+ZFNcSxbMa6ziekKfW49FXEumvEyyKy/jziUK08SwTnuabNTPuI5GeKtwz+/7F4TnVDeZ9P4PAAAAAElFTkSuQmCC" alt="">' +
                            '<span class="index_handle__1c1p9">学习此书</span></div></div></div>';
                    });
                    $(".index_listBox__3Xp7y").html(swiperHtml);


                    $(".del").click(function () {
                        bookNum = bookNum - 1;
                        // alert(bookNum)
                        if (bookNum === 0){
                            var html = '<div class="index_bucket__1Fl66" style="text-align: center;"><div><img class="index_img__12nTu" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/empty.60e1a871.svg" alt=""></div><div class="index_textBox__2U1cL"><p>书桌没有单词书喔</p><p>点击“添加新书”，去挑选单词书吧～</p></div></div>'
                            $(".index_flexBox__NEhPV").after(html);
                        }
                        var spanCon = '(' + bookNum + '/10)';
                        $("#changeNum").text(spanCon);
                        var me = $(this);
                        var bookName = me.parents(".index_content__2fjn3").find(".index_name__sO81W").text();
                        $.getJSON('/book/delMyBook', {bookName: bookName}, function (map) {
                            // console.log(map.success);
                            if (map.success) {
                                me.parents(".index_bookBox__2iInd").remove();
                                if (map.result === 0) {
                                    var html = '<div class="index_header__XwdPA"><p class="index_title__2zluf">正在学习的单词书</p><p class="index_entrance__3IZoL"><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAbdpuRjiV9pkZEeuMYi4LA/rZyMGwmnhN5ODcpHtWUSHE9lQ9AAAAtElEQVRIx+3QyQ7CMAxF0YQkNOnc0omZ9/8/CSskXJuCKgGVuEvrLGyrTxVbzZTlJYcLD6FkYHQNuX7EPRB5w3RsgCqne990rvhS4EBGFvBKqKhQk5EGjJLaA2OuRb5aBnf6IfecO5DcDD69zJIe+f/7Ivj91CzmuPzIzRw+vcz3P/M6N2/wAUglXUbYkVEAkiBwA7R01gJbY5nOHQBLeUgg16lRl0bCUV8qJqfXTOkpqB/tCltBL9/dCM9nAAAAAElFTkSuQmCC" alt=""><span>词表</span><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeBAMAAADePCNYAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4r4UBPaPWzLTkFhMSavX7QkAAABVSURBVBjTYyACXJSBM+WeNsCZ74RhzLp3jxygTLZ37xZAmSx6757DVBi+g2vkiMOlMQGh8TVC40skJqYCLrA2hGEIKxAWYziHDV0TwkMIbyI8TxwAACcKLq0fWv2zAAAAAElFTkSuQmCC" alt=""></p></div>' + '<div class="index_bucket__1Fl66" style="text-align: center;"><div><img class="index_img__12nTu" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/empty.60e1a871.svg" alt=""></div><div class="index_textBox__2U1cL"><p>没有正在学的单词书</p><p>点击“添加新书”，去挑选单词书吧～</p></div></div>';
                                    $(".index_container__YmQjX").html(html);
                                }
                            }
                        })

                    })
                    $(".index_handle__1c1p9").click(function () {
                        var bookName = $(this).parents(".index_content__2fjn3").find(".index_name__sO81W").text();
                        console.log(bookName);
                        $.getJSON('/book/updLearningBook', {bookName: bookName}, function (map) {
                            // console.log(map.success);
                            if (map.success) {
                                if (map.book) {
                                    var html = '<div class="index_header__XwdPA"><p class="index_title__2zluf">正在学习的单词书</p><p class="index_entrance__3IZoL"><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAbdpuRjiV9pkZEeuMYi4LA/rZyMGwmnhN5ODcpHtWUSHE9lQ9AAAAtElEQVRIx+3QyQ7CMAxF0YQkNOnc0omZ9/8/CSskXJuCKgGVuEvrLGyrTxVbzZTlJYcLD6FkYHQNuX7EPRB5w3RsgCqne990rvhS4EBGFvBKqKhQk5EGjJLaA2OuRb5aBnf6IfecO5DcDD69zJIe+f/7Ivj91CzmuPzIzRw+vcz3P/M6N2/wAUglXUbYkVEAkiBwA7R01gJbY5nOHQBLeUgg16lRl0bCUV8qJqfXTOkpqB/tCltBL9/dCM9nAAAAAElFTkSuQmCC" alt=""><span>词表</span><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeBAMAAADePCNYAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4r4UBPaPWzLTkFhMSavX7QkAAABVSURBVBjTYyACXJSBM+WeNsCZ74RhzLp3jxygTLZ37xZAmSx6757DVBi+g2vkiMOlMQGh8TVC40skJqYCLrA2hGEIKxAWYziHDV0TwkMIbyI8TxwAACcKLq0fWv2zAAAAAElFTkSuQmCC" alt=""></p></div><div class="index_bookBox__Pb-ea"><div><img class="index_img__16fFs" ' +
                                        'src="' + map.book.book_Image + '" alt=""></div><div class="index_content__2S6N2"><div><div class="index_title__2zluf">' +
                                        '<p class="index_book__1x5TY">' + map.book.book_Name + '<span>真题例句</span></p><p class="index_entrance__3IZoL"><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAe1BMVEUAAAAqwaIov6Eov6Eov6IsxqhA5rMpv6Apv6ApvqEpvqMqwKQtwKUovqEswaMov6Eov6Epv6Iqv6Iov6ApvqAov6Apv6Epv6Aov6ErwKIrwqQxxq0ov6Eov6IpwKEpv6IpwKEqwaErv6oovqEov6Eov6Aov6EsxaAovqAWwLsxAAAAKHRSTlMAMMvtdxEE++fJSzUc0iir+FhH9OjdpHxmPysKvZeMg2BPGOm+smwjUUo6RgAAATJJREFUOMu9lFlug0AMQA0ME5ZhT5OSNFtX7n/CtmNbiHGwlJ+8P8tPBtljw+NYV0fE+7qVmnwzzbylK16RTEt2c4lLYywH+ykkAaLO/qJPrjcJXgCJPnw4YvFEiq/olZTqfGQomVUx8YUJGAfMtM6HuQ+2JYT0w6K+xb5I79YuPHD4XeF11NhNxw3wYRV61wlpb0BEPo4D75u9HlSROzGMoIoXHlAJqnhmLwJVPPEEDqCJdsfz/vHx4dRc74m2Yc+h99/28x2RvYqeOdY/CrEnL04xppcQCZEamLMH8YpY4M4cQRX5Hxv0dBEKg+PVROYponi4gsqna7EKgsynnbJcSIl7Y5V1RW+LgwoPQECVUcrMJ0UlSef5qhTz2VPZB4d0haSQp1myyU2qHHumdhYe5hfNEmAUcNx9BwAAAABJRU5ErkJggg==" alt="">设置任务量</p></div>' +
                                        '<p class="index_text__1Hc4c"><span>预计完成时间</span>' + map.book.finishDate + '</p></div><div><div></div>' +
                                        '<p class="index_complete__2x6Ox">已完成：<span>0/' + map.book.word_Num + '</span>词</p><div class="index_progress__1A1NU"><div class="index_progress__3dDPY"><div class="index_green__2qjxI" style="width: 0%;"></div><div class="index_lightGreen__3uRir" style="width: 0%;"></div></div></div></div></div></div>'
                                    $(".index_container__YmQjX").html(html);
                                    $(".index_entrance__3IZoL").click(function () {
                                        // alert("index_BookWrap__ZDrrS")//set()
                                        var name = $(this).find(".index_title__1Stb1").text();
                                        var img = $(this).parents(".index_bookBox__Pb-ea").find(".index_img__16fFs").attr("src");
                                        // alert(img)
                                        var wordsNum = $(this).find(".index_wordsNum__1BORb").text();
                                        var swiperHtml = '<div class="index_container__3IV4m"><p class="index_title__18j3R">设置任务量</p>' +
                                            '<div class="index_content__JQggQ">' + '<div class="index_children__2SEg5">' + '<div class="index_container__1Yi6k">' +
                                            '<div class="index_bookBox__1j7u8"><div>' +
                                            '<img class="index_img__1-Zln" src="' + img + '" alt="">' +
                                            // img.src+
                                            '</div><div class="index_content__312Ph"><div><div class="index_title__2BeVJ">' +
                                            '<p class="index_book__28ncL">' + name + '<span>真题例句</span></p>' +
                                            '</div>' +
                                            '<p class="index_text__3ugz6"><span>预计完成时间</span>2021年11月10日</p>' +
                                            '</div><div><p class="index_complete__2mG7q">已完成：<span>0/' + wordsNum + '</span>词</p><div class="index_progress__1bKTC"><div class="index_progress__3dDPY"><div class="index_green__2qjxI" style="width: 0%;"></div><div class="index_lightGreen__3uRir" style="width: 0%;"></div></div></div></div></div></div></div></div><div class="index_children__2SEg5"><div class="index_container__3z_EW"><div class="index_selectBox__1bS4k"><div>' +
                                            '<div class="index_title__3wWTf">每日学习任务</div><ul class="index_select__1X5S-"><div class="index_roll__j8aLk"><li class="index_option__2-uY1" value="bsjlni"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">5</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">10</span></span><span class="index_num__1scPb">1109</span> 天</span></li><li class="index_option__2-uY1" value="iycfg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">5</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">15</span></span><span class="index_num__1scPb">1109</span> 天</span></li><li class="index_option__2-uY1" value="zkvse"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">5</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">20</span></span><span class="index_num__1scPb">1109</span> 天</span></li><li class="index_option__2-uY1" value="cafan"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">10</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">20</span></span><span class="index_num__1scPb">555</span> 天</span></li><li class="index_option__2-uY1" value="wnzun"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">10</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">30</span></span><span class="index_num__1scPb">555</span> 天</span></li><li class="index_option__2-uY1" value="ksxwl"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">10</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">40</span></span><span class="index_num__1scPb">555</span> 天</span></li><li class="index_option__2-uY1" value="balqtu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">15</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">30</span></span><span class="index_num__1scPb">370</span> 天</span></li><li class="index_option__2-uY1" value="bvfjmu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">15</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">45</span></span><span class="index_num__1scPb">370</span> 天</span></li><li class="index_option__2-uY1" value="bbohes"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">15</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">60</span></span><span class="index_num__1scPb">370</span> 天</span></li><li class="index_option__2-uY1" value="ytmwg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">20</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">40</span></span><span class="index_num__1scPb">278</span> 天</span></li><li class="index_option__2-uY1" value="salou"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">20</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">60</span></span><span class="index_num__1scPb">278</span> 天</span></li><li class="index_option__2-uY1" value="swcvz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">20</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">80</span></span><span class="index_num__1scPb">278</span> 天</span></li><li class="index_option__2-uY1" value="bkpzex"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">25</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">50</span></span><span class="index_num__1scPb">222</span> 天</span></li><li class="index_option__2-uY1" value="gkyza"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">25</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">75</span></span><span class="index_num__1scPb">222</span> 天</span></li><li class="index_option__2-uY1" value="giwnn"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">25</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">100</span></span><span class="index_num__1scPb">222</span> 天</span></li><li class="index_option__2-uY1" value="aphen"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">30</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">60</span></span><span class="index_num__1scPb">185</span> 天</span></li><li class="index_option__2-uY1" value="otbqx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">30</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">90</span></span><span class="index_num__1scPb">185</span> 天</span></li><li class="index_option__2-uY1" value="odihq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">30</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">120</span></span><span class="index_num__1scPb">185</span> 天</span></li><li class="index_option__2-uY1" value="zisju"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">35</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">70</span></span><span class="index_num__1scPb">159</span> 天</span></li><li class="index_option__2-uY1" value="btpcvl"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">35</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">105</span></span><span class="index_num__1scPb">159</span> 天</span></li>' +
                                            '<li class="index_option__2-uY1 index_highLight__2Cbgy" value="burubg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">35</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">140</span></span><span class="index_num__1scPb">159</span> 天</span></li>' +
                                            '<li class="index_option__2-uY1" value="kdpkg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">40</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">80</span></span><span class="index_num__1scPb">139</span> 天</span></li><li class="index_option__2-uY1" value="cwzei"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">40</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">120</span></span><span class="index_num__1scPb">139</span> 天</span></li><li class="index_option__2-uY1" value="qvyrg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">40</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">160</span></span><span class="index_num__1scPb">139</span> 天</span></li><li class="index_option__2-uY1" value="bqqfpx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">45</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">90</span></span><span class="index_num__1scPb">124</span> 天</span></li><li class="index_option__2-uY1" value="baijjz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">45</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">135</span></span><span class="index_num__1scPb">124</span> 天</span></li><li class="index_option__2-uY1" value="exicx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">45</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">180</span></span><span class="index_num__1scPb">124</span> 天</span></li><li class="index_option__2-uY1" value="tsuqs"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">50</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">100</span></span><span class="index_num__1scPb">111</span> 天</span></li><li class="index_option__2-uY1" value="yeklc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">50</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">150</span></span><span class="index_num__1scPb">111</span> 天</span></li><li class="index_option__2-uY1" value="mnvdu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">50</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">200</span></span><span class="index_num__1scPb">111</span> 天</span></li><li class="index_option__2-uY1" value="hooui"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">60</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">120</span></span><span class="index_num__1scPb">93</span> 天</span></li><li class="index_option__2-uY1" value="blrxwq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">60</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">180</span></span><span class="index_num__1scPb">93</span> 天</span></li><li class="index_option__2-uY1" value="brfpia"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">60</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">240</span></span><span class="index_num__1scPb">93</span> 天</span></li><li class="index_option__2-uY1" value="pcgyp"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">70</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">140</span></span><span class="index_num__1scPb">80</span> 天</span></li><li class="index_option__2-uY1" value="avmhu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">70</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">210</span></span><span class="index_num__1scPb">80</span> 天</span></li><li class="index_option__2-uY1" value="ugjmp"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">70</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">280</span></span><span class="index_num__1scPb">80</span> 天</span></li><li class="index_option__2-uY1" value="buzrgc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">80</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">160</span></span><span class="index_num__1scPb">70</span> 天</span></li><li class="index_option__2-uY1" value="zxdqa"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">80</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">240</span></span><span class="index_num__1scPb">70</span> 天</span></li><li class="index_option__2-uY1" value="juuxc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">80</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">320</span></span><span class="index_num__1scPb">70</span> 天</span></li><li class="index_option__2-uY1" value="qgpic"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">90</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">180</span></span><span class="index_num__1scPb">62</span> 天</span></li><li class="index_option__2-uY1" value="knqnx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">90</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">270</span></span><span class="index_num__1scPb">62</span> 天</span></li><li class="index_option__2-uY1" value="xbxai"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">90</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">360</span></span><span class="index_num__1scPb">62</span> 天</span></li><li class="index_option__2-uY1" value="ftgrq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">100</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">200</span></span><span class="index_num__1scPb">56</span> 天</span></li><li class="index_option__2-uY1" value="bbfkyl"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">100</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">300</span></span><span class="index_num__1scPb">56</span> 天</span></li><li class="index_option__2-uY1" value="bclhtz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">100</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">400</span></span><span class="index_num__1scPb">56</span> 天</span></li><li class="index_option__2-uY1" value="nbtoz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">125</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">250</span></span><span class="index_num__1scPb">45</span> 天</span></li><li class="index_option__2-uY1" value="sgesi"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">125</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">375</span></span><span class="index_num__1scPb">45</span> 天</span></li><li class="index_option__2-uY1" value="brfpi"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">125</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">500</span></span><span class="index_num__1scPb">45</span> 天</span></li><li class="index_option__2-uY1" value="bslnzn"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">150</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">300</span></span><span class="index_num__1scPb">37</span> 天</span></li><li class="index_option__2-uY1" value="hubkz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">150</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">450</span></span><span class="index_num__1scPb">37</span> 天</span></li><li class="index_option__2-uY1" value="doqdz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">150</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">600</span></span><span class="index_num__1scPb">37</span> 天</span></li><li class="index_option__2-uY1" value="vmhua"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">175</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">350</span></span><span class="index_num__1scPb">32</span> 天</span></li><li class="index_option__2-uY1" value="pblec"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">175</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">525</span></span><span class="index_num__1scPb">32</span> 天</span></li><li class="index_option__2-uY1" value="lcnsc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">175</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">700</span></span><span class="index_num__1scPb">32</span> 天</span></li><li class="index_option__2-uY1" value="jfsle"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">200</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">400</span></span><span class="index_num__1scPb">28</span> 天</span></li><li class="index_option__2-uY1" value="bulyjq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">200</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">600</span></span><span class="index_num__1scPb">28</span> 天</span></li><li class="index_option__2-uY1" value="bqydkq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">200</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">800</span></span><span class="index_num__1scPb">28</span> 天</span></li></div></ul></div><div class="index_handleBox__mq5tP"><img class="index_icon__2xGC8" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/arrowTop.59450c5d.svg" alt=""><img class="index_icon__2xGC8" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/arrowDown.cea5e8e7.svg" alt=""></div></div></div></div></div><div class="index_handleBox__gE3qP">' +
                                            '<p class="index_tip__2ZlV-" style="font-size: 20px;color: red;"></p><div class="index_handle__3fIDB">完成设置</div></div></div>'

                                        $('.Layout_main__2_zw8').html(swiperHtml);
                                        var finishDate;
                                        $(".index_option__2-uY1").click(function () {
                                            $(".index_option__2-uY1").removeClass("index_highLight__2Cbgy");
                                            $(this).addClass("index_highLight__2Cbgy");
                                            var num = $(".index_highLight__2Cbgy").find(".index_num__1scPb").last().text();
                                            console.log(num);
                                            finishDate = dateChange(num);
                                        });
                                        $(".index_handle__3fIDB").click(function () {
                                            console.log("success");
                                            $(".index_tip__2ZlV-").text("设置成功").fadeIn();
                                            $.getJSON('/book/addAndSetBook', {bookName: name, finishDate: finishDate});
                                            setTimeout(book, 1000);

                                        });
                                    });

                                } else {
                                    var html = '<div class="index_header__XwdPA"><p class="index_title__2zluf">正在学习的单词书</p><p class="index_entrance__3IZoL"><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAbdpuRjiV9pkZEeuMYi4LA/rZyMGwmnhN5ODcpHtWUSHE9lQ9AAAAtElEQVRIx+3QyQ7CMAxF0YQkNOnc0omZ9/8/CSskXJuCKgGVuEvrLGyrTxVbzZTlJYcLD6FkYHQNuX7EPRB5w3RsgCqne990rvhS4EBGFvBKqKhQk5EGjJLaA2OuRb5aBnf6IfecO5DcDD69zJIe+f/7Ivj91CzmuPzIzRw+vcz3P/M6N2/wAUglXUbYkVEAkiBwA7R01gJbY5nOHQBLeUgg16lRl0bCUV8qJqfXTOkpqB/tCltBL9/dCM9nAAAAAElFTkSuQmCC" alt=""><span>词表</span><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeBAMAAADePCNYAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4r4UBPaPWzLTkFhMSavX7QkAAABVSURBVBjTYyACXJSBM+WeNsCZ74RhzLp3jxygTLZ37xZAmSx6757DVBi+g2vkiMOlMQGh8TVC40skJqYCLrA2hGEIKxAWYziHDV0TwkMIbyI8TxwAACcKLq0fWv2zAAAAAElFTkSuQmCC" alt=""></p></div>' + '<div class="index_bucket__1Fl66" style="text-align: center;"><div><img class="index_img__12nTu" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/empty.60e1a871.svg" alt=""></div><div class="index_textBox__2U1cL"><p>没有正在学的单词书</p><p>点击“添加新书”，去挑选单词书吧～</p></div></div>';
                                    $(".index_container__YmQjX").html(html);
                                }
                            } else {
                                var html = '<div class="index_header__XwdPA"><p class="index_title__2zluf">正在学习的单词书</p><p class="index_entrance__3IZoL"><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAbdpuRjiV9pkZEeuMYi4LA/rZyMGwmnhN5ODcpHtWUSHE9lQ9AAAAtElEQVRIx+3QyQ7CMAxF0YQkNOnc0omZ9/8/CSskXJuCKgGVuEvrLGyrTxVbzZTlJYcLD6FkYHQNuX7EPRB5w3RsgCqne990rvhS4EBGFvBKqKhQk5EGjJLaA2OuRb5aBnf6IfecO5DcDD69zJIe+f/7Ivj91CzmuPzIzRw+vcz3P/M6N2/wAUglXUbYkVEAkiBwA7R01gJbY5nOHQBLeUgg16lRl0bCUV8qJqfXTOkpqB/tCltBL9/dCM9nAAAAAElFTkSuQmCC" alt=""><span>词表</span><img class="index_icon__1P1w8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeBAMAAADePCNYAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4r4UBPaPWzLTkFhMSavX7QkAAABVSURBVBjTYyACXJSBM+WeNsCZ74RhzLp3jxygTLZ37xZAmSx6757DVBi+g2vkiMOlMQGh8TVC40skJqYCLrA2hGEIKxAWYziHDV0TwkMIbyI8TxwAACcKLq0fWv2zAAAAAElFTkSuQmCC" alt=""></p></div>' + '<div class="index_bucket__1Fl66" style="text-align: center;"><div><img class="index_img__12nTu" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/empty.60e1a871.svg" alt=""></div><div class="index_textBox__2U1cL"><p>没有正在学的单词书</p><p>点击“添加新书”，去挑选单词书吧～</p></div></div>';
                                $(".index_container__YmQjX").html(html);
                            }
                        })

                    })
                } else {
                    var html = '<div class="index_bucket__1Fl66" style="text-align: center;"><div><img class="index_img__12nTu" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/empty.60e1a871.svg" alt=""></div><div class="index_textBox__2U1cL"><p>书桌没有单词书喔</p><p>点击“添加新书”，去挑选单词书吧～</p></div></div>'
                    $(".index_flexBox__NEhPV").after(html);
                }
            } else {
                var html = '<div class="index_bucket__1Fl66" style="text-align: center;"><div><img class="index_img__12nTu" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/empty.60e1a871.svg" alt=""></div><div class="index_textBox__2U1cL"><p>书桌没有单词书喔</p><p>点击“添加新书”，去挑选单词书吧～</p></div></div>'
                $(".index_flexBox__NEhPV").after(html);
            }

        })


        $("#addBook").click(function () {
            // alert("addBookTc")
            var swiperHtml = "";
            swiperHtml = '<div class="ChooseBooksContainer_search-bar__193W8">\n' +
                '                <div class="SearchBar_search-bar__19Qn5">\n' +
                '                    <div class="search-bar-inner">\n' +
                '                        <span class="search-input">\n' +
                '                            <img class="search-input__affix"\n' +
                '                                 src="https://assets.baydn.com/web_static/words_wordsweb/static/media/search.dbbf2c47.svg"\n' +
                '                                 alt="">\n' +
                '                                <input id="searchCon" placeholder="" value="">\n' +
                '                        </span>\n' +
                '                        <span class="search-input-suffix">\n' +
                '                            <button class="search-btn">搜索</button>\n' +
                '                        </span>\n' +
                '                    </div>\n' +
                '                    <div class="search-dropdown">\n' +
                '                        <ul class="dropdown-menu"></ul>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        <div class="index_wrap__3oAZD">\n' +
                '            <div class="index_nav__gj_b0">\n' +
                '                <div class="index_nav__3riRR">\n' +
                '                    <div class="index_navItem__1Fbwq" id="zkvse">\n' +
                '                        <div class="index_navItemContent__mA21b index_topActive__1t-6H">四级</div>\n' +
                '                    </div>\n' +
                '                    <div class="index_navItem__1Fbwq" id="ksxwl">\n' +
                '                        <div class="index_navItemContent__mA21b">六级</div>\n' +
                '                    </div>\n' +
                '                    <div class="index_navItem__1Fbwq" id="bbohes">\n' +
                '                        <div class="index_navItemContent__mA21b">考研</div>\n' +
                '                    </div>\n' +
                '                    <div class="index_navItem__1Fbwq" id="giwnn">\n' +
                '                        <div class="index_navItemContent__mA21b">托福</div>\n' +
                '                    </div>\n' +
                '                    <div class="index_navItem__1Fbwq" id="odihq">\n' +
                '                        <div class="index_navItemContent__mA21b">雅思</div>\n' +
                '                    </div>\n' +
                '                    <div class="index_navItem__1Fbwq" id="bsofbl">\n' +
                '                        <div class="index_navItemContent__mA21b">英专</div>\n' +
                '                    </div>\n' +
                '                    <div class="index_navItem__1Fbwq" id="btqzfg">\n' +
                '                        <div class="index_navItemContent__mA21b">其他</div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="index_chooseBookWrap__1hfro">\n' +
                '                <div class="index_booksWrap__Mi_JF index_bookList__39SQe">\n' +
                '                    <div class="index_row-wrap__SL13S">\n' +
                '                        <div class="index_row-divider__28GQ3"></div>\n' +
                '                        <div class="index_row__8EJXw">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div class="index_needBookModal__3j6oB">\n' +
                '                    <div class="index_circleWrap__1_dF1">\n' +
                '                        <img src="https://assets.baydn.com/web_static/words_wordsweb/static/media/needBook.1fc421ea.svg"\n' +
                '                             alt="">\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div class="index_pagination__GlyFX">\n' +
                '                    <ul class="index_pageContainer__2l7E1">\n' +
                '                        <li class="index_nomore__2fTsZ">上一页</li>\n' +
                '                        <li class="index_activePage__3C9pk">1</li>\n' +
                '                        <li class="index_nomore__2fTsZ">下一页</li>\n' +
                '                    </ul>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>'
            $('.Layout_main__2_zw8').html(swiperHtml);
            findBookByType('四级');

            $(".index_navItemContent__mA21b").click(function () {
                $(".index_navItemContent__mA21b").removeClass("index_topActive__1t-6H");
                $(this).addClass("index_topActive__1t-6H");
                var bookType = $(".index_topActive__1t-6H").text();
                alert(bookType);
                findBookByType(bookType);
            });

            //搜索书名找书
            function queryBookByName(queryKey) {
                $.getJSON('/book/queryBookByName', {queryKey: queryKey}, function (map) {
                    var comHtml =
                        '<div class="BooksSearchContainer_book-search-container__2db85">\n' +
                        '                        <div class="index_booksWrap__Mi_JF">\n' +
                        '                            <div class="index_row-wrap__SL13S">\n' +
                        '                                <div class="index_row-divider__28GQ3"></div>\n' +
                        '                                <div class="index_row__8EJXw">\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>'
                    $('.index_wrap__3oAZD').replaceWith(comHtml);
                    $('.BooksSearchContainer_book-search-container__2db85').replaceWith(comHtml);
                    if (map.success) {
                        alert("success");
                        var swiperHtml = "";
                        var books = map.books;
                        var num = 0;
                        books.map(function (book, index) {
                            console.log(index);
                            console.log(book);
                            console.log(book.book_Name);
                            swiperHtml += '<div class="index_BookWrap__ZDrrS">' +
                                '<div class="index_coinsWrap__36aSW">' +
                                '<img class="index_image__1ULFG" src="' + book.book_Image + '" alt="">' +
                                '</div>' +
                                '<div class="index_title__1Stb1">' + book.book_Name + '</div>' +
                                '<div class="index_trueExample__1j014">' + book.book_Introduction + '</div>' +
                                '<div class="index_wordsNum__1BORb">' + book.word_Num + '</div></div>'
                            num = index + 1;
                        });
                        alert(num);
                        if (num < 5) {
                            for (i = 1; i <= 5 - num; i++) {
                                swiperHtml += '<div class="index_placeholder__3BNXg"></div>'
                            }
                        }

                        $('.index_row__8EJXw').html(swiperHtml);

                    } else {
                        var textHtml =
                            '<div class="search-empty-wrap"><div class="SearchEmpty_search-empty__3dWPY"><div class="empty-tip"><img src="https://media-image1.baydn.com/storage_media_image/buteka/acc030e657fc84e25ae6080164cce683.da329360f6579fef686542b5f2c3fc1f.png" alt="">' +
                            '<p>没有搜到相关的单词书哦</p>' +
                            '</div></div></div>'
                        $('.BooksSearchContainer_book-search-container__2db85').html(textHtml)
                    }

                });
                // var queryKey = document.getElementById("clickSearch");
                // alert(queryKey);
                // $("#clickSearch").click(function () {
                //     alert("search")
                //
                //
                //     queryBookByName(queryKey);
                //
                //
                // });

            }

            $(".search-btn").click(function () {
                alert("search")
                var queryKey = document.getElementById("searchCon").value;
                alert(queryKey);

                queryBookByName(queryKey);

                // var button = document.getElementById("clickSearch");
                // alert(button);
                // $(".search-btn").click(function () {
                //     alert("button")
                //
                //
                //     // queryBookByName(queryKey);
                //
                //
                // });


            });


        });

    }

    $("#book").click(function () {
        book();
    });

    function findBookByType(bookType) {
        $.getJSON('/book/findBookByType', {bookType: bookType}, function (map) {

            if (map.success) {
                // alert("success");
                var swiperHtml = "";
                var books = map.books;
                var num = 0;
                books.map(function (book, index) {
                    // console.log(index);
                    // console.log(book);
                    // console.log(book.book_Name);
                    swiperHtml += '<div class="index_BookWrap__ZDrrS">' +
                        '<div class="index_coinsWrap__36aSW">' +
                        '<img class="index_image__1ULFG" src="' + book.book_Image + '" alt="">' +
                        '</div>' +
                        '<div class="index_title__1Stb1">' + book.book_Name + '</div>' +
                        '<div class="index_trueExample__1j014">' + book.book_Introduction + '</div>' +
                        '<div class="index_wordsNum__1BORb">' + book.word_Num + '</div></div>'
                    num = index + 1;
                });
                // alert(num);
                if (num < 5) {
                    for (i = 1; i <= 5 - num; i++) {
                        swiperHtml += '<div class="index_placeholder__3BNXg"></div>'
                    }
                }

                $('.index_row__8EJXw').html(swiperHtml);

            } else {
                var textHtml = '<div class="index_booksWrap__Mi_JF index_bookList__39SQe">\n' +
                    '                            <div class="index_row-wrap__SL13S">\n' +
                    '                                <div class="index_row-divider__28GQ3"></div>\n' +
                    '                                <div class="index_row__8EJXw">\n' +
                    '                                    <div>\n' +
                    '                                        <img\n' +
                    '                                            src="https://media-image1.baydn.com/storage_media_image/buteka/acc030e657fc84e25ae6080164cce683.da329360f6579fef686542b5f2c3fc1f.png"\n' +
                    '                                            alt="">\n' +
                    '                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n' +
                    '                                                没有搜到相关的单词书哦\n' +
                    '                                            </p>\n' +
                    '                                    </div>\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '                        </div>'
                $('.index_chooseBookWrap__1hfro').html(textHtml)
            }

            //点击之后跳到设置每日学习量界面
            $(".index_BookWrap__ZDrrS").click(
                function () {
                    // alert("index_BookWrap__ZDrrS")
                    var name = $(this).find(".index_title__1Stb1").text();
                    var img = $(this).find(".index_image__1ULFG").attr("src");
                    // alert(img)
                    var wordsNum = $(this).find(".index_wordsNum__1BORb").text();
                    var swiperHtml = '<div class="index_container__3IV4m"><p class="index_title__18j3R">设置任务量</p>' +
                        '<div class="index_content__JQggQ">' + '<div class="index_children__2SEg5">' + '<div class="index_container__1Yi6k">' +
                        '<div class="index_bookBox__1j7u8"><div>' +
                        '<img class="index_img__1-Zln" src="' + img + '" alt="">' +
                        // img.src+
                        '</div><div class="index_content__312Ph"><div><div class="index_title__2BeVJ">' +
                        '<p class="index_book__28ncL">' + name + '<span>真题例句</span></p>' +
                        '</div>' +
                        '<p class="index_text__3ugz6"><span>预计完成时间</span>2021年11月10日</p>' +
                        '</div><div><p class="index_complete__2mG7q">已完成：<span>0/' + wordsNum + '</span>词</p><div class="index_progress__1bKTC"><div class="index_progress__3dDPY"><div class="index_green__2qjxI" style="width: 0%;"></div><div class="index_lightGreen__3uRir" style="width: 0%;"></div></div></div></div></div></div></div></div><div class="index_children__2SEg5"><div class="index_container__3z_EW"><div class="index_selectBox__1bS4k"><div>' +
                        '<div class="index_title__3wWTf">每日学习任务</div><ul class="index_select__1X5S-"><div class="index_roll__j8aLk"><li class="index_option__2-uY1" value="bsjlni"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">5</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">10</span></span><span class="index_num__1scPb">1109</span> 天</span></li><li class="index_option__2-uY1" value="iycfg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">5</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">15</span></span><span class="index_num__1scPb">1109</span> 天</span></li><li class="index_option__2-uY1" value="zkvse"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">5</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">20</span></span><span class="index_num__1scPb">1109</span> 天</span></li><li class="index_option__2-uY1" value="cafan"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">10</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">20</span></span><span class="index_num__1scPb">555</span> 天</span></li><li class="index_option__2-uY1" value="wnzun"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">10</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">30</span></span><span class="index_num__1scPb">555</span> 天</span></li><li class="index_option__2-uY1" value="ksxwl"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">10</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">40</span></span><span class="index_num__1scPb">555</span> 天</span></li><li class="index_option__2-uY1" value="balqtu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">15</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">30</span></span><span class="index_num__1scPb">370</span> 天</span></li><li class="index_option__2-uY1" value="bvfjmu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">15</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">45</span></span><span class="index_num__1scPb">370</span> 天</span></li><li class="index_option__2-uY1" value="bbohes"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">15</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">60</span></span><span class="index_num__1scPb">370</span> 天</span></li><li class="index_option__2-uY1" value="ytmwg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">20</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">40</span></span><span class="index_num__1scPb">278</span> 天</span></li><li class="index_option__2-uY1" value="salou"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">20</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">60</span></span><span class="index_num__1scPb">278</span> 天</span></li><li class="index_option__2-uY1" value="swcvz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">20</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">80</span></span><span class="index_num__1scPb">278</span> 天</span></li><li class="index_option__2-uY1" value="bkpzex"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">25</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">50</span></span><span class="index_num__1scPb">222</span> 天</span></li><li class="index_option__2-uY1" value="gkyza"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">25</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">75</span></span><span class="index_num__1scPb">222</span> 天</span></li><li class="index_option__2-uY1" value="giwnn"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">25</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">100</span></span><span class="index_num__1scPb">222</span> 天</span></li><li class="index_option__2-uY1" value="aphen"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">30</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">60</span></span><span class="index_num__1scPb">185</span> 天</span></li><li class="index_option__2-uY1" value="otbqx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">30</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">90</span></span><span class="index_num__1scPb">185</span> 天</span></li><li class="index_option__2-uY1" value="odihq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">30</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">120</span></span><span class="index_num__1scPb">185</span> 天</span></li><li class="index_option__2-uY1" value="zisju"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">35</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">70</span></span><span class="index_num__1scPb">159</span> 天</span></li><li class="index_option__2-uY1" value="btpcvl"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">35</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">105</span></span><span class="index_num__1scPb">159</span> 天</span></li>' +
                        '<li class="index_option__2-uY1 index_highLight__2Cbgy" value="burubg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">35</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">140</span></span><span class="index_num__1scPb">159</span> 天</span></li>' +
                        '<li class="index_option__2-uY1" value="kdpkg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">40</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">80</span></span><span class="index_num__1scPb">139</span> 天</span></li><li class="index_option__2-uY1" value="cwzei"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">40</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">120</span></span><span class="index_num__1scPb">139</span> 天</span></li><li class="index_option__2-uY1" value="qvyrg"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">40</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">160</span></span><span class="index_num__1scPb">139</span> 天</span></li><li class="index_option__2-uY1" value="bqqfpx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">45</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">90</span></span><span class="index_num__1scPb">124</span> 天</span></li><li class="index_option__2-uY1" value="baijjz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">45</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">135</span></span><span class="index_num__1scPb">124</span> 天</span></li><li class="index_option__2-uY1" value="exicx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">45</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">180</span></span><span class="index_num__1scPb">124</span> 天</span></li><li class="index_option__2-uY1" value="tsuqs"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">50</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">100</span></span><span class="index_num__1scPb">111</span> 天</span></li><li class="index_option__2-uY1" value="yeklc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">50</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">150</span></span><span class="index_num__1scPb">111</span> 天</span></li><li class="index_option__2-uY1" value="mnvdu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">50</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">200</span></span><span class="index_num__1scPb">111</span> 天</span></li><li class="index_option__2-uY1" value="hooui"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">60</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">120</span></span><span class="index_num__1scPb">93</span> 天</span></li><li class="index_option__2-uY1" value="blrxwq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">60</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">180</span></span><span class="index_num__1scPb">93</span> 天</span></li><li class="index_option__2-uY1" value="brfpia"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">60</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">240</span></span><span class="index_num__1scPb">93</span> 天</span></li><li class="index_option__2-uY1" value="pcgyp"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">70</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">140</span></span><span class="index_num__1scPb">80</span> 天</span></li><li class="index_option__2-uY1" value="avmhu"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">70</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">210</span></span><span class="index_num__1scPb">80</span> 天</span></li><li class="index_option__2-uY1" value="ugjmp"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">70</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">280</span></span><span class="index_num__1scPb">80</span> 天</span></li><li class="index_option__2-uY1" value="buzrgc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">80</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">160</span></span><span class="index_num__1scPb">70</span> 天</span></li><li class="index_option__2-uY1" value="zxdqa"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">80</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">240</span></span><span class="index_num__1scPb">70</span> 天</span></li><li class="index_option__2-uY1" value="juuxc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">80</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">320</span></span><span class="index_num__1scPb">70</span> 天</span></li><li class="index_option__2-uY1" value="qgpic"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">90</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">180</span></span><span class="index_num__1scPb">62</span> 天</span></li><li class="index_option__2-uY1" value="knqnx"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">90</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">270</span></span><span class="index_num__1scPb">62</span> 天</span></li><li class="index_option__2-uY1" value="xbxai"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">90</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">360</span></span><span class="index_num__1scPb">62</span> 天</span></li><li class="index_option__2-uY1" value="ftgrq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">100</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">200</span></span><span class="index_num__1scPb">56</span> 天</span></li><li class="index_option__2-uY1" value="bbfkyl"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">100</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">300</span></span><span class="index_num__1scPb">56</span> 天</span></li><li class="index_option__2-uY1" value="bclhtz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">100</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">400</span></span><span class="index_num__1scPb">56</span> 天</span></li><li class="index_option__2-uY1" value="nbtoz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">125</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">250</span></span><span class="index_num__1scPb">45</span> 天</span></li><li class="index_option__2-uY1" value="sgesi"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">125</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">375</span></span><span class="index_num__1scPb">45</span> 天</span></li><li class="index_option__2-uY1" value="brfpi"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">125</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">500</span></span><span class="index_num__1scPb">45</span> 天</span></li><li class="index_option__2-uY1" value="bslnzn"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">150</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">300</span></span><span class="index_num__1scPb">37</span> 天</span></li><li class="index_option__2-uY1" value="hubkz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">150</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">450</span></span><span class="index_num__1scPb">37</span> 天</span></li><li class="index_option__2-uY1" value="doqdz"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">150</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">600</span></span><span class="index_num__1scPb">37</span> 天</span></li><li class="index_option__2-uY1" value="vmhua"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">175</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">350</span></span><span class="index_num__1scPb">32</span> 天</span></li><li class="index_option__2-uY1" value="pblec"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">175</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">525</span></span><span class="index_num__1scPb">32</span> 天</span></li><li class="index_option__2-uY1" value="lcnsc"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">175</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">700</span></span><span class="index_num__1scPb">32</span> 天</span></li><li class="index_option__2-uY1" value="jfsle"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">200</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">400</span></span><span class="index_num__1scPb">28</span> 天</span></li><li class="index_option__2-uY1" value="bulyjq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">200</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">600</span></span><span class="index_num__1scPb">28</span> 天</span></li><li class="index_option__2-uY1" value="bqydkq"><span class="index_font__3x6GH">新词 <span class="index_num__1scPb">200</span><span class="index_mh5__3lCfW">复习 <span class="index_num__1scPb">800</span></span><span class="index_num__1scPb">28</span> 天</span></li></div></ul></div><div class="index_handleBox__mq5tP"><img class="index_icon__2xGC8" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/arrowTop.59450c5d.svg" alt=""><img class="index_icon__2xGC8" src="https://assets.baydn.com/web_static/words_wordsweb/static/media/arrowDown.cea5e8e7.svg" alt=""></div></div></div></div></div><div class="index_handleBox__gE3qP">' +
                        '<p class="index_tip__2ZlV-" style="font-size: 20px;color: red;"></p><div class="index_handle__3fIDB">完成设置</div></div></div>'

                    $('.Layout_main__2_zw8').html(swiperHtml);
                    var finishDate;
                    $(".index_option__2-uY1").click(function () {
                        $(".index_option__2-uY1").removeClass("index_highLight__2Cbgy");
                        $(this).addClass("index_highLight__2Cbgy");
                        var num = $(".index_highLight__2Cbgy").find(".index_num__1scPb").last().text();
                        console.log(num);
                        finishDate = dateChange(num);
                    });
                    $(".index_handle__3fIDB").click(function () {
                        console.log("success");
                        $(".index_tip__2ZlV-").text("设置成功").fadeIn();
                        $.getJSON('/book/addAndSetBook', {bookName: name, finishDate: finishDate});
                        setTimeout(book, 1000);

                    });
                }
            );

            function dateChange(num) {//生成书背完的时间，num为背完一本书需要多长时间

                date = new Date();//没有传入值时,默认是当前日期
                date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
                console.log(date);
                date += " 00:00:00";//设置为当天凌晨12点
                date = Date.parse(new Date(date)) / 1000;//转换为时间戳
                date += (86400) * num;//修改后的时间戳
                var newDate = new Date(parseInt(date) * 1000);//转换为时间
                return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
            }

            // dateChange(139)

        });
    }

});