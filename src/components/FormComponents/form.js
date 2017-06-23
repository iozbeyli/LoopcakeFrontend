import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import FormField from './formInput';
import PropTypes from 'prop-types';
class LCForm extends React.Component{
    static propTypes = {
        formData: PropTypes.array.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {};

    };

    componentDidMount(){
        this.initializeState(this.props);
    }

    initializeState=(props)=>{
        let temp={};
        props.formData.map((data)=>{
           temp[data.name] = ""
        });
        this.setState({
           values: temp
        });
    };

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let temp = this.state.values;
        temp[name] = value;
        this.setState({
           temp
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.values);
    };
    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.props.formData.map((props)=>{
                    return(
                        <FormField key={props.name} {...props} onChange={this.handleChange}/>
                    );
                })}
                <br/>
                <Button type='submit'>Submit</Button>
            </Form>
        );
    };

};

export default LCForm;