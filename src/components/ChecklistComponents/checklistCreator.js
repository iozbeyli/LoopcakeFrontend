import React from 'react';
import PropTypes from 'prop-types';
import {Form,Container,Button} from 'semantic-ui-react';

import ChecklistForm from './checklistForm';
export default class ChecklistCreator extends React.Component{
	constructor(props){
		super(props);
		this.state={

		};
		
	}

	componentWillMount(){
		if(this.props.setActions){
			this.props.setActions([
					<Button key="Cancel">Cancel</Button>,
					<Button key="Save">Save</Button>
				]);
		};
	}

	handleSubmit = (formData) => {

	}

	render(){

		return(
			<ChecklistForm checkpoints={this.props.checkpoints}/>
			);
		
	}
}

ChecklistCreator.propTypes = {
	checkpoints: PropTypes.arrayOf(PropTypes.shape({
      point: PropTypes.number,
      status: PropTypes.bool,
      label: PropTypes.string
    })),
    setActions: PropTypes.func
}