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
        <script type="text/javascript">
    	function show(tid,uid) {
	   	   	 var url ="${pageContext.request.contextPath}/manage/task/task_show.action";
	   		 art.dialog.open(url,{width:400 ,height: 500 , title: '区块笔迹',id:'task_'+tid});
   	 	}
        </script>
    </head>

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
                                    <li>user list</li>
                                </ul>
                                <h4>用户查看</h4>
                            </div>
                        </div><!-- media -->
                    </div><!-- pageheader -->
                    
                    <div class="contentpanel">
                       <s:form action="task_list" namespace="/manage/task" method="post" id="pageList"> 
                         <s:hidden name="page" />
                         <s:hidden name="m" />
 						 <div>用户信息</div>
						 
    					 <table border="1" bordercolor="#E5E5E5" class="tab" width="100%" style="*width: 101%;margin-top: 10px;">
							 <tr>
                                    <th>#</th>
                                    <th>帐户ID</th>
                                    <th>手机号</th>
                                    <th>积分</th>
                                    <th>最近一月识别数</th>
                                    <th>识别总数</th>
                                    <th>正确率</th>
                                    <th>平均处理速度</th>
                                    <th>注册时间</th>
                                    <th>最近登录</th>
                                    <th>操作</th>
                              </tr>
                          	  <c:forEach items="${pageView.records}" var="entry" varStatus="s">  
                           	  	<tr id="tr_${entry.id}">
                           		 <td>${s.index+1}</td> 
                           		 <td>${entry.id}</td> 
                           		 <td>${entry.phone}</td> 
                           		 <td>${entry.score}</td> 
                           		 <td>${entry.id+1}</td> 
                           		 <td>${entry.id+101}</td> 
                           		 <td>68%</td> 
                           		 <td>3s</td> 
                           		 <td><fmt:formatDate value="${entry.createTime}" pattern="yyyy-MM-dd HH:mm:ss"/>  </td> 
                           		 <td><fmt:formatDate value="${entry.lastSigninTime}" pattern="yyyy-MM-dd HH:mm:ss"/>  </td> 
                           		 <td>
                           		 <a href='#'>详细</a>
                           		 </td> 
                           	  	</tr>
                           	  </c:forEach>
						 </table>
						</s:form>
                       	<div class="fenye"><%@ include file="/WEB-INF/page/common/fenye.jsp" %></div>
                            <!-- code block hydom -->
                        
                        
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
