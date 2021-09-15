package com.example.StudentInformationSystem.controller;


import com.example.StudentInformationSystem.model.Student;
import com.example.StudentInformationSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("student")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping(path="/register")
    public @ResponseBody String register(@RequestParam String name, @RequestParam String surname,@RequestParam String grade) {

        Student newStudent = new Student();
        newStudent.setName(name);
        newStudent.setGrade(grade);
        newStudent.setSurname(surname);
        studentRepository.save(newStudent);
        return "Saved";

    }
    @GetMapping("/getstudent")
    public String getStudent(){
        return "Merhaba";
    }
}
