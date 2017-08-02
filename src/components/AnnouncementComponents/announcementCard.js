import React from 'react';
import PropTypes from 'prop-types';
import Announcement from "./announcement";
import {Button} from "semantic-ui-react";
import Card from "../CardComponents/card";

class AnnouncementCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card
                hidable={this.props.hidable}
                title="Announcements"
                content={this.props.announcements.map((announcement)=>(
                    <Announcement
                        key={announcement.title+announcement.date+announcement.content}
                        title={announcement.title}
                        courseTitle={announcement.courseTitle}
                        date={announcement.date}
                        content={announcement.content}/>

                ))}
                editable={this.props.editable &&
                    {
                        content: <Button>Edit</Button>,
                        title: 'Make Announcement',
                        icon: 'announcement'
                    }
                }
            />
        );
    }
}

AnnouncementCard.propTypes = {
    announcements: PropTypes.arrayOf(PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            courseTitle: PropTypes.string,
            date: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }
    )).isRequired,
    editable: PropTypes.bool,
    hidable: PropTypes.bool
};

export default AnnouncementCard;