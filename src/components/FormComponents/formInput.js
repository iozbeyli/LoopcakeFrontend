import React from 'react';
import {Form} from 'semantic-ui-react';
import PasswordMeter from './passwordMeter';
import PropTypes from 'prop-types';

class FormInput extends React.Component{


    constructor(props){
        super(props);
        this.state={
            value: ""
        };
    }

    handleChange=(e)=>{
        this.setState({
           value:e.target.value
        });
        this.props.onChange(e);
    };

    render(){
        return (
            <div>
            <br/>
                <Form.Input
                    label={this.props.label}
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}
                    type={this.props.type}
                    name={this.props.name}
                />
                {this.props.type === 'password' && this.props.withMeter && <PasswordMeter password={this.state.value}/>}
            </div>
        );
    }

};

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    withMeter: PropTypes.bool
};

FormInput.defaultProps = {
    withMeter: false
};

export default FormInput;