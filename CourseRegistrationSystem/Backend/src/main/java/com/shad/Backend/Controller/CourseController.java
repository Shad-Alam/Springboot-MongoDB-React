package com.shad.Backend.Controller;

import com.shad.Backend.Model.Course;
import com.shad.Backend.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;

    // add new course
    @PostMapping("/api/course/add")
    public void addCourse(@RequestBody Course course){
        courseService.addCourse(course);
    }

    // update any course
    @PutMapping("/api/course/update")
    public void updateCourse(@RequestBody Course course){
        courseService.updateCourse(course);
    }
}
