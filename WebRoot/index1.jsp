<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<link href="${pageContext.request.contextPath}/resource/mathjax/ace.min.css" rel="stylesheet" >
    <link href="${pageContext.request.contextPath}/resource/mathjax/mathquill.css"  rel="stylesheet" >
	<script src="${pageContext.request.contextPath}/resource/mathjax/MathJax.js?config=TeX-AMS_HTML-full"  type="text/javascript" ></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  
  <body>
    .....<%=new Date() %>> <br>
    
    <p>The Lorenz Equations</p>
\[\begin{matrix}
\dot{x} &#038; = &#038; \sigma(y-x) \\
\dot{y} &#038; = &#038; \rho x - y - xz \\
\dot{z} &#038; = &#038; -\beta z + xy
\end{matrix} \]
 
<p>The Cauchy-Schwarz Inequality</p>
 
\[ \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right) \]
 
<p>A Cross Product Formula</p>
 
\[\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix}
\mathbf{i} &#038; \mathbf{j} &#038; \mathbf{k} \\
\frac{\partial X}{\partial u} &#038;  \frac{\partial Y}{\partial u} &#038; 0 \\               \frac{\partial X}{\partial v} &#038;  \frac{\partial Y}{\partial v} &#038; 0
\end{vmatrix}  \]
 
<p>The probability of getting \(k\) heads when flipping \(n\) coins is: </p>
 
\[P(E)   = {n \choose k} p^k (1-p)^{ n-k} \]
 
<p>An Identity of Ramanujan</p>
\[ \frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
{1+\frac{e^{-8\pi}} {1+\ldots} } } } \]
    
  </body>
</html>
