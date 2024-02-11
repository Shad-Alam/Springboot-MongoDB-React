package com.shad.Backend.Service;

import com.shad.Backend.Model.Course;
import com.shad.Backend.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private CourseRepository courseRepository;

    // add new course
    @Override
    public void addCourse(Course course) {
        courseRepository.save(course);
    }

    // update course
    @Override
    public void updateCourse(Course course) {
        courseRepository.save(course);
    }
}
