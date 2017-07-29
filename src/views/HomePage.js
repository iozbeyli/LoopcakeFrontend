import React from 'react';
import CourseCard from '../components/CourseCardComponents/courseCard';
import {Grid} from 'semantic-ui-react';

export default class Home extends React.Component{
    render(){
      return(
      	<Grid>
      		<Grid.Column width={5}>
      			<CourseCard/>
      		</Grid.Column>
      		<Grid.Column width={5}>
      			<CourseCard/>
      		</Grid.Column>
      		<Grid.Column width={5}>
      			<CourseCard/>
      		</Grid.Column>
      	</Grid>
        
      );
    };

}