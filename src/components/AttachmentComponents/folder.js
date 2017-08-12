import React from 'react';
import PropTypes from 'prop-types';
import {Accordion,Icon} from 'semantic-ui-react';
import {AttachmentList} from './attachmentList';
export default class Folder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }

    handleClick = () => {
      this.setState({
          open: !this.state.open
      })
    };

    render(){
        const {name,attachments} = this.props;
        return(
            <Accordion onTitleClick={this.handleClick}>
                <Accordion.Title>
                    <Icon name={this.state.open ? 'folder open outline' : 'folder outline'} />
                    {name}
                </Accordion.Title>
                <Accordion.Content>
                    <AttachmentList notInteractable = {this.props.notInteractable} attachments={attachments}/>
                </Accordion.Content>
            </Accordion>
            );

    }
}

Folder.propTypes = {
    name: PropTypes.string.isRequired,
    attachments: PropTypes.arrayOf(PropTypes.shape({
        fileType: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
};