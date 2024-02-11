package com.shad.Backend.Controller;

import com.shad.Backend.Model.Student;
import com.shad.Backend.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;

    // create new student
    @PostMapping("/api/student/add")
    public void addStudent(@RequestBody Student student){
        studentService.addStudent(student);
    }

    // update student information
    @PutMapping("/api/student/update")
    public void updateStudent(@RequestBody Student student){
        studentService.updateStudent(student);
    }

    // get all student list
    @GetMapping("/api/student/get/all")
    public List<Student> getAllStudent(@RequestBody Student student){
        return studentService.studentList();
    }
}
