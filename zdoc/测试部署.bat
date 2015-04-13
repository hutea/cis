g:
cd G:\apache-tomcat-6.0.43(test)\bin
rem shutdown.bat
xcopy G:\javadev\apache-tomcat-6.0.43\webapps\cis  G:\apache-tomcat-6.0.43(test)\webapps\cis /ey
startup.bat
