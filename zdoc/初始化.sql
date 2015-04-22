/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50623
Source Host           : localhost:3306
Source Database       : cisdev

Target Server Type    : MYSQL
Target Server Version : 50623
File Encoding         : 65001

Date: 2015-04-22 17:38:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_account`
-- ----------------------------
DROP TABLE IF EXISTS `t_account`;
CREATE TABLE `t_account` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `backaccount` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `backname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `lastSignIp` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastSignPosition` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastSigninTime` datetime DEFAULT NULL,
  `lastSignoutTime` datetime DEFAULT NULL,
  `nickname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pay` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `score` double DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_account
-- ----------------------------
INSERT INTO `t_account` VALUES ('10001', null, null, '2015-04-22 15:50:33', null, '未知地点(127.0.0.1)', '2015-04-22 15:53:00', '2015-04-22 15:52:59', 'Admin', '123456', null, '12345678900', '0', null, '2', 'admin', '');

-- ----------------------------
-- Table structure for `t_account_group`
-- ----------------------------
DROP TABLE IF EXISTS `t_account_group`;
CREATE TABLE `t_account_group` (
  `acc_id` bigint(20) NOT NULL,
  `g_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`acc_id`,`g_id`),
  KEY `FK68B3C562BAE736C5` (`g_id`),
  KEY `FK68B3C562C7E817C2` (`acc_id`),
  CONSTRAINT `FK68B3C562BAE736C5` FOREIGN KEY (`g_id`) REFERENCES `t_privilegegroup` (`id`),
  CONSTRAINT `FK68B3C562C7E817C2` FOREIGN KEY (`acc_id`) REFERENCES `t_account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_account_group
-- ----------------------------
INSERT INTO `t_account_group` VALUES ('10001', '20150422154554970LGS');

-- ----------------------------
-- Table structure for `t_appversion`
-- ----------------------------
DROP TABLE IF EXISTS `t_appversion`;
CREATE TABLE `t_appversion` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fileName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `filePath` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `uploadTime` datetime DEFAULT NULL,
  `version` double DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_appversion
-- ----------------------------

-- ----------------------------
-- Table structure for `t_job`
-- ----------------------------
DROP TABLE IF EXISTS `t_job`;
CREATE TABLE `t_job` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `accuracy` double DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `feedback` bit(1) DEFAULT NULL,
  `finishTime` datetime DEFAULT NULL,
  `initNum` int(11) DEFAULT NULL,
  `matchFirstTime` datetime DEFAULT NULL,
  `matchLastTime` datetime DEFAULT NULL,
  `matchNum` int(11) DEFAULT NULL,
  `recycleTime` bigint(20) DEFAULT NULL,
  `recycleType` int(11) DEFAULT NULL,
  `taskCount` int(11) DEFAULT NULL,
  `taskFinishCount` int(11) DEFAULT NULL,
  `taskId` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `taskId` (`taskId`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_job
-- ----------------------------

-- ----------------------------
-- Table structure for `t_message`
-- ----------------------------
DROP TABLE IF EXISTS `t_message`;
CREATE TABLE `t_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `issueTime` datetime DEFAULT NULL,
  `pushDuration` int(11) DEFAULT NULL,
  `pushTime` datetime DEFAULT NULL,
  `pushTimeToLive` int(11) DEFAULT NULL,
  `pushType` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_message
-- ----------------------------

-- ----------------------------
-- Table structure for `t_messagedeleterecord`
-- ----------------------------
DROP TABLE IF EXISTS `t_messagedeleterecord`;
CREATE TABLE `t_messagedeleterecord` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `accid` bigint(20) DEFAULT NULL,
  `deleteTime` datetime DEFAULT NULL,
  `msgid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_messagedeleterecord
-- ----------------------------

-- ----------------------------
-- Table structure for `t_privilegegroup`
-- ----------------------------
DROP TABLE IF EXISTS `t_privilegegroup`;
CREATE TABLE `t_privilegegroup` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createTime` datetime DEFAULT NULL,
  `initSign` bit(1) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_privilegegroup
-- ----------------------------
INSERT INTO `t_privilegegroup` VALUES ('20150422154554970LGS', '2015-04-22 15:45:54', '', '超级管理组');
INSERT INTO `t_privilegegroup` VALUES ('20150422154657488BIT', '2015-04-22 15:46:57', '', '工单管理组');
INSERT INTO `t_privilegegroup` VALUES ('20150422154705300HQB', '2015-04-22 15:47:05', '', '用户管理组');
INSERT INTO `t_privilegegroup` VALUES ('20150422154729868BMN', '2015-04-22 15:47:29', '', '奖品管理组');
INSERT INTO `t_privilegegroup` VALUES ('20150422154746597FPZ', '2015-04-22 15:47:46', '', '系统管理组');
INSERT INTO `t_privilegegroup` VALUES ('20150422154800429RNP', '2015-04-22 15:48:00', '', '系统设置组');

-- ----------------------------
-- Table structure for `t_pri_group`
-- ----------------------------
DROP TABLE IF EXISTS `t_pri_group`;
CREATE TABLE `t_pri_group` (
  `g_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `p_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`g_id`,`p_id`),
  KEY `FK99842CDCBAE736C5` (`g_id`),
  KEY `FK99842CDC29CC3888` (`p_id`),
  CONSTRAINT `FK99842CDC29CC3888` FOREIGN KEY (`p_id`) REFERENCES `t_systemprivilege` (`id`),
  CONSTRAINT `FK99842CDCBAE736C5` FOREIGN KEY (`g_id`) REFERENCES `t_privilegegroup` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_pri_group
-- ----------------------------
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '10001');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '20001');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '20002');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '20003');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '30001');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '30002');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '30003');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '40001');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '40002');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '40003');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '40004');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '40005');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '50001');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '50002');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '50003');
INSERT INTO `t_pri_group` VALUES ('20150422154554970LGS', '50004');
INSERT INTO `t_pri_group` VALUES ('20150422154657488BIT', '10001');
INSERT INTO `t_pri_group` VALUES ('20150422154705300HQB', '20001');
INSERT INTO `t_pri_group` VALUES ('20150422154705300HQB', '20002');
INSERT INTO `t_pri_group` VALUES ('20150422154705300HQB', '20003');
INSERT INTO `t_pri_group` VALUES ('20150422154729868BMN', '30001');
INSERT INTO `t_pri_group` VALUES ('20150422154729868BMN', '30002');
INSERT INTO `t_pri_group` VALUES ('20150422154729868BMN', '30003');
INSERT INTO `t_pri_group` VALUES ('20150422154746597FPZ', '40001');
INSERT INTO `t_pri_group` VALUES ('20150422154746597FPZ', '40002');
INSERT INTO `t_pri_group` VALUES ('20150422154746597FPZ', '40003');
INSERT INTO `t_pri_group` VALUES ('20150422154746597FPZ', '40004');
INSERT INTO `t_pri_group` VALUES ('20150422154746597FPZ', '40005');
INSERT INTO `t_pri_group` VALUES ('20150422154800429RNP', '50001');
INSERT INTO `t_pri_group` VALUES ('20150422154800429RNP', '50002');
INSERT INTO `t_pri_group` VALUES ('20150422154800429RNP', '50003');
INSERT INTO `t_pri_group` VALUES ('20150422154800429RNP', '50004');

-- ----------------------------
-- Table structure for `t_scorerecord`
-- ----------------------------
DROP TABLE IF EXISTS `t_scorerecord`;
CREATE TABLE `t_scorerecord` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `createTime` datetime DEFAULT NULL,
  `detail` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `score` double DEFAULT NULL,
  `sign` bit(1) DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  `account_id` bigint(20) NOT NULL,
  `taskRecord_id` bigint(20) DEFAULT NULL,
  `trophyRecord_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7C7C46186A028AF2` (`taskRecord_id`),
  KEY `FK7C7C4618B621419E` (`trophyRecord_id`),
  KEY `FK7C7C4618ECDE9696` (`account_id`),
  CONSTRAINT `FK7C7C46186A028AF2` FOREIGN KEY (`taskRecord_id`) REFERENCES `t_taskrecord` (`id`),
  CONSTRAINT `FK7C7C4618B621419E` FOREIGN KEY (`trophyRecord_id`) REFERENCES `t_trophyrecord` (`id`),
  CONSTRAINT `FK7C7C4618ECDE9696` FOREIGN KEY (`account_id`) REFERENCES `t_account` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_scorerecord
-- ----------------------------

-- ----------------------------
-- Table structure for `t_sense`
-- ----------------------------
DROP TABLE IF EXISTS `t_sense`;
CREATE TABLE `t_sense` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `contact` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `postTime` datetime DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  `account_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKA0F36023ECDE9696` (`account_id`),
  CONSTRAINT `FKA0F36023ECDE9696` FOREIGN KEY (`account_id`) REFERENCES `t_account` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_sense
-- ----------------------------

-- ----------------------------
-- Table structure for `t_shortmessage`
-- ----------------------------
DROP TABLE IF EXISTS `t_shortmessage`;
CREATE TABLE `t_shortmessage` (
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sendTime` datetime DEFAULT NULL,
  PRIMARY KEY (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_shortmessage
-- ----------------------------

-- ----------------------------
-- Table structure for `t_shortmessagerecode`
-- ----------------------------
DROP TABLE IF EXISTS `t_shortmessagerecode`;
CREATE TABLE `t_shortmessagerecode` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `result` bit(1) DEFAULT NULL,
  `sendTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_shortmessagerecode
-- ----------------------------

-- ----------------------------
-- Table structure for `t_systemconfig`
-- ----------------------------
DROP TABLE IF EXISTS `t_systemconfig`;
CREATE TABLE `t_systemconfig` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `valueContent` longtext COLLATE utf8_unicode_ci,
  `valueDouble` double DEFAULT NULL,
  `valueInt` int(11) DEFAULT NULL,
  `valueLong` bigint(20) DEFAULT NULL,
  `valueShort` smallint(6) DEFAULT NULL,
  `valueText` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_systemconfig
-- ----------------------------
INSERT INTO `t_systemconfig` VALUES ('about', '<strong> \r\n<p>\r\n	<span style=\"color:#003366;\"><span style=\"font-size:medium;\"><strong><span style=\"font-family:宋体;\"><span style=\"font-family:Arial;\">公司介绍</span></span></strong><span style=\"font-family:宋体;\"><span style=\"font-family:Arial;\">：</span></span></span></span><span style=\"color:#003366;\"><span style=\"font-size:small;\"><span style=\"font-family:宋体;\"><br />\r\n&nbsp; &nbsp; </span></span><span style=\"font-size:small;\"><span style=\"font-family:宋体;\">清华大学苏研院大数据处理中心以聚云浩海（苏州）信息科技有限公司，这一企业化运作平台，将相关技术成果转换为产品，同时提供了高质量的实施服务以及高水\r\n准的运营维护服务。这一企业化运作模式在当前国内大数据领域成功探索出了一条新途径，并已经获得国家政府职能部门以及多家大型国家支柱型企业的认可。<span>&nbsp;<br />\r\n</span></span></span><span style=\"font-size:small;\"><span style=\"font-family:宋体;\">&nbsp;&nbsp;&nbsp;\r\n聚云浩海（苏州）信息科技有限公司怀揣着打破国外信息技术垄断、弯道追赶的理想，坚定地走着一条民族、自主与创新之路，并在实践中严谨而深入的进行着技术\r\n创新、机制创新、企业文化创新与管理理念创新。公司目前已拥有六十人的研发团队，其中硕士及以上学历的研发人员占比超过<span>70%</span>。<br />\r\n</span></span><b><span style=\"font-size:12pt;font-family:宋体;\"><br />\r\n<span style=\"font-size:medium;\"></span></span></b></span> \r\n</p>\r\n</strong>', null, null, null, null, null);
INSERT INTO `t_systemconfig` VALUES ('manual', '这里可以填写相关的积分兑换说明事项<br />', '3', null, null, null, null);
INSERT INTO `t_systemconfig` VALUES ('match', null, '0.6', '6', '300000', '3', null);
INSERT INTO `t_systemconfig` VALUES ('phone', '<p>\r\n	地址：成都市青羊区一环路西一段148号颐景商务楼403-409\r\n</p>\r\n<p>\r\n	电话：86-28-87011623\r\n          传真：86-28-87047300\r\n</p>\r\n<p>\r\n	邮箱：service@tsinghuabigdata.com\r\n</p>', null, null, null, null, null);

-- ----------------------------
-- Table structure for `t_systemprivilege`
-- ----------------------------
DROP TABLE IF EXISTS `t_systemprivilege`;
CREATE TABLE `t_systemprivilege` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `levelORC` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_systemprivilege
-- ----------------------------
INSERT INTO `t_systemprivilege` VALUES ('10001', '1', '工单分配', 'manage/task/job_list.action');
INSERT INTO `t_systemprivilege` VALUES ('20001', '2', '用户查看', 'manage/account/user_list.action');
INSERT INTO `t_systemprivilege` VALUES ('20002', '2', '积分中心', 'manage/credit/scoreRecord_list.action');
INSERT INTO `t_systemprivilege` VALUES ('20003', '2', '兑换管理', 'manage/credit/trophyRecord_list.action');
INSERT INTO `t_systemprivilege` VALUES ('30001', '3', '奖品列表', 'manage/credit/trophy_list.action');
INSERT INTO `t_systemprivilege` VALUES ('30002', '3', '奖品添加', 'manage/credit/trophy_addUI.action');
INSERT INTO `t_systemprivilege` VALUES ('30003', '3', '奖品分类管理', 'manage/credit/trophyType_list.action');
INSERT INTO `t_systemprivilege` VALUES ('40001', '4', '系统帐号', 'manage/account/account_list.action');
INSERT INTO `t_systemprivilege` VALUES ('40002', '4', '消息管理', 'manage/extra/message_list.action');
INSERT INTO `t_systemprivilege` VALUES ('40003', '4', '意见反馈', 'manage/extra/sense_list.action');
INSERT INTO `t_systemprivilege` VALUES ('40004', '4', '角色定义', 'manage/account/group_list.action');
INSERT INTO `t_systemprivilege` VALUES ('40005', '4', 'App版本管理', 'manage/extra/appversion_list.action');
INSERT INTO `t_systemprivilege` VALUES ('50001', '5', '工单设置', 'manage/extra/config_show.action#scid=match');
INSERT INTO `t_systemprivilege` VALUES ('50002', '5', '积分说明', 'manage/extra/config_show.action#scid=manual');
INSERT INTO `t_systemprivilege` VALUES ('50003', '5', '关于我们', 'manage/extra/config_show.action#scid=about');
INSERT INTO `t_systemprivilege` VALUES ('50004', '5', '联系我们', 'manage/extra/config_show.action#scid=phone');

-- ----------------------------
-- Table structure for `t_task`
-- ----------------------------
DROP TABLE IF EXISTS `t_task`;
CREATE TABLE `t_task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `accuracy` double DEFAULT NULL,
  `canNum` int(11) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `finishTime` datetime DEFAULT NULL,
  `inLineNo` int(11) DEFAULT NULL,
  `initNum` int(11) DEFAULT NULL,
  `lineNo` int(11) DEFAULT NULL,
  `matchFirstTime` datetime DEFAULT NULL,
  `matchLastTime` datetime DEFAULT NULL,
  `matchNum` int(11) DEFAULT NULL,
  `matchedNum` int(11) DEFAULT NULL,
  `metricPoint` longtext COLLATE utf8_unicode_ci,
  `postNum` int(11) DEFAULT NULL,
  `ration` double DEFAULT NULL,
  `recycleTime` bigint(20) DEFAULT NULL,
  `recycleType` int(11) DEFAULT NULL,
  `result` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resultNum` int(11) DEFAULT NULL,
  `score` double DEFAULT NULL,
  `taskId` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  `job_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKCB631670439552C2` (`job_id`),
  CONSTRAINT `FKCB631670439552C2` FOREIGN KEY (`job_id`) REFERENCES `t_job` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_task
-- ----------------------------

-- ----------------------------
-- Table structure for `t_taskrecord`
-- ----------------------------
DROP TABLE IF EXISTS `t_taskrecord`;
CREATE TABLE `t_taskrecord` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `effectiveTime` datetime DEFAULT NULL,
  `identState` int(11) DEFAULT NULL,
  `matchTime` datetime DEFAULT NULL,
  `postTime` datetime DEFAULT NULL,
  `result` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `score` double DEFAULT NULL,
  `sign` int(11) DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  `account_id` bigint(20) NOT NULL,
  `task_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2B3AEEC12928B672` (`task_id`),
  KEY `FK2B3AEEC1ECDE9696` (`account_id`),
  CONSTRAINT `FK2B3AEEC12928B672` FOREIGN KEY (`task_id`) REFERENCES `t_task` (`id`),
  CONSTRAINT `FK2B3AEEC1ECDE9696` FOREIGN KEY (`account_id`) REFERENCES `t_account` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_taskrecord
-- ----------------------------

-- ----------------------------
-- Table structure for `t_trophy`
-- ----------------------------
DROP TABLE IF EXISTS `t_trophy`;
CREATE TABLE `t_trophy` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `detail` longtext COLLATE utf8_unicode_ci,
  `detailText` longtext COLLATE utf8_unicode_ci,
  `exchangeNum` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imageName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `money` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  `type_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7FE5185BE5C89A2E` (`type_id`),
  CONSTRAINT `FK7FE5185BE5C89A2E` FOREIGN KEY (`type_id`) REFERENCES `t_trophytype` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_trophy
-- ----------------------------

-- ----------------------------
-- Table structure for `t_trophyrecord`
-- ----------------------------
DROP TABLE IF EXISTS `t_trophyrecord`;
CREATE TABLE `t_trophyrecord` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `number` int(11) DEFAULT NULL,
  `postTime` datetime DEFAULT NULL,
  `processTime` datetime DEFAULT NULL,
  `score` double DEFAULT NULL,
  `sign` bit(1) DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  `account_id` bigint(20) NOT NULL,
  `trophy_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6BD0946CC590DE1E` (`trophy_id`),
  KEY `FK6BD0946CECDE9696` (`account_id`),
  CONSTRAINT `FK6BD0946CC590DE1E` FOREIGN KEY (`trophy_id`) REFERENCES `t_trophy` (`id`),
  CONSTRAINT `FK6BD0946CECDE9696` FOREIGN KEY (`account_id`) REFERENCES `t_account` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_trophyrecord
-- ----------------------------

-- ----------------------------
-- Table structure for `t_trophytype`
-- ----------------------------
DROP TABLE IF EXISTS `t_trophytype`;
CREATE TABLE `t_trophytype` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `od` int(11) DEFAULT NULL,
  `visible` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of t_trophytype
-- ----------------------------
INSERT INTO `t_trophytype` VALUES ('10001', '充值卡', '1', '');
