package com.spring.Controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.Entities.Student;
import com.spring.Exceptions.StudentNotFoundException;
import com.spring.Repositories.StudentRepository;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
@RequestMapping("/api/v1/")
public class Project_Controller {
	@Autowired
	private StudentRepository studentRepository;
	
	//Student Mapping
	@GetMapping("/student")
	public List<Student> getStudents() {
		return studentRepository.findAll();
	}
	
	@GetMapping("/student/{student_ID}")
	public ResponseEntity<Student> getStudentById(@PathVariable Long student_ID) {
		Student std=studentRepository.findById(student_ID).orElseThrow(()->new StudentNotFoundException("Student ID is not found!!!"));
		return ResponseEntity.ok(std);
	}
	
	@PostMapping("/student")
	public Student createStudent(@RequestBody Student std) {
		return studentRepository.save(std);
	}
	
	@PutMapping("/student/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Long student_ID,@RequestBody Student std) {
		Student std2=studentRepository.findById(student_ID).orElseThrow(()->new StudentNotFoundException("Student ID is not found!!!"));
		std2.setAdmission_no(std.getAdmission_no());
		std2.setAdmission_date(std.getAdmission_date());
		std2.setFirstName(std.getFirstName());
		std2.setLastName(std.getLastName());
		std2.setBatch(std.getBatch());
		std2.setDOB(std.getDOB());
		std2.setGender(std.getGender());
		std2.setMajor(std.getMajor());
		std2.setBranch(std.getBranch());
		std2.setMobile(std.getMobile());
		std2.setEmail_ID(std.getEmail_ID());
		std2.setCurrent_Address(std.getCurrent_Address());
		std2.setPermanent_Address(std.getPermanent_Address());
		studentRepository.save(std2);
		return ResponseEntity.ok(std2);
	}
	
	@DeleteMapping("/student/{student_ID}")
	public ResponseEntity<Student> deleteStudent(@PathVariable Long student_ID) {
		Student std=studentRepository.findById(student_ID).orElseThrow(()->new StudentNotFoundException("Student ID is not found!!!"));
		studentRepository.delete(std);
		return ResponseEntity.ok(std);
	}
}
