package com.hydom.extra.service;

import org.springframework.stereotype.Service;

import com.hydom.dao.DAOSupport;
import com.hydom.extra.ebean.AppVersion;

@Service
public class AppVersionServiceBean extends DAOSupport<AppVersion> implements
		AppVersionService {

}
