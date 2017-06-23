import React from 'react';
import {Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {AnnouncementModal} from "./announcementModal";

class AnnouncementContent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {content} = this.props;
        return(
            <Grid centered>
                <Grid.Column width={15}>
                    {content.substring(0,Math.min(140,content.length))+" "}
                    <AnnouncementModal content={content} trigger={<a>...more</a>}/>
                    <br/>
                </Grid.Column>
            </Grid>
        );
    }
}

AnnouncementContent.propTypes = {
    content: PropTypes.string.isRequired
};

export default AnnouncementContent;