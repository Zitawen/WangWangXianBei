$(function() {
	// 登录验证的controller url
	var loginUrl = '/user/login';
	var indexUrl='/html/home.html';

	$('#submit').click(function() {
		// 获取输入的帐号
		var userTel = $('#tel').val();
		// 获取输入的密码
		var password = $('#pwd').val();
		// 获取验证码
		// var verifyCode=$('#j_captcha').val();
		if(!password){
			alert("请输入密码");
			return ;
		}
		if (!userTel) {
			alert("请输入手机号");
			// document.getElementById("p1").style.display="block";
			return ;
		}

		// 访问后台进行登录验证
		$.ajax({
			url : loginUrl,
			async : false,
			cache : false,
			type : "post",
			dataType : 'json',
			data : {    //发送到服务器的数据
				tel : userTel,
				password : password
			},
			success : function(data) {
				if (data.success) {  //data为json返回的数据
					alert("登录成功！");

						// 自动链接到前端展示系统首页
					window.location.href =indexUrl;
				} else {
					alert('登录失败！' + data.errMsg);

				}
			}
		});
	});

	// 获取输入的邮箱
	$('#next').click(function() {
		var email = $('#email').val();
		// alert(email);
		if(!email){
			alert("请输入邮箱");
			return ;
		}
		next1(email);
	})
});

function next1(email){
	var findUserURL='/user/findUserByE';
	$.ajax({
		url : findUserURL,
		async : false,
		cache : false,
		type : "post",
		dataType : 'json',
		data : {    //发送到服务器的数据
			email : email
		},
		success : function(data) {
			if (data.success) {  //data为json返回的数据
				alert("查到用户，可以修改密码");
			} else {
				alert("no");
			}
		}
	});

	var swiperHtml = "";
	swiperHtml += '<div class="mobilephone-verify-page" style="">\n' +
		'<h3 class="page-title">邮箱验证</h3>\n' +
		'<form class="mobilephone-verify-form">\n' +
		'<div class="input-wrap"><input class="code-input" type="text" placeholder="输入验证码" id="Code"><i class="ib ib-shield-o"></i><a\n' +
		'class="button hollow large-radius get-code-btn verify-disabled" disabled="disabled" id="regetEmail">重新获取</a></div>\n' +
		'<div class="submit-btn-box"><button class="button disable page-btn" id="check">下一步</button>\n' +
		'<p class="account-error-hint error-msg"></p>\n' +
		'</div>\n' +
		'</form>\n' +
		'</div>'
	$('#reset').html(swiperHtml);
	sendE(email);

	$('#regetEmail').click(function() {//点击重新发送一封邮件
		sendE(email);
	})

	//检查验证码是否一致
	$('#check').click(function() {
		var checkCode = $('#Code').val();
		$.ajax({
			url : '/user/checkCode',
			async : false,
			cache : false,
			type : "post",
			dataType : 'json',
			data : {    //发送到服务器的数据
				code : checkCode
			},
			success : function(data) {
				if (data.success) {  //data为json返回的数据
					alert("验证码正确");
					next2();
				} else {
					alert("验证码错误");
					return ;
				}
			}
		});
	})
}

//设置新密码
function next2(){
	var swiperHtml = "";
	swiperHtml +='<div class="reset-password-page" style="">\n' +
		'<h3 class="page-title">重设密码</h3>\n' +
		'<form class="reset-password-form">\n' +
		'<div class="input-wrap"><input class="password-input" type="password" placeholder="设置密码" id="password1"><i class="ib ib-lock-o"></i></div>\n' +
		'<div class="input-wrap"><input class="confirm-password-input" type="password" placeholder="确认密码" id="password2"><i class="ib ib-lock-check-o"></i></div>\n' +
		'<div class="submit-btn-box"><button class="button disable page-btn" id="changePW">完成</button>\n' +
		'<p class="account-error-hint error-msg"></p>\n' +
		'</div>\n' +
		'</form>\n' +
		'</div>';
	$('#reset').html(swiperHtml);

	//判断密码一致
	$('#changePW').click(function() {
		var password1=$('#password1').val();
		var password2=$('#password2').val();
		if (password1==password2){
			$.getJSON('/user/changePW', {password:password1}, function (result) {
				if (result.success) {
					alert("修改成功请登录");
				}
				else {
					alert(result.success);
				}
			})
		}else {
			alert("没对上，重新输入");
		}
	})
}
//发送邮件
function sendE(email){
	var sendEmailURL='/user/getEmail';
	$.getJSON(sendEmailURL, {email: email}, function (result) {
		alert("send Email");
	})
}
