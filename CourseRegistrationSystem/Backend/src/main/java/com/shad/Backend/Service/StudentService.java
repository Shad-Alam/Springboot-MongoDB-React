package com.shad.Backend.Service;

import com.shad.Backend.Model.Student;

import java.util.List;

public interface StudentService {
    List<Student> studentList();
    void addStudent(Student student);
    void updateStudent(Student student);
    void deleteStudent(String studentId);
}
