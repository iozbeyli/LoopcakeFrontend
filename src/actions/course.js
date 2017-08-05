import {COURSE_SUMMARY} from './types';

export function courseSummaryAction(course){
	return{
      type: COURSE_SUMMARY,
      course: course
    }
}
