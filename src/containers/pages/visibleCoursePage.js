import React, { Component } from 'react'
import { connect } from 'react-redux';
import {CoursePage} from '../../views';
import {} from '../../actions/authentication';
import { withCookies, Cookies } from 'react-cookie';
import { getCourse ,getCourseProjectList,getCourseAnnouncementList} from '../../database/course'
import {getImageSource} from '../../database/user';
import PropTypes from 'prop-types';
import {courseAction,courseProjectListAction,courseAnnouncementListAction} from '../../actions/course';
import {placeholders} from '../../constants';
import {createAnnouncementFunction} from '../../functions/course';

class VisibleCoursePage extends Component {
   constructor(props){
      super(props);
      this.state={
        profilePhoto: null
      }
   }

   _prepareFunctions = () => {
     return {
       createAnnouncement: this.props.createAnnouncement(placeholders.courseId,this.props.user.token)
     }
    
   }
  
    _getProjectList =()=>{
      let handleResponse = (err,resp) => {
        if(err){
          console.log(err);
        }else{
          console.log("Project List",resp);
          this.props.courseProjectListAction(placeholders.courseId,resp.body.data);
        }
      }
      getCourseProjectList(placeholders.courseId,this.props.user.token,handleResponse);
    }

    _getAnnouncementList = ()=>{
      let handleResponse = (err,resp) => {
        if(err){
          console.log(err);
        }else{
          console.log("Announcement List",resp);
          this.props.courseAnnouncementListAction(placeholders.courseId,resp.body.data);
        }
      }
      getCourseAnnouncementList(placeholders.courseId,this.props.user.token,handleResponse);
    }

    componentWillMount() {
      console.log("Props: ", this.props);
      let handleResponse = (err,resp) => {
        if(err){
          console.log(err);
        }else{
          console.log(resp);
          this.props.courseAction(resp.body.data);
          let handleImageResponse = (img) => {
            this.setState({
              profilePhoto: img
            })
          };
          getImageSource(resp.body.data.instructors[0].photo,this.props.user.token,handleImageResponse);
          this._getProjectList();
          this._getAnnouncementList();
        }
      }
      getCourse(placeholders.courseId,this.props.user.token,handleResponse);
    }

    render() {
      let coursePage = <CoursePage image={this.state.profilePhoto} data={{...this.props.course[placeholders.courseId]}} functions={this._prepareFunctions()}/>;
       return this.props.course && this.props.course[placeholders.courseId] ? coursePage : null
    }

}

const mapStateToProps = (state) =>({
  ...state
});

const mapDispatchToProps = (dispatch) =>({
    createAnnouncement: (courseId,token)=>{
      return createAnnouncementFunction(courseId,token,dispatch);
    },
    courseAction: (course) => {
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