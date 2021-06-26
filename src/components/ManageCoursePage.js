import { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = () => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        authorId: null,
        title: "",
        category: ""
    })

    function changeHandler(e) {
        const updatedCourse = { ...course, [e.target.name]: e.target.value }
        setCourse(updatedCourse)
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={changeHandler} />
        </>
    )
}

export default ManageCoursePage;