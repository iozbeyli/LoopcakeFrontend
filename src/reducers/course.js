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
        case Types.GET_ATTENDED_COURSE:
            let tempCourses = {};
            for(let i=0;i<action.courses.length;i++){
                let c = action.courses[i];
                course = state[c._id] || {};
                let innerCourse = course.course || {};
                innerCourse = {...innerCourse, name:c.name, _id:c._id}
                course = {...course,course:innerCourse};
                tempCourses = {...tempCourses,[c._id]: course}
                 console.log("temp courses",tempCourses);
            }
            
            /*action.courses.map(c=>{
                
                
                let innerCourse = course.course || {};
                innerCourse = {...innerCourse, name:c.name, _id:c._id}
                tempCourses = {...tempCourses,[c._id]: course}
            });*/
            return {...state, ...tempCourses};
        default:
            return state;
    }
}
