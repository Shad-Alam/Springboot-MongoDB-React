package com.shad.Backend.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.google.gson.Gson;
import com.shad.Backend.Model.Student;
import com.shad.Backend.Service.StudentService;
import org.apache.catalina.Group;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonFactoryBean;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    // create new student
    @PostMapping("/student/add")
    public void addStudent(@RequestBody Student student){
        studentService.addStudent(student);
    }

    // update student information
    @PutMapping("/student/update")
    public void updateStudent(@RequestBody Student student){
        studentService.updateStudent(student);
    }


    @GetMapping("/groups")
    List<Student> groups() {
        return studentService.studentList();
    }

    // get all student list
    @GetMapping("/student/get/all")
    public List<Student> getAllStudent(){
        return studentService.studentList();
    }

    @DeleteMapping("/student/delete/{id}")
    public void deleteStudent(@PathVariable("id") String studentId){
        studentService.deleteStudent(studentId);
    }
}
