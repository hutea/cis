<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <meta name="description" content="">
        
        <meta name="author" content="">
        <title>Chain Responsive Bootstrap3 Admin</title>
        <link href="${pageContext.request.contextPath}/resource/css/common.css" rel="stylesheet" />
        <link href="${pageContext.request.contextPath}/resource/chain/css/style.default.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resource/chain/css/morris.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resource/chain/css/select2.css" rel="stylesheet" />
		<script type="text/javascript" src="${pageContext.request.contextPath}/resource/js/myform.js"></script>
		<script src="${pageContext.request.contextPath}/resource/art/artDialog.js?skin=blue"></script>
        <script src="${pageContext.request.contextPath}/resource/art/plugins/iframeTools.js"></script>
        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="${pageContext.request.contextPath}/resource/chain/js/html5shiv.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/respond.min.js"></script>
        <![endif]-->

    <body>
        <header>    
        <%@ include file="/WEB-INF/page/common/head.jsp" %>
        </header>
        
        <section>
            <div class="mainwrapper">
        	<%@ include file="/WEB-INF/page/common/left.jsp" %>
                
                <div class="mainpanel">
                    <div class="pageheader">
                        <div class="media">
                            <div class="pageicon pull-left">
                                <i class="fa  fa-list-alt"></i>
                            </div>
                            <div class="media-body">
                                <ul class="breadcrumb">
                                    <li><a href=""><i class="glyphicon glyphicon-home"></i></a></li>
                                    <li>system settings</li>
                                </ul>
                                <h4>系统设置</h4>
                            </div>
                        </div><!-- media -->
                    </div><!-- pageheader -->
                    
                    <div class="contentpanel">
                    	<div class="content-m" >
                         <div>系统设置</div>
                         <div style="float: right;"><a href='<s:url action="config_editUI" namespace="/manage/extra" />?scid=${config.id}&m=5'>设置</a></div>
                         <div style="border-bottom: 1px solid #d5d5d5">&nbsp</div>
    					 <div id="" <c:if test="${scid!='match'}">style="display: none"</c:if>   >
    					 	<div style="line-height: 50px;">
    					 		<span>工单设置</span>
    					 	</div >
    					 	<div style="line-height: 50px;">
    					 		<span>分配上限：</span>
    					 		<span>${config.valueInt }</span>
    					 	</div >
    					 	<div style="line-height: 50px;">
    					 		<span>分配初值：</span>
    					 		<span>${config.valueShort}</span>
    					 	</div >
    					 	<div style="line-height: 50px;">
    					 		<span>正确比例：</span>
    					 		<span>${config.valueDouble*100}%</span>
    					 	</div>
    					 	<div style="line-height: 50px;">
    					 		<span>超时时间：</span>
    					 		<span>${config.valueLong}</span>
    					 	</div>
    					 </div>
    					 <div id="" <c:if test="${scid!='manual'}">style="display: none"</c:if>  >
    					 	<div style="line-height: 50px;">
    					 		<span>积分说明 </span>
    					 	</div >
    					 	<div style="line-height: 50px;">
    					 		<span>${config.valueContent}</span>
    					 	</div >
    					 </div>
    					 <div id="" <c:if test="${scid!='about'}">style="display: none"</c:if>  >
    					 	<div style="line-height: 50px;">
    					 		<span>关于我们 </span>
    					 	</div >
    					 	<div style="line-height: 50px;">
    					 		<span>${config.valueContent}</span>
    					 	</div >
    					 </div>
    					 <div id="" <c:if test="${scid!='phone'}">style="display: none"</c:if>  >
    					 	<div style="line-height: 50px;">
    					 		<span>联系我们</span>
    					 	</div >
    					 	<div style="line-height: 50px;">
    					 		<span>${config.valueContent}</span>
    					 	</div >
    					 </div>
						</div>  <!-- content  -->

                    </div><!-- contentpanel -->
                    <div class="bottomwrapper" >
						<%@ include file="/WEB-INF/page/common/bottom.jsp" %>
                    </div>
                </div><!-- mainpanel -->
            </div><!-- mainwrapper -->
        </section>

        <script src="${pageContext.request.contextPath}/resource/chain/js/jquery-1.11.1.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/jquery-migrate-1.2.1.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/modernizr.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/pace.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/retina.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/jquery.cookies.js"></script>
        
        <script src="${pageContext.request.contextPath}/resource/chain/js/flot/jquery.flot.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/flot/jquery.flot.resize.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/flot/jquery.flot.spline.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/jquery.sparkline.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/morris.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/raphael-2.1.0.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/bootstrap-wizard.min.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/select2.min.js"></script>

        <script src="${pageContext.request.contextPath}/resource/chain/js/custom.js"></script>
        <script src="${pageContext.request.contextPath}/resource/chain/js/dashboard.js"></script>

    </body>
</html>
