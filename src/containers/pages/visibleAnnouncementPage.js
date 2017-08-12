import React, { Component } from 'react'
import { connect } from 'react-redux';
import {AnnouncementPage} from '../../views';
import {} from '../../actions/authentication';
import { withCookies, Cookies } from 'react-cookie';
import { getAttendedCourses, getCourse, getCourseProjectList, getCourseAnnouncementList} from '../../database/course'
import PropTypes from 'prop-types';
import {courseAction,courseProjectListAction,courseAnnouncementListAction,courseAttendedAction} from '../../actions/course';

class VisibleAnnouncementPage extends Component {

    _getCourseAnnouncement = (courseId) =>{
      let handleResponse = (err,resp) => {
        if(err){
          console.log(err);
        }else{
          this.props.courseAnnouncementListAction(courseId,resp.body.data);
        }
      }
      getCourseAnnouncementList(courseId,this.props.user.token,handleResponse);
    }

    _getAttendedCourses(){
      const handleResponse = (err,resp) =>{
        if(err){

        }else{
          this.props.courseAttendedAction(resp.body.data);
          for(let i=0;i<resp.body.data.length;i++){
            this._getCourseAnnouncement(resp.body.data[i]._id);
          }
        }
      }
      getAttendedCourses(this.props.user.user._id,this.props.user.token,handleResponse);
    }

    _getCourseAnnouncementLists=(keys)=>{
      for(let i=0;i<keys.length;i++){
        this._getCourseAnnouncement(this.props.course[keys[i]].course._id);
      }
    }

    componentWillMount() {
      let keys = Object.keys(this.props.course);
      if(keys.length==0){
        this._getAttendedCourses();
      }else{
        this._getCourseAnnouncementLists(keys);
      }
      
    }

    _renderAnnouncements=()=>{
      let announcements = [];
      let keys = Object.keys(this.props.course);
      
      for(let i=0;i<keys.length;i++){
        let course = this.props.course[keys[i]];
        if(course&&course.announcements){
          let announcementKeys = Object.keys(course.announcements);
        for(let j=0;j<announcementKeys.length;j++){
            let announcement = {...course.announcements[j],courseName: course.course.name}
            announcements.push(announcement);
        }
        }
        
      }
      return announcements;
    }

    render() {
        return this.props.course ? <AnnouncementPage announcements={this._renderAnnouncements()}/> : null
    }
}

const mapStateToProps = (state) =>({
  ...state
});

const mapDispatchToProps = (dispatch) =>({
    courseAction: (course) => {
    	dispatch(courseAction(course))
    },
    courseProjectListAction: (courseId, projectList) => {
      dispatch(courseProjectListAction(courseId,projectList));
    },
    courseAnnouncementListAction: (courseId, announcementList) => {
      dispatch(courseAnnouncementListAction(courseId,announcementList));
    },
    courseAttendedAction: (courses) => {
      dispatch(courseAttendedAction(courses));
    }
});

export default withCookies(connect(mapStateToProps,mapDispatchToProps)(VisibleAnnouncementPage));;