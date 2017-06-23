import React from 'react';
import PropTypes from 'prop-types';
import {Accordion,List,Label,Modal,Button,Icon,Segment,Container,Grid} from 'semantic-ui-react'
import AnnouncementContent from "./announcementContent";
import AnnouncementTitle from './announcementTitle';
class Announcement extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
         return(
            <Accordion>
                <Accordion.Title>
                    <AnnouncementTitle title={this.props.title} courseTitle={this.props.courseTitle} date={this.props.date} />
                </Accordion.Title>
                <Accordion.Content>
                    <AnnouncementContent content={this.props.content}/>
                </Accordion.Content>
            </Accordion>
        );
    }


}

Announcement.propTypes = {
    title: PropTypes.string.isRequired,
    courseTitle: PropTypes.string,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Announcement;