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
	    	function show(taskRecordId) {
		   	   	 var url ="${pageContext.request.contextPath}/manage/task/taskrecord_show.action?taskRecordId="+taskRecordId;
		   		 art.dialog.open(url,{width:400 ,height: 500 , title: '区块笔迹',id:'taskrecord_'+taskRecordId});
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
                                    <li>task record list</li>
                                </ul>
                                <h4>区块分配详细</h4>
                            </div>
                        </div><!-- media -->
                    </div><!-- pageheader -->
                    
                    <div class="contentpanel">
                       <s:form action="taskrecord_list" namespace="/manage/task" method="post" id="pageList"> 
                         <s:hidden name="page" />
                         <s:hidden name="m" />
                         <s:hidden name="taskId" />
                         <div>查询区</div>
    					 <table border="1" bordercolor="#E5E5E5" class="tab" width="100%" style="*width: 101%;margin-top: 10px;">
							 <tr>
                                    <th>#</th>
                                    <th>行号</th>
                                    <th>行内号</th>
                                    <th>用户ID</th>
                                    <th>分配时间</th>
                                    <th>完成时间</th>
                                    <th>是否超时</th>
                                    <th>操作</th>
                              </tr>
                                	<tr style="background-color: silver;">
                                		 <td>1</td> 
                                		 <td>2</td> 
                                		 <td>1</td> 
                                		 <td>123</td> 
                                		 <td>2015-03-28 15:45:56</td> 
                                		 <td>2015-03-28 16:05:56</td> 
                                		 <td>否</td> 
                                		 <td><a href='javascript:show()'>查看笔迹</a> 
                                		 </td> 
                                	</tr>
                               
                                <c:forEach items="${pageView.records}" var="entry" varStatus="s">  
                           	  	<tr>
                           		 <td>${s.index+1}</td> 
                           		 <td>${entry.task.lineNo}</td> 
                           		 <td>${entry.task.inLineNo}</td> 
                           		 <td>${entry.account.id}</td> 
                           		 <td><fmt:formatDate value="${entry.matchTime}" pattern="yyyy-MM-dd HH:mm:ss"/>  </td> 
                           		 <td><fmt:formatDate value="${entry.postTime}" pattern="yyyy-MM-dd HH:mm:ss"/>  </td> 
                           		 <td>${entry.identState==1?'未超时':'超时'}</td> 
                        		 <td><a href='javascript:show(${entry.id})'>查看笔迹</a> 
                           	  	</tr>
                           	  </c:forEach>
						 </table>
						</s:form>
                       	<div class="fenye"><%@ include file="/WEB-INF/page/common/fenye.jsp" %></div>
                            <!-- code block hydom -->
                        
                        
                    </div><!-- contentpanel -->
                    <div class="bottomwrapper">
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
