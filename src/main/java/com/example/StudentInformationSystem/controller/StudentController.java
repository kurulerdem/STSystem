package com.example.StudentInformationSystem.controller;


import com.example.StudentInformationSystem.model.Student;
import com.example.StudentInformationSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("student")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping(path="/register")
    public @ResponseBody String register(@RequestParam String name, @RequestParam String surname,@RequestParam String grade,@RequestParam String department,@RequestParam String email) {

        Student newStudent = new Student();
        newStudent.setName(name);
        newStudent.setGrade(grade);
        newStudent.setSurname(surname);
        newStudent.setEmail(email);
        newStudent.setDepartment(department);
        studentRepository.save(newStudent);
        return "Saved";

    }
    @GetMapping("/getstudents")
    public List<Student> getStudents(){

        return studentRepository.findAll();
    }

    @GetMapping("/erdemtest")
    public String erdem(){
        return "Test";
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return studentRepository.findById(id).orElseThrow(RuntimeException::new);
    }

}
