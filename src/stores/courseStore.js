import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes"

const CHANGE_EVENT = "CHANGE";
let _courses = [];

class CourseStore extends EventEmitter {

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    emitChange() {
        this.emit(CHANGE_EVENT)
    }

    getCourses() {
        return _courses;
    }

    getCoursesBySlug(slug) {
        return _courses.find(course => course.slug === slug)
    }
}

const store = new CourseStore();

Dispatcher.register((action) => {
    switch (action.actionType) {
        case actionTypes.CREATE_COURSE:
            _courses.push(action.course)
            store.emitChange();
            break;
        case actionTypes.LOAD_COURSES:
            _courses = action.course;
            store.emitChange();
            break;
        case actionTypes.UPDATE_COURSE:
            _courses = _courses.map(course => course.id === course ? action.course : course);
            store.emitChange();
            break;
        default:
        // return nothing
    }
})

export default store;