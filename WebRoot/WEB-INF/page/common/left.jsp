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
                    
                    <h3 class="leftpanel-title">Navigation</h3>
                    <ul class="nav nav-pills nav-stacked">
                        <li <c:if test="${param.m==0||m==0}">class="active"</c:if>><a href="<s:url action="index" namespace="/manage" />"><i class="fa fa-home"></i> <span>首页</span></a></li>
                       
                        <li <c:if test="${param.m==1||m==1}">class="active parent"</c:if>  class="parent" ><a href=""><i class="fa fa-suitcase"></i> <span>工单管理</span></a>
                            <ul class="children">
  								<li><a href='<s:url action="job_list" namespace="/manage/task" />'>工单分配</a></li> 
                            </ul>
                        </li>
                        
                        <li <c:if test="${param.m==2||m==2}">class="active parent"</c:if> class="parent"><a href=""><i class="fa fa-edit"></i> <span>用户管理</span></a>
                            <ul class="children"> 
                                <li>
                                	<a href='<s:url action="user_list" namespace="/manage/account" />'>用户查看</a>
                                </li>
                                <li><a href="general-forms.html">积分详细 </a></li>
                                <li><a href="general-forms.html">积分管理</a></li>
                            </ul>
                        </li>
                        
                        <li <c:if test="${param.m==3||m==3}">class="active parent"</c:if> class="parent" ><a href=""><i class="fa fa-bars"></i> <span>奖品管理</span></a>
                            <ul class="children">
  								<li>
  									<a href='<s:url action="trophy_list" namespace="/manage/credit" />'>奖品列表</a>
  								</li> 
  								<li>
  									<a href='<s:url action="trophy_addUI" namespace="/manage/credit" />'>奖品添加</a>
  								</li> 
  								<li>
  									<a href='<s:url action="trophyType_list" namespace="/manage/credit" />'>奖品分类管理</a>
  								</li> 
                            </ul>
                        </li>
                        
                        <li <c:if test="${param.m==4||m==4}">class="active parent"</c:if> class="parent"><a href=""><i class="fa fa-file-text"></i> <span>系统管理</span></a>
                            <ul class="children">
                                <li><a href='<s:url action="account_list" namespace="/manage/account" />'>系统帐号</a></li>
                                <li><a href="notfound.html">意见反馈</a></li>
                                <li><a href="blank.html">权限定义</a></li>
                                <li><a href="blank.html">App版本管理</a></li>
                            </ul>
                        </li>
                        
                        <li <c:if test="${param.m==5||m==5}">class="active parent"</c:if> class="parent"><a href=""><i class="fa fa-file-text"></i> <span>系统设置</span></a>
                            <ul class="children">
                                <li>
                                	<a href='<s:url action="config_show" namespace="/manage/extra" />?scid=match'>工单设置</a>
                                </li>
                                <li>
                                	<a href='<s:url action="config_show" namespace="/manage/extra" />?scid=manual'>积分说明</a>
                                </li>
                                <li>
                                	<a href='<s:url action="config_show" namespace="/manage/extra" />?scid=about'>关于我们</a>
                                </li>
                                <li>
                                	<a href='<s:url action="config_show" namespace="/manage/extra" />?scid=phone'>联系我们</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
</div><!-- leftpanel -->