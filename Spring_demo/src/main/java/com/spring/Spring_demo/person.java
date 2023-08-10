package com.spring.Spring_demo;

public class person {
	private int p_id;
	private String p_name;
	private certificate cert;
	public person(int p_id, String p_name, certificate cert) {
		super();
		this.p_id = p_id;
		this.p_name = p_name;
		this.cert = cert;
	}
	@Override
	public String toString() {
		return "person [p_id=" + p_id + ", p_name=" + p_name + ", cert=" + cert + "]";
	}
}
