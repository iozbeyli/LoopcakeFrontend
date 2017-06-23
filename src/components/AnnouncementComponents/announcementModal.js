import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'semantic-ui-react';

export const AnnouncementModal = ({content,trigger}) => (
    <Modal trigger={trigger}>
        <Modal.Content>
            <p>
                {content}
            </p>
        </Modal.Content>
    </Modal>
);

AnnouncementModal.propTypes = {
    content: PropTypes.string.isRequired,
    trigger: PropTypes.element.isRequired
};

