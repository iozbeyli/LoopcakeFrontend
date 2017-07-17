import React from 'react';
import {Form,Input,Button,Grid,Container,Label} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class ChecklistFormInput extends React.Component{
	constructor(props){
		super(props);
	}

	handleDelete = (e) => {
		e.preventDefault();
		this.props.onDelete(this.props.label);
	}

	render(){
		return(
				<Form.Group widths='equal'>
      				<Form.Field>
        				<Input  label={<Label color="blue">Label</Label>} placeholder={this.props.label} />
      				</Form.Field>
      				<Form.Field>
       				 	<Input label={<Label color="blue">Points</Label>} placeholder={this.props.point} />
      				</Form.Field>
      				<Button color="red" onClick={this.handleDelete}>Delete</Button>
    			</Form.Group>
    					
			);
	}
}

ChecklistFormInput.propTypes = {
	label: PropTypes.string,
	point: PropTypes.number,
	onDelete: PropTypes.func
}