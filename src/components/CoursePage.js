import { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import "./course.css";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourse } from "../actions/courseActions";

const CoursePage = () => {
    const [courses, setCourses] = useState(courseStore.getCourses())

    useEffect(() => {
        if (courseStore.getCourses().length === 0) loadCourse()
        courseStore.addChangeListener(onChange)
        return () => courseStore.removeChangeListener(onChange)

    }, [courseStore.getCourses().length]) //dependencies array

    function onChange() {
        setCourses(courseStore.getCourses())
    }

    return (
        <>
            <Link to="/course" className="btn btn-primary" >Add a course</Link>
            <CourseList courses={courses} />
        </>
    )
}

export default CoursePage;