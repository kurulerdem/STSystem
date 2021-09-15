package com.example.StudentInformationSystem.repository;

import com.example.StudentInformationSystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Long> {
}
