<%--
  Created by IntelliJ IDEA.
  User: Lenovo
  Date: 2020/10/10
  Time: 9:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
${errMsg}
<form action="/user/login" method="post">
    账号:<input type="text" name="tel"/><br/>
    密码:<input type="password" name="password"/><br/>
    <input type="submit" />
</form>
</body>
</html>
