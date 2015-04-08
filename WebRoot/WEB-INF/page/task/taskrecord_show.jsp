<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
	<base href="<%=basePath%>">
	<title></title>
	<link href="${pageContext.request.contextPath}/resource/bootstrap.min.css" rel="stylesheet" >
	<link href="${pageContext.request.contextPath}/resource/mathjax/ace.min.css" rel="stylesheet" >
    <link href="${pageContext.request.contextPath}/resource/mathjax/mathquill.css"  rel="stylesheet" >
	<script src="${pageContext.request.contextPath}/resource/mathjax/MathJax.js?config=TeX-AMS_HTML-full"  type="text/javascript" ></script>
	</head>


	<body style="background-color: white;">
		<div style="border: 1px solid #e3d3ee;width: 400px;height: 200px;">
			原始笔迹:
			<svg viewBox="${si.minX} ${si.minY} 500 500" width="100%" height="100%"  version="1.1" xmlns="http://www.w3.org/2000/svg">
				${si.svgdata}
			</svg>
		</div>	
		
		<hr/>
		<div>
			计算出的正确结果：
        </div>
			${taskRecord.task.result}
        	\[\begin{matrix}
			\dot{x} &#038; = &#038; \sigma(y-x) \\
			\dot{y} &#038; = &#038; \rho x - y - xz \\
			\dot{z} &#038; = &#038; -\beta z + xy
			\end{matrix} \]
		<hr/>
		<div>
			用户识别结果：
		</div>
			${taskRecord.result}
			\[\begin{matrix}
			\dot{x} &#038; = &#038; \sigma(y-x) \\
			\dot{y} &#038; = &#038; \rho x - y - xz \\
			\dot{z} &#038; = &#038; -\beta z + xy
			\end{matrix} \]
	</body>
</html>
