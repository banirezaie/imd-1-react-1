import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
    courseApi.saveCourse(course).then((savedCourse) => {
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_COURSE,
            course: savedCourse
        })
    })
}

export function loadCourse() {
    courseApi.getCourses().then((course) => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_COURSES,
            course: course
        })
    })
}

export function updateCourse(course) {
    courseApi.getCourseBySlug(course).then((updatedCourse) => {
        dispatcher.dispatch({
            actionType: actionTypes.UPDATE_COURSE,
            course: updatedCourse
        })
    })
}