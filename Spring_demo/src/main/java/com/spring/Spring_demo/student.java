package com.spring.Spring_demo;

public class student {
	private int s_id;
	private String s_name;
	public student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public student(int s_id, String s_name) {
		super();
		this.s_id = s_id;
		this.s_name = s_name;
	}
	public int getS_id() {
		return s_id;
	}
	public void setS_id(int s_id) {
		//System.out.println("Setter Injection for S_id");
		this.s_id = s_id;
	}
	public String getS_name() {
		return s_name;
	}
	public void setS_name(String s_name) {
		//System.out.println("Setter Injection for S_name");
		this.s_name = s_name;
	}
	@Override
	public String toString() {
		return "student [s_id=" + s_id + ", s_name=" + s_name + "]";
	}
}
