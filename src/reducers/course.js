import {Types} from '../actions';

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
	console.log("course reducer");
    console.log(action);
    let course = {};
    switch (action.type) {
        case Types.GET_COURSE_SUMMARY:
            return {...state, [action.course.course._id]: action.course};
        case Types.GET_COURSE:
            course = state[action.course._id];
            course = {...course, course: action.course}
            return {...state, [action.course._id]: course};
        case Types.GET_COURSE_PROJECT_LIST:
            course = state[action.courseId];
            course = {...course, projects: action.projects}
            return {...state, [action.courseId]: course};
        case Types.GET_COURSE_ANNOUNCEMENT_LIST:
            course = state[action.courseId];
            course = {...course, announcements: action.announcements}
            return {...state, [action.courseId]: course};
        default:
            return state;
    }
}
