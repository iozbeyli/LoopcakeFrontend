import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Home} from '../../views';
import {} from '../../actions/authentication';
import { withCookies, Cookies } from 'react-cookie';
import { getAttendedCourses,getCourseSummary } from '../../database/course'
import PropTypes from 'prop-types';
import {courseSummaryAction} from '../../actions/course';

class _VisibleHomePage extends Component {
   
    

    componentWillMount() {
      console.log("Props: ", this.props);
      let handleResponse = (err,resp) => {
        if(err){
          console.log(err);
        }else{
          console.log(resp);
          let courses = [];
          resp.body.data.forEach(element=> {
            let handleCourseResponse = (err,resp)=>{
              if(err){

              }else{
                console.log("Course",resp);
                this.props.courseSummaryAction(resp.body.data);
              }
            }
            getCourseSummary(element._id,this.props.user.token,handleCourseResponse);
          }, this); 
          
        }
      }
      getAttendedCourses(this.props.user.user._id,this.props.user.token,handleResponse);
    }

    render() {
       return this.props.course ? <Home courses={Object.keys(this.props.course).map(k=>this.props.course[k])}/> : null
    }
}

const mapStateToProps = (state) =>({
  ...state,
  getAttendedCourses
});

const mapDispatchToProps = (dispatch) =>({
    courseSummaryAction: (course) => {
    	console.log("Course Action");
    	dispatch(courseSummaryAction(course))
    }
});

const VisibleHomePage = withCookies(connect(mapStateToProps,mapDispatchToProps)(_VisibleHomePage));

export default VisibleHomePage;