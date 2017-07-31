import React from 'react';
import {Card,Grid,Image} from 'semantic-ui-react';
import AnnouncementCard from "../AnnouncementComponents/announcementCard";
import {placeholders} from '../../constants';
import CalendarCard from '../CalendarComponents/calendarCard';
import {ProjectCard} from '../CourseComponents/ProjectCard';
import GradeCard from '../CourseCardComponents/gradeCard';

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
      			<Grid>
        			<Grid.Column width={5}>
          				<Image shape="circular" src={placeholders.instructorPhoto} />
        			</Grid.Column>
        			<Grid.Column width={11}>
          				<Card.Header>
        					Matthew
      					</Card.Header>
      					<Card.Meta>
        					<span className='date'>
          						Joined in 2015
        					</span>
      					</Card.Meta>
      					<Card.Description>
        					Matthew is a musician living in Nashville.
      					</Card.Description>
        			</Grid.Column>
      			</Grid>
      		</Card.Content>
      		<Card.Content extra>
      			<AnnouncementCard announcements={announcementList}/>
      		</Card.Content>
      		<Card.Content extra>
      			<CalendarCard />
      		</Card.Content>
      		<Card.Content extra>
      			<ProjectCard items={[{header:'Writing Scheme Using Scheme', progressPercent: 0}]}/>
      		</Card.Content>
      		<Card.Content extra>
      			<GradeCard />
      		</Card.Content>
		</Card>
		);
	}
}