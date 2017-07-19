import React from 'react';
import PropTypes from 'prop-types';
import { Tab,Menu } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Upload Attachment', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Create Folder', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
]

export default class AttachmentEditor extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<Tab panes={panes} />
			);
	}
}

AttachmentEditor.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        attachments: PropTypes.arrayOf(PropTypes.shape({
            fileType: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }))
    }))
}