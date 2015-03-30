package com.hydom.extra.action;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.hydom.extra.ebean.SystemConfig;
import com.hydom.extra.service.SystemConfigService;

@Controller
@Scope(value = "prototype")
public class SystemConfigAction {
	@Resource
	private SystemConfigService systemConfigService;

	private String scid;

	private SystemConfig config;

	public String show() {
		config = systemConfigService.find(scid);
		return "success";
	}

	public String editUI() {
		config = systemConfigService.find(scid);
		return "success";
	}

	public String edit() {
		SystemConfig entity = systemConfigService.find(scid);
		entity.setValueContent(config.getValueContent());
		if(config.getValueDouble()!=null){
			entity.setValueDouble(config.getValueDouble() / 100);
		}
		entity.setValueInt(config.getValueInt());
		entity.setValueLong(config.getValueLong());
		entity.setValueShort(config.getValueShort());
		entity.setValueText(config.getValueText());
		systemConfigService.update(entity);
		return "success";
	}

	public String getScid() {
		return scid;
	}

	public void setScid(String scid) {
		this.scid = scid;
	}

	public SystemConfig getConfig() {
		return config;
	}

	public void setConfig(SystemConfig config) {
		this.config = config;
	}

}
