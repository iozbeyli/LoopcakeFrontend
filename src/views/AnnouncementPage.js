import React from 'react';
import AnnouncementCard from '../components/AnnouncementComponents/announcementCard';

class AnnouncementPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            announcements: [
                {title: "Loopcake",courseTitle:"Computer Design",date:"Yesterday",content:"Awesome"},
                {title: "Loopcak",courseTitle:"Computer Design",date:"Yesterday",content:"Awesome"},
                {title: "Loopca",courseTitle:"Computer Design",date:"Yesterday",content:"Awesome"}
            ]
        }
    }

    render(){
        return(
            <AnnouncementCard announcements={this.state.announcements}/>
        );
    }

}

export default AnnouncementPage;

