// alert("haha")
$(function() {
	// 注册的controller url
	var regUrl = '/user/register';
	// var regName = '/(^[a-zA-Z0-9]{6,10}$)|(^[\u2E80-\u9FFF]{6,10}$)/';
	$("#submit").click(function() {
		// alert("hahahaa");
		var tel=$('#tel1').val();
		// alert(tel);
		if (!tel) {
			alert('请输入手机号！');
			return;
		}
		// 获取输入的帐号
		var uname = $('#name1').val();
		// alert(uname);
		if (!uname) {
			alert('请输入用户名！');
			return;
		}
		// if(!regName.test(uname)){
		// 		alert("名字输入不符合要求,6到10位");
		// 		return;
		// }

		// 获取输入的密码
		var password = $('#pwd1').val();
		// alert(password);
		if (!password) {
			alert('请输入密码！');
			return;
		}
		// 获取重复密码
		var rePassword = $('#repwd1').val();
		if (!rePassword) {
			alert('请输入确认密码！');
			return;
		}
		if (password!==rePassword) {
			alert('密码不一致！');
			return;
		}

		// 获取验证码
		// var verifyCodeActual = $('#j_captcha').val();
		// if (!verifyCodeActual) {
		// 	alert('请输入验证码！');
		// 	return;
		// }

		// 访问后台进行登录验证
		$.ajax({
			url : regUrl,
			async : false,
			cache : false,
			type : "post",
			dataType : "json",
			data : {
				tel:tel,
				uname : uname,
				password : password
			},
			success : function(data) {
				// alert(data.success);
				if (data.success) {
					alert("注册成功！");
					window.location.href = '/html/login.html';// 自动链接到前端展示系统首页
				} else {
					alert('注册失败！' + data.errMsg);
				}
			}
		});
	});
});
