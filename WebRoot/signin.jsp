<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hydom.util.WebUtil"%>
<%@ include file="/WEB-INF/page/common/taglib.jsp" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	request.setAttribute("uname",WebUtil.getCookieValueByName(request,"username"));
	request.setAttribute("pwd",WebUtil.getCookieValueByName(request,"password"));
	request.setAttribute("sign",WebUtil.getCookieValueByName(request,"rememberMe"));
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="cn">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Chain Responsive Bootstrap3 Admin</title>

        <link href="${pageContext.request.contextPath}/resource/chain/css/style.default.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
        <![endif]-->
    </head>

    <body class="signin">
        <section>
            <div class="panel panel-signin">
                <div class="panel-body">
                    <div class="logo text-center">
                        <img src="${pageContext.request.contextPath}/resource/chain/images/logo-primary.png" alt="Chain Logo" >
                    </div>
                    <br />
                    <h4 class="text-center mb5">Already a Member?</h4>
                    <p class="text-center">Sign in to your account</p>
                    <p class="text-center" style="color: red;">${error}</p>
                    
                    <div class="mb30"></div>
                    
                    <form action="signin.action" method="post">
                        <div class="input-group mb15">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input type="text" class="form-control" placeholder="Username" name="username" value="${uname }">
                        </div><!-- input-group -->
                        <div class="input-group mb15">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                            <input type="password" class="form-control" placeholder="Password" name="password" value="${pwd}">
                        </div><!-- input-group -->
                        
                        <div class="clearfix">
                            <div class="pull-left">
                                <div class="ckbox ckbox-primary mt10">
                                    <input type="checkbox" id="rememberMe" value="1" name="rememberMe" <c:if test="${sign==1}"> checked="checked"</c:if> >
                                    <label for="rememberMe">Remember Me </label>
                                </div>
                            </div>
                            <div class="pull-right">
                                <button type="submit" class="btn btn-success">Sign In <i class="fa fa-angle-right ml5"></i></button>
                            </div>
                        </div>                      
                    </form>
                    
                </div><!-- panel-body -->
                <div class="panel-footer">
                    <a href="" class="btn btn-primary btn-block">注册链接【备用】</a>
                </div><!-- panel-footer -->
            </div><!-- panel -->
        </section>

        <script src="${pageContext.request.contextPath}/resource/chain/js/jquery-1.11.1.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/jquery-migrate-1.2.1.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/modernizr.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/pace.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/retina.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/jquery.cookies.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/custom.js"></script>

    </body>
</html>
