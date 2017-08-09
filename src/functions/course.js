import {getCourseAnnouncementList,makeCourseAnnouncement} from '../database/course';
import {courseAnnouncementListAction} from '../actions/course';
export function createAnnouncementFunction(courseId,token,dispatch){
    let handleResponse = (err,resp) => {
        if(err){

        }else{
            let handleInnerResponse =  (err,resp) => {
                if(err){

                }else{

                }
            }
            //getCourseAnnouncementList(courseId,token,);
            //dispatch(courseAnnouncementListAction());
        }
        respFunc(err,resp);
    }
    return function(title,content){
        makeCourseAnnouncement(title,content,courseId,token,handleResponse);
    }   
}