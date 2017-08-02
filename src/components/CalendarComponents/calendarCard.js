import React from 'react';
import {List} from '../ListComponents';
import Card from '../CardComponents/card';
export default class CalendarCard extends React.Component{
	static data = [
		{header: 'Midterm', description: '17.07.2017', buttons: [{title:"View", onClick: ()=>console.warn('clicked')}]},
		{header: 'Project', description: '16.07.2017', buttons: [{title:"View", onClick: ()=>console.log('clicked')}]},
		{header: 'E-Tutor', description: '14.07.2017', buttons: [{title:"View", onClick: ()=>console.log('clicked')}]},
	]

	render(){
		return(
			<Card 
				hidable={this.props.hidable}
				title="Calendar"
				content={(<List items = {CalendarCard.data} />)}
			/>
		)
	}
}