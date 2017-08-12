import React from 'react';
import PropTypes from 'prop-types';
import Announcement from "./announcement";
import {Button} from "semantic-ui-react";
import Card from "../CardComponents/card";
import AnnouncementEdit from './announcementEdit';
class AnnouncementCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            actions: [],
            modalOpened: false
        }
    }

    setActions = (a) => {
        this.setState({
            actions:a
        });
    }

    closeModal = () => {
        this.setState={
            modalOpened: false
        }
    }

    render(){
        return(
            this.props.announcements ? <Card
                loading= {!this.props.announcements}
                icon='alarm'
                hidable={this.props.hidable}
                title="Announcements"
                content={this.props.announcements.map((announcement)=>(
                    <Announcement
                        key={announcement.title+announcement.date+announcement.content}
                        title={announcement.title}
                        courseTitle={announcement.courseName}
                        date={announcement.date}
                        content={announcement.content}/>

                ))}
                editable={this.props.editable && <AnnouncementEdit createAnnouncement={this.props.functions.createAnnouncement} setActions={this.setActions}/>}
            /> : 
            <Card 
            loading
            title="Announcements"
            icon='alarm' />
            
        );
    }
}

AnnouncementCard.propTypes = {
    announcements: PropTypes.arrayOf(PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            course: PropTypes.string,
            date: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            courseName: PropTypes.string
        }
    )),
    editable: PropTypes.bool,
    hidable: PropTypes.bool,
    functions: PropTypes.object
};

export default AnnouncementCard;