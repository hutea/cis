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
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resource/bootstrap.min.css" type="text/css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/resource/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resource/bootstrap.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resource/mathjax/MathJax.js?config=TeX-AMS_HTML-full"></script>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resource/mathjax/ace.min.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resource/mathjax/mathquill.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/resource/mathjax/mathquill.js"></script>
		<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript">
		MathJax.Hub.Config({
			TeX: { extensions: ["autoload-all.js"] },
			tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]}
		});
	</script>

	</head>


	<body>
		

		<div>	
		<hr/>
		<div>
			计算出的正确结果：
		    <div class="main">
		        <div class="content" style="height: 150px;padding-left: 50px;padding-top: 100px;">
		  			<div id="mathquill-editor" class="mathquill-editor" style="width:1000px;font-size: 50px;white-space:nowrap;overflow-x:scroll " >\frac{d}{dx}\sqrt{x}     B</div>
		        </div>
		    </div>
        </div>
		</div>
		<hr/>
		<div>
			用户识别结果：
			
        </div>
		</div>
		
			<script type="text/javascript">
	$(document).ready(function(){
		//$("#mathquill-editor").mathquill('editor');
	});
	function getLatex(){
	   var span = $("#mathquill-editor");
	   var latexText = span.mathquill('latex');
	   alert(latexText);
	}
</script>
	</body>
</html>