package com.spring.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.spring.Entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {
	
}
