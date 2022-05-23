$(function (){
    var myUploadWord;
    var URL='/Upload'
    $('.index_submit__15Ivx').click(function (){
        myUploadWord=$('.index_textarea__2Avc9').val();
        alert(myUploadWord);
        nwh(myUploadWord);
    })


function nwh(myUploadWord){
    $.getJSON(URL, {myUploadWord: myUploadWord}, function (result) {
        if (result.success) {
            // var addSuccess='<div class="index_msg__3RR13">添加完成（1/1）</div>'
            // $('.index_counter__1NUWo').after(addSuccess);
            // $('#pAdd').removeClass("index_submit__15Ivx");
            // $('#pAdd').addClass("index_disabled__28D11 index_submit__15Ivx");
            // $('.index_textarea__2Avc9').val("");
            alert("成功");
        }
    })
}
});