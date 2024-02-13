package com.shad.Backend.Service;

import com.shad.Backend.Model.Student;
import com.shad.Backend.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository studentRepository;

    // get all student information
    @Override
    public List<Student> studentList() {
        return studentRepository.findAll();
    }

    // insert student information into server
    @Override
    public void addStudent(Student student) {
        studentRepository.save(student);
    }

    // update student information
    @Override
    public void updateStudent(Student student) {
        studentRepository.save(student);
    }

    @Override
    public void deleteStudent(String studentId) {
        studentRepository.deleteById(studentId);
    }
}
