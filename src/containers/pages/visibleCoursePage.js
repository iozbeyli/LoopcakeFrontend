import React, { Component } from 'react'
import { connect } from 'react-redux';
import {CoursePage} from '../../views';
import {} from '../../actions/authentication';
import { withCookies, Cookies } from 'react-cookie';
import { getCourse ,getCourseProjectList,getCourseAnnouncementList} from '../../database/course'
import PropTypes from 'prop-types';
import {courseAction,courseProjectListAction,courseAnnouncementListAction} from '../../actions/course';

class VisibleCoursePage extends Component {
   constructor(props){
      super(props);
   }
    _getProjectList =()=>{
      let handleResponse = (err,resp) => {
        if(err){
          console.log(err);
        }else{
          console.log("Project List",resp);
          this.props.courseProjectListAction("59401393ca715c55ba5eb00e",resp.body.data);
        }
      }
      getCourseProjectList("59401393ca715c55ba5eb00e",this.props.user.token,handleResponse);
    }

    _getAnnouncementList = ()=>{
      let handleResponse = (err,resp) => {
        if(err){
          console.log(err);
        }else{
          console.log("Announcement List",resp);
          this.props.courseAnnouncementListAction("59401393ca715c55ba5eb00e",resp.body.data);
        }
      }
      getCourseAnnouncementList("59401393ca715c55ba5eb00e",this.props.user.token,handleResponse);
    }
    componentWillMount() {
      console.log("Props: ", this.props);
      let handleResponse = (err,resp) => {
        if(err){
          console.log(err);
        }else{
          console.log(resp);
          this.props.courseAction(resp.body.data);
          this._getProjectList();
          this._getAnnouncementList();
        }
      }
      getCourse("59401393ca715c55ba5eb00e",this.props.user.token,handleResponse);
    }

    render() {
      
       return this.props.course && this.props.course["59401393ca715c55ba5eb00e"] ? <CoursePage data={this.props.course["59401393ca715c55ba5eb00e"]}/> : null
    }
}

const mapStateToProps = (state) =>({
  ...state
});

const mapDispatchToProps = (dispatch) =>({
    courseAction: (course) => {
    	console.log("Course Action");
    	dispatch(courseAction(course))
    },
    courseProjectListAction: (courseId, projectList) => {
      dispatch(courseProjectListAction(courseId,projectList));
    },
    courseAnnouncementListAction: (courseId, announcementList) => {
      dispatch(courseAnnouncementListAction(courseId,announcementList));
    }
});

export default withCookies(connect(mapStateToProps,mapDispatchToProps)(VisibleCoursePage));;