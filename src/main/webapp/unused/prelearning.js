// // alert("hahahah")
// $(function () {
//     var queryTodayNumURL = '/pre/queryNum';
//     var queryTodayURL = '/pre/queryWord';
//     $.getJSON(queryTodayNumURL, function (result) {
//         if (result.success) {
//             // alert(result.recordCount);
//             totalCounts = result.recordCount;
//             $("#pagination1").jqPaginator({
//                 totalCounts: totalCounts,
//                 pageSize: 6,
//                 visiblePages: 10,
//                 currentPage: 1,
//                 first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
//                 prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
//                 next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
//                 last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
//                 page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>', //{{page}}代表当前页
//                 onPageChange: function (curPage) {
//                     pageInfo1(curPage);
//                 }
//             });
//             $("#pagination2").jqPaginator({
//                 totalCounts: totalCounts,
//                 pageSize: 6,
//                 visiblePages: 10,
//                 currentPage: 1,
//                 first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
//                 prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
//                 next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
//                 last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
//                 page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>', //{{page}}代表当前页
//                 onPageChange: function (curPage) {
//                     pageInfo2(curPage);
//                 }
//             });
//         }
//     });
//
//     function pageInfo1(curPage) {
//         // alert(curPage);
//         $.getJSON(queryTodayURL, {pageIndex: curPage, pageSize: 6}, function (result) {
//
//             if (result.success) {
//                 // alert("success");
//                 var swiperHtml = "";
//                 var todayWordsList = result.todayWordsList;
//                 todayWordsList.map(function (item, index) {
//                     console.log(item);
//                     console.log(item.englishword);
//                     swiperHtml += ' <tr>\n' + '<td>\n' +
//                         '<div class="Pronounce_pronounce__g6QPf"><img alt="trumpet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" class="Pronounce_audio__3xdMh" style="width: 26px; height: 26px;">\n' +
//                         '</div>\n' +
//                         '</td>\n' +
//                         '<td class="CollectionList_pointer__FdvfF">\n' +
//                         '<div><span class="CollectionList_word__7zQwd">' + item.englishword +
//                         '</span><span class="CollectionList_phonetic__NROhB">/' + item.pa + '/</span>\n' +
//                         '</div>\n' +
//                         '<div class="CollectionList_definitionCn__3MoTq"><span>v.</span><span>' + item.chineseword + '</span>\n' +
//                         '</div>\n' +
//                         '</td>\n' +
//                         '</tr>\n'
//                 });
//
//                 $('#tbody1').html(swiperHtml);
//             }
//
//         });
//     }
//
//     function pageInfo2(curPage) {
//         // alert(curPage);
//         $.getJSON(queryTodayURL, {pageIndex: curPage, pageSize: 6}, function (result) {
//
//             if (result.success) {
//                 // alert("success");
//                 var swiperHtml = "";
//                 var todayWordsList = result.todayWordsList;
//                 todayWordsList.map(function (item, index) {
//                     console.log(item);
//                     console.log(item.englishword);
//                     swiperHtml += ' <tr>\n' + '<td>\n' +
//                         '<div class="Pronounce_pronounce__g6QPf"><img alt="trumpet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" class="Pronounce_audio__3xdMh" style="width: 26px; height: 26px;">\n' +
//                         '</div>\n' +
//                         '</td>\n' +
//                         '<td class="CollectionList_pointer__FdvfF">\n' +
//                         '<div><span class="CollectionList_word__7zQwd">' + item.englishword +
//                         '</span><span class="CollectionList_phonetic__NROhB">/' + item.pa + '/</span>\n' +
//                         '</div>\n' +
//                         '<div class="CollectionList_definitionCn__3MoTq"><span>v.</span><span>' + item.chineseword + '</span>\n' +
//                         '</div>\n' +
//                         '</td>\n' +
//                         '</tr>\n'
//                 });
//
//                 $('#tbody2').html(swiperHtml);
//             }
//
//         });
//     }
//
//
// })