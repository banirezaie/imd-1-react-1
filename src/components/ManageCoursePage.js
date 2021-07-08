import { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        authorId: null,
        title: "",
        category: ""
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const slug = props.match.params.slug
        if (slug) {
            setCourse(courseStore.getCoursesBySlug(slug))
        }
    }, [props.match.params.slug])

    function changeHandler(e) {
        const updatedCourse = { ...course, [e.target.name]: e.target.value }
        setCourse(updatedCourse)
    }

    function submitHandler(event) {
        event.preventDefault();
        if (!formIsValid) return;
        if (courseStore.getCourses().id) {
            courseActions.updateCourse(course)
            props.history.push("/courses")
            toast.success("Your course saved successfully")
        } else {
            courseActions.saveCourse(course)
            props.history.push("/courses")
            toast.success("Your course saved successfully")
        }
    }

    function formIsValid() {
        const _errors = {};

        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author is required";
        if (!course.category) _errors.category = "Category is required";

        setErrors(_errors)
        // now we want if the object is an empty array, then return true
        return Object.keys(errors).length === 0;
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={changeHandler} onSubmit={submitHandler} errors={errors} />
        </>
    )
}

export default ManageCoursePage;