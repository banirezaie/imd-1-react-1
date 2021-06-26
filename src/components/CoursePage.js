import { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import "./course.css"
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

const CoursePage = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses().then(function (_courses) {
            setCourses(_courses)
        })
    }, [])


    return (
        <>
            <Link to="/course" className="btn btn-primary" >Add a course</Link>
            <CourseList courses={courses} />
        </>
    )
}

export default CoursePage;