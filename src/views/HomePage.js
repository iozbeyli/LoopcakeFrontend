import React from 'react';
import PropTypes from 'prop-types';
import CourseCard from '../components/CourseCardComponents/courseCard';
import {Grid} from 'semantic-ui-react';

export default class Home extends React.Component{

	_renderCourses() {
		if (!this.props.courses) {
			return null;
		}
		return this.props.courses.map(course => (
			<Grid.Column key={course.course._id} width={5}>
				<CourseCard data={course}/>
			</Grid.Column>
		))
	}

    render(){
		console.log("Home Page",this.props);
      return(
      	<Grid>
      		{this._renderCourses()}
      	</Grid>
      );
    };
}


Home.propTypes={
	courses: PropTypes.arrayOf(PropTypes.shape({
		announcements: PropTypes.array,
		calender: PropTypes.array,
		course: PropTypes.object,
		grades: PropTypes.array,
		myGroups: PropTypes.array,
		projects: PropTypes.array
	}))
};