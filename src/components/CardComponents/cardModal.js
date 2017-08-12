import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Label, Modal,Header,Tab,Button} from "semantic-ui-react";

const panes = [
  { menuItem: 'Upload Attachment'},
  { menuItem: 'Create Folder'},
]

export class CardModal extends React.Component{

    render(){
        let {icon,title,content,actions} = this.props;
        return(
            <Modal  
                trigger={<Label onClick={this.props.handleModal.openFunc} color="red" attached='bottom right'><Icon name={icon}/>{title}</Label>}
                open={this.props.handleModal.opened}
                onClose={this.props.handleModal.closeFunc}
                >
                <Modal.Header>
                    <Header icon={icon} content={title} />
                </Modal.Header>
                <Modal.Content>
                    {content}
                </Modal.Content>
                <Modal.Actions>
                    {actions}
                </Modal.Actions>
            </Modal>
)
    }
}


CardModal.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]
    ),
    actions: PropTypes.arrayOf(PropTypes.element),
    handleModal: PropTypes.shape({
        closeFunc: PropTypes.func,
        opened: PropTypes.bool,
        openFunc: PropTypes.func
    })
}