package com.spring.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.Entities.Student;

@Repository
public interface StudentDAO extends JpaRepository<Student,Long> {

}
