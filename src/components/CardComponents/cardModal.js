import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Label, Modal,Header,Tab} from "semantic-ui-react";

const panes = [
  { menuItem: 'Upload Attachment'},
  { menuItem: 'Create Folder'},
]

export const CardModal = ({icon,title,content,actions}) =>{console.log("Actions"); console.log(actions); return(
    <Modal trigger={<Label color="red" attached='bottom right'><Icon name={icon}/>{title}</Label>}>
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
);}

CardModal.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]
    ).isRequired,
    actions: PropTypes.arrayOf(PropTypes.element)
}