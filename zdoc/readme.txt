���𻷾�
����ݿ�����������ϲ���ϵͳʵ���������ѡ��
�����������£�
1.jdk6
2.apache-tomcat-6.0.43-windows-x86
3.mysql5.6
****************************************************

��������
1.����Tomcat����ΪUTF-8����Ҫ��
${CATALINA_HOME}/conf/server.xml�ļ�����
#################################################
<Connector port="8080" protocol="HTTP/1.1"  
useBodyEncodingForURI="true" URIEncoding="UTF-8"
connectionTimeout="20000" redirectPort="8443" />
#################################################

2.�������ݿ�cis
��1���ַ�����utf8 -- UTF-8 Unicode����Ҫ��
��2����������飺utf8_unicode_ci

3.���� ����ʼ��.sql���ű��ļ�

4.dbcp.properties�ļ���ʼ�������£������ʵ�����������
#################################################
url=jdbc\:mysql\://localhost\:3306/cis
username=root
password=123456
initialSize=10
maxActive=1000
maxIdle=100
minIdle=100
#################################################

5.��־�ļ�����
log4j.properties
��1���쳣��־Ĭ�Ϸ���${cis.root}/WEB-INF/log/exception.log
��2��������־����G:/serverĿ¼�£����������������Ŀ¼�����޸�������á�����Ҫ��

6.����war����Tomcat����
7.����Tomcat�����ʣ�http://localhost:8080/cis/   
�ʺţ�admin ���룺123456
****************************************************