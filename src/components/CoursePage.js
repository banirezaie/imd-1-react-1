import { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import "./course.css"
import HomePage from "./HomePage"

const CoursePage = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses().then(function (_courses) {
            setCourses(_courses)
        })
    }, [])


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author Id</th>
                        <th>Category</th>
                        <th>Slug</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => {
                        return (
                            <tr key={course.id}>
                                <td>{course.authorId}</td>
                                <td>{course.category}</td>
                                <td>{course.slug}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <HomePage courses={courses} />
        </>
    )
}

export default CoursePage;