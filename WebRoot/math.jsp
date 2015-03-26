<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>智慧教育</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resource/bootstrap.min.css" type="text/css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/resource/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resource/bootstrap.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resource/mathjax/MathJax.js?config=TeX-AMS_HTML-full"></script>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resource/mathjax/ace.min.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resource/mathjax/mathquill.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/resource/mathjax/mathquill.js"></script>
	<script type="text/javascript">
		MathJax.Hub.Config({
			TeX: { extensions: ["autoload-all.js"] },
			tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]}
		});
	</script>
		<style type="text/css">
			.mathquill-tab-pane  a{
				height: 60px;
				width: 60px;
			}
			.sqrt-prefix sapn{
				font-size: 50px;
			}
	</style>
</head>

<body>
<div>
	<div>
	   <button class="btn btn-sm btn-primary" onclick="getLatex()">获取latex</button>
	</div>	
	
    <div class="main">
        <div class="content" style="height: 150px;padding-left: 50px;padding-top: 100px;">
  			<div id="mathquill-editor" class="mathquill-editor" style="width:1000px;font-size: 50px;white-space:nowrap;overflow-x:scroll " >\frac{d}{dx}\sqrt{x}     B</div>
        </div>
    </div>
</div>

<script type="text/javascript">
	$(document).ready(function(){
		$("#mathquill-editor").mathquill('editor');
	});
	function getLatex(){
	   var span = $("#mathquill-editor");
	   var latexText = span.mathquill('latex');
	   alert(latexText);
	}
</script>
</body>
</html>