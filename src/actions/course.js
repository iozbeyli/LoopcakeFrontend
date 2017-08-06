import {
  GET_COURSE_SUMMARY,
  GET_COURSE,
  GET_COURSE_PROJECT_LIST,
  GET_COURSE_ANNOUNCEMENT_LIST,
  GET_ATTENDED_COURSE} from './types';

export function courseSummaryAction(course){
	return{
      type: GET_COURSE_SUMMARY,
      course: course
    }
}

export function courseAction(course){
	return{
      type: GET_COURSE,
      course: course
    }
}

export function courseAttendedAction(courses){
  return{
    type: GET_ATTENDED_COURSE,
    courses: courses
  }
}

export function courseProjectListAction(courseId,projectList){
  return{
    type: GET_COURSE_PROJECT_LIST,
    projects: projectList,
    courseId: courseId
  }
}

export function courseAnnouncementListAction(courseId,announcements){
  return{
    type: GET_COURSE_ANNOUNCEMENT_LIST,
    announcements: announcements,
    courseId: courseId
  }
}