import {post, get} from './communicationController';
import {API_URL} from './index';

export function getAttendedCourses(userId,token, responseFunc) {
    post(API_URL+'/course/attended', {_id: userId}, responseFunc,token);
}

export function getCourseSummary(courseId, token, responseFunc){
    get(`${API_URL}/course/${courseId}/summary`,{},responseFunc,token);
}

