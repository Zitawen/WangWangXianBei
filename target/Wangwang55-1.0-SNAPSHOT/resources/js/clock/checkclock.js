$(document).ready(function() {
    // alert("enen");
    clockPage();

    function clockPage(){
        $.getJSON('/user/AllClockNum', function (result) {
            if (result.success) {
                totalCounts = result.ClockNum;
                $("#paginationClock").jqPaginator({
                    totalCounts: totalCounts,
                    pageSize: 6,
                    visiblePages: 10,
                    currentPage: 1,
                    first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
                    prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
                    next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
                    last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
                    page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>', //{{page}}代表当前页
                    onPageChange: function (curPage) {//传入当前页（默认传入首页）
                        AllClockF(curPage);
                    }
                });
            }
        });
    }
    //呈现打卡记录
    function AllClockF(curPage) {
        var allBooksURL = '/user/AllClock';
        $.getJSON(allBooksURL, {pageIndex: curPage, pageSize: 6},
            function (result) {
                if (result.success) {
                    var swiperHtml = "";
                    var allClockList = result.clockList;
                    var user=result.user;
                    allClockList.map(function (item, index) {
                        swiperHtml += '<div class="checkin span8" id="2780572381022621">\n' +
                            '<div class="row">\n' +
                            '<div class="avatar span1">' +
                            '<img src="'+user.image+'" width="48" height="48" class="None">' +
                            '</div>\n' +
                            '<div class="span7 content">\n' +
                            '<div class="row checkin-content">\n' +
                            '<div class="span7">\n' +
                            '<div class="info">\n' +
                            '<span class="username">\n' +
                            '<a name="216995312">'+user.uname+'</a>\n' +
                            '</span>\n' +
                            '<span>的第<span class="number"> '+item.days+' </span> 天打卡日记：</span>\n' +
                            '</div>\n' +
                            '<div class="note">\n'+item.context+'</div>\n' +
                            '\n' +
                            '\n' +
                            '<div>\n' +
                            '<div class="edit-checkin-note-container hide">\n' +
                            '<textarea class="checkin-note-container" style="width: 99%;" rows="5"></textarea>\n' +
                            '<a class="btn btn-cancel-update-checkin-note">取消</a> <a data="2020-09-09" class="btn btn-success btn-update-checkin-note">提交</a>\n' +
                            '<span class="hide alert alert-danger">你没有权限修改这条打卡日记</span>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '<div class="operation row">\n' +
                            '<div class="span7">\n' +
                            '<div class="row">\n' +
                            '<div class="span4">\n' +
                            ''+item.studytime+'\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '<hr>\n' +
                            '</div>\n' +
                            '</div>'
                    })
                    $('#allClockBody').html(swiperHtml);
                }
            })
    }
});