import React from 'react';
import {Card,Grid,Image} from 'semantic-ui-react';
import AnnouncementCard from "../AnnouncementComponents/announcementCard";
import {placeholders} from '../../constants';
import CalendarCard from '../CalendarComponents/calendarCard';
import {ProjectCard} from '../CourseComponents/ProjectCard';
import GradeCard from '../CourseCardComponents/gradeCard';
import PropTypes from 'prop-types';
import CourseHeader from './courseHeader'

export default class CourseCard extends React.Component{

	
	render(){
		const announcementList = [
            {title: "Loopcake",date:"Yesterday",content:"Awesome"},
            {title: "Loopcak",date:"Yesterday",content:"Awesome"},
            {title: "Loopca",date:"Yesterday",content:"Awesome"}
        ];
		return(
		<Card fluid>
    		<Card.Content>
      			<CourseHeader course={this.props.data.course}/>
      		</Card.Content>
      		<Card.Content extra>
      			<AnnouncementCard hidable announcements={this.props.data.announcements}/>
      		</Card.Content>
      		<Card.Content extra>
      			<CalendarCard hidable/>
      		</Card.Content>
      		<Card.Content extra>
      			<ProjectCard hidable items={this.props.data.projects/*[{header:'Writing Scheme Using Scheme', progressPercent: 0}]*/}/>
      		</Card.Content>
      		<Card.Content extra>
      			<GradeCard hidable/>
      		</Card.Content>
		</Card>
		);
	}
}

CourseCard.propTypes = {
	data: PropTypes.shape({
		course: PropTypes.shape({
			_id: PropTypes.string,
			name: PropTypes.string,
			abbreviation: PropTypes.string,
			code: PropTypes.string,
			details: PropTypes.shape({
				year: PropTypes.string,
				_id: PropTypes.string,
				relatedCourses: PropTypes.array,
				programmingLanguages: PropTypes.array,
				sections: PropTypes.array
			}),
			attachments: PropTypes.array,
			instructors: PropTypes.arrayOf(PropTypes.shape(
				{
					_id: PropTypes.string,
					email: PropTypes.string,
					name: PropTypes.string,
					surname: PropTypes.string,
					photo: PropTypes.string
				}
			))
		}),
		announcements: PropTypes.array,
		calender: PropTypes.array,
		grades: PropTypes.array,
		myGroups: PropTypes.array,
		projects: PropTypes.array
	})
};
