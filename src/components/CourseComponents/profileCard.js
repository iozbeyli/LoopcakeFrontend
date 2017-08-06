import React from 'react';
import Card from '../CardComponents/card';
import PropTypes from 'prop-types';
import {Header,Grid,Label} from 'semantic-ui-react'
import CourseHeader from '../CourseCardComponents/courseHeader';
export default class ProfileCard extends React.Component{
    render(){
        return(
            <Card
                title="Profile"
                content={
                    <CourseHeader course={this.props.course}/>
                }
            />
        );
    }
}

ProfileCard.propTypes = {
    course: PropTypes.object
}