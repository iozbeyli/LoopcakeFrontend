import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Label, Modal} from "semantic-ui-react";

export const CardModal = ({icon,title,content}) => (
    <Modal trigger={<Label color="red" attached='bottom right'><Icon name={icon}/>{title}</Label>}>
        <Modal.Content>
            {content}
        </Modal.Content>
    </Modal>
);

CardModal.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]
    ).isRequired
}