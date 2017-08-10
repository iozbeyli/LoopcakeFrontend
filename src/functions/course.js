import {getCourseAnnouncementList,makeCourseAnnouncement} from '../database/course';
import {courseAnnouncementListAction} from '../actions/course';
export function createAnnouncementFunction(courseId,token,dispatch){
    return function(title,content,resultFunc){
        let handleResponse = (err,resp) => {
        if(err){
            resultFunc("Failed");
        }else{
            let handleInnerResponse =  (err,resp) => {
                if(err){
                    resultFunc("Failed");
                }else{
                    dispatch(courseAnnouncementListAction(courseId,resp.body.data));
                    resultFunc(resp.status);
                }
            }
            getCourseAnnouncementList(courseId,token,handleInnerResponse);
            
        }
        console.log(resp);
    }
        console.log("token",token);
        makeCourseAnnouncement(title,content,courseId,token,handleResponse); 
    }   
}