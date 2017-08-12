import React from 'react';
import {Form,TextArea,Input,Button} from 'semantic-ui-react';
import {placeholders} from '../../constants';
import PropTypes from 'prop-types';
import {CardModal} from '../CardComponents/cardModal';
export default class AnnouncementEdit extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            formData:{
                title: '',
                content: ''
            },
            modalOpened: false,
            actions: [
                <Button color="teal" key="Send" onClick={this.sendData}>Send</Button>
            ]
        }
    }

    closeModal = () => {
        this.setState({
            modalOpened:false
        })
    }

    openModal = () => {
        this.setState({
            modalOpened: true
        })
    }


    sendData = () => {
        let handleResult = (result) => {
           console.log(result);
           this.closeModal();
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

    _renderForm=()=>(
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

    render(){
        return(
            <CardModal
                icon="announcement"
                title="Make Announcement"
                content={this._renderForm()}
                handleModal= {{
                    opened: this.state.modalOpened,
                    closeFunc: this.closeModal,
                    openFunc: this.openModal
                }}
                actions= {this.state.actions}
            />
            
        );
    }
}

AnnouncementEdit.propTypes = {
    setActions: PropTypes.func,
    createAnnouncement: PropTypes.func,
    closeModal: PropTypes.func
}