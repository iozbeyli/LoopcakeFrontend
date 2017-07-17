import React from 'react';
import PropTypes from 'prop-types';
import {Form,Container} from 'semantic-ui-react';
import ChecklistFormInput from './checklistFormInput';
export default class ChecklistForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			checkpoints:props.checkpoints
		}
	}

	handleDelete = (label) => {
		console.log(label);
		let checks =this.state.checkpoints;
		let index = -1;
		let found = false;
		for(let check of checks){
			index++;
			if(check.label===label){
				found=true;
				break;
			};
		}
		if (found) {
    		checks.splice(index, 1);
		}
		this.setState({
			checkpoints: checks
		})
		console.log(checks);
	};

	render(){
		return(
			<Container textAlign="center">
				<Form>
					{this.state.checkpoints.map(check=>(
							<ChecklistFormInput key={check.label} label={check.label} point={check.point} onDelete={this.handleDelete}/>    
						))}
            	</Form>
            </Container>
			);
	}
}

ChecklistForm.propTypes = {
	checkpoints: PropTypes.arrayOf(PropTypes.shape({
      point: PropTypes.number,
      status: PropTypes.bool,
      label: PropTypes.string
    }))
}