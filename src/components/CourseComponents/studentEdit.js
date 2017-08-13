import React, { Component } from 'react';
import {Form,TextArea,Message,Button} from 'semantic-ui-react';
import {CardModal} from '../CardComponents/cardModal';
export default class  extends Component {

    constructor(props){
        super(props);
        this.state={
            emails: [],
            visibleEmails: [],
            modalOpened: false,
            messageOpened: false,
            failedEmails: []
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

    handleSubmit = () => {
        
        let failedEmails = [];
        let validateEmail = (email)=> {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        this.state.emails.map(e=>{
            let email = e.trim();
            if(!validateEmail(email)){
                failedEmails.push(email);
            }
        });
        if(failedEmails.length===0){
            console.log("success",this.state.emails);
            this.setState({
                messageOpened:false
            })
        }else{
            this.setState({
                messageOpened:true,
                failedEmails: failedEmails
            })
        }
    }

    handleChange = (e) => {
        let currentEmails = e.target.value;
        let splited = currentEmails.split(",");
        splited = splited.map(email => email.trim());
        this.setState({
            visibleEmails: currentEmails,
            emails: splited
        });
    }

    _renderForm = () => (
        <div>
        <Form>
            <Form.Field inline>
                <label>Student Emails (Comma separated)</label>
                <TextArea name="emails" value={this.state.visibleEmails} onChange={this.handleChange} autoHeight placeholder='Add Student Emails' style={{ minHeight: 100 }} />
            </Form.Field>
        </Form>
        {this.state.messageOpened&&<Message
            color="red"
            icon='warning'
            header='Invalid Emails'
            content={this.state.failedEmails}
        />}
        <Button onClick={this.handleSubmit}>Submit</Button>
        </div>
    );

    render () {
        return (
            <CardModal
            icon="user"
            title="Add Student"
            content={this._renderForm()}
            handleModal= {{
                opened: this.state.modalOpened,
                closeFunc: this.closeModal,
                openFunc: this.openModal
            }}
        />
            
        );
    }
}