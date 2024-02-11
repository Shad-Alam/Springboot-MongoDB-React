package com.shad.Backend.Service;

import com.shad.Backend.Model.Course;
import org.springframework.stereotype.Service;

@Service
public interface CourseService {
    void addCourse(Course course);
    void updateCourse(Course course);
}
