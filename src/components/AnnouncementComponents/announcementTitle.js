import React from 'react';
import {Grid,Icon,Label} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class AnnouncementTitle extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <Grid>
            <Grid.Row>
            <Grid.Column width={8}>
            <Icon name='dropdown' />
            {this.props.title}
    </Grid.Column>
        <Grid.Column width={8} textAlign="right">
            {this.props.courseTitle && <Label color="yellow">{this.props.courseTitle}</Label>}
            <Label color="teal">{this.props.date}</Label>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        );
    }
}

AnnouncementTitle.propTypes = {
    title: PropTypes.string.isRequired,
    courseTitle: PropTypes.string,
    date: PropTypes.string.isRequired
};

export default AnnouncementTitle;