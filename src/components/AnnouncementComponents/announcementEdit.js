import React from 'react';
import {Form,TextArea,Input,Button} from 'semantic-ui-react';
import {placeholders} from '../../constants';
import PropTypes from 'prop-types';
export default class AnnouncementEdit extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            formData:{
                title: '',
                content: ''
            }
        }
    }

    componentDidMount(){
        this.props.setActions([
            <Button color="teal" key="Send" onClick={this.sendData}>Send</Button>
        ])
    }

    sendData = () => {
        let handleResult = (result) => {
           console.log(result);
        };
        this.props.createAnnouncement(this.state.formData.title,this.state.formData.content,handleResult);
    }

    handleTitleChange = (e) => {
        this.setState({
            formData: {...this.state.formData,title: e.target.value}
        });
    }

    handleContentChange=(e)=>{
        this.setState({
            formData: {...this.state.formData,content: e.target.value}
        });
    }

    render(){
        return(
            <Form>
                <Form.Field inline>
                    <label>Title</label>
                    <Input name="title" value={this.state.formData.title} onChange={this.handleTitleChange} fluid placeholder='Title' />
                </Form.Field>
                <Form.Field inline>
                    <label>Content</label>
                    <TextArea name="content" value={this.state.formData.content} onChange={this.handleContentChange} autoHeight placeholder='Add Content Here' style={{ minHeight: 100 }} />
                </Form.Field>
            </Form>
        );
    }
}

AnnouncementEdit.propTypes = {
    setActions: PropTypes.func,
    createAnnouncement: PropTypes.func,
    closeModal: PropTypes.func
}