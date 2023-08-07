package com.spring.Entities;

import java.io.*;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Students")
public class Student {
	private long Admission_no;
	private String Admission_date;
	@Id
	private long Student_ID;
	private String GuardianName;
	private String FirstName;
	private String LastName;
	private String Batch;
	private String DOB;
	private String Gender;
	private String Major;
	private String Branch;
	private String Mobile;
	private String Email_ID;
	private String Current_Address;
	private String Permanent_Address;
	private int Attendence;
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(long admission_no, String admission_date, long student_ID, String guardianName, String firstName,
			String lastName, String batch, String dOB, String gender, String major, String branch, String mobile,
			String email_ID, String current_Address, String permanent_Address, int attendence) {
		super();
		Admission_no = admission_no;
		Admission_date = admission_date;
		Student_ID = student_ID;
		GuardianName = guardianName;
		FirstName = firstName;
		LastName = lastName;
		Batch = batch;
		DOB = dOB;
		Gender = gender;
		Major = major;
		Branch = branch;
		Mobile = mobile;
		Email_ID = email_ID;
		Current_Address = current_Address;
		Permanent_Address = permanent_Address;
		Attendence = attendence;
	}
	public long getAdmission_no() {
		return Admission_no;
	}
	public void setAdmission_no(long admission_no) {
		Admission_no = admission_no;
	}
	public String getAdmission_date() {
		return Admission_date;
	}
	public void setAdmission_date(String admission_date) {
		Admission_date = admission_date;
	}
	public long getStudent_ID() {
		return Student_ID;
	}
	public void setStudent_ID(long student_ID) {
		Student_ID = student_ID;
	}
	public String getGuardianName() {
		return GuardianName;
	}
	public void setGuardianName(String guardianName) {
		GuardianName = guardianName;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getBatch() {
		return Batch;
	}
	public void setBatch(String batch) {
		Batch = batch;
	}
	public String getDOB() {
		return DOB;
	}
	public void setDOB(String dOB) {
		DOB = dOB;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public String getMajor() {
		return Major;
	}
	public void setMajor(String major) {
		Major = major;
	}
	public String getBranch() {
		return Branch;
	}
	public void setBranch(String branch) {
		Branch = branch;
	}
	public String getMobile() {
		return Mobile;
	}
	public void setMobile(String mobile) {
		Mobile = mobile;
	}
	public String getEmail_ID() {
		return Email_ID;
	}
	public void setEmail_ID(String email_ID) {
		Email_ID = email_ID;
	}
	public String getCurrent_Address() {
		return Current_Address;
	}
	public void setCurrent_Address(String current_Address) {
		Current_Address = current_Address;
	}
	public String getPermanent_Address() {
		return Permanent_Address;
	}
	public void setPermanent_Address(String permanent_Address) {
		Permanent_Address = permanent_Address;
	}
	public int getAttendence() {
		return Attendence;
	}
	public void setAttendence(int attendence) {
		Attendence = attendence;
	}
	@Override
	public String toString() {
		return "Student [Admission_no=" + Admission_no + ", Admission_date=" + Admission_date + ", Student_ID="
				+ Student_ID + ", GuardianName=" + GuardianName + ", FirstName=" + FirstName + ", LastName=" + LastName
				+ ", Batch=" + Batch + ", DOB=" + DOB + ", Gender=" + Gender + ", Major=" + Major + ", Branch=" + Branch
				+ ", Mobile=" + Mobile + ", Email_ID=" + Email_ID + ", Current_Address=" + Current_Address
				+ ", Permanent_Address=" + Permanent_Address + ", Attendence=" + Attendence + "]";
	}
}
