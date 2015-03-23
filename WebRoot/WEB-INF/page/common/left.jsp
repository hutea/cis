<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/page/common/taglib.jsp" %>
<div class="leftpanel">
                    <div class="media profile-left">
                        <a class="pull-left profile-thumb" href="profile.html">
                            <img class="img-circle" src="${pageContext.request.contextPath}/resource/chain/images/photos/profile.png" alt="">
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading">Elen Adarna</h4>
                            <small class="text-muted">Beach Lover</small>
                        </div>
                    </div><!-- media -->
                    
                    <h5 class="leftpanel-title">Navigation</h5>
                    <ul class="nav nav-pills nav-stacked">
                        <li <c:if test="${param.m==0||m==0}">class="active"</c:if>><a href="index.html"><i class="fa fa-home"></i> <span>Dashboard</span></a></li>
                        <li><a href="messages.html"><span class="pull-right badge">5</span><i class="fa fa-bars"></i> <span>无子菜单</span></a></li>
                       
                        <li <c:if test="${param.m==1||m==1}">class="active parent"</c:if>  class="parent" ><a href=""><i class="fa fa-suitcase"></i> <span>工单管理</span></a>
                            <ul class="children">
  								<li><a href='<s:url action="task_list" namespace="/manage/task" />?m=1'>工单分配</a></li> 
                            </ul>
                        </li>
                        <li <c:if test="${param.m==2||m==2}">class="active parent"</c:if> class="parent"><a href=""><i class="fa fa-edit"></i> <span>帐号管理</span></a>
                            <ul class="children">
                                <li><a href="code-editor.html">Code Editor</a></li>
                                <li><a href="general-forms.html">General Forms</a></li>
                                <li><a href="form-layouts.html">Layouts</a></li>
                                <li><a href="wysiwyg.html">Text Editor</a></li>
                                <li><a href="form-validation.html">Validation</a></li>
                                <li><a href="form-wizards.html">Wizards</a></li>
                            </ul>
                        </li>
                        <li <c:if test="${param.m==3||m==3}">class="active parent"</c:if> class="parent" ><a href=""><i class="fa fa-bars"></i> <span>奖品管理</span></a>
                            <ul class="children">
  								<li><a href='<s:url action="trophy_list" namespace="/manage/credit" />?m=3'>奖品列表</a></li> 
  								<li><a href='<s:url action="trophy_addUI" namespace="/manage/credit" />?m=3'>奖品添加</a></li> 
                            </ul>
                        </li>
                        <li><a href="maps.html"><i class="fa fa-map-marker"></i> <span>Maps</span></a></li>
                        <li class="parent"><a href=""><i class="fa fa-file-text"></i> <span>Pages</span></a>
                            <ul class="children">
                                <li><a href="notfound.html">奖品列表</a></li>
                                <li><a href="blank.html">奖品添加</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                    
                </div><!-- leftpanel -->