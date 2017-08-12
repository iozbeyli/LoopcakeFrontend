import React from 'react';
import Card from "../CardComponents/card";
import PropTypes from 'prop-types';
import {AttachmentList} from '../AttachmentComponents/attachmentList';
import {Accordion,Header} from "semantic-ui-react";
import Folder from "../AttachmentComponents/folder";
import AttachmentEditor from '../AttachmentComponents/attachment';

export default class RepoCard extends React.Component {
//({attachments,folders,hidable}) => {
    render() {
        const {hidable, folders, attachments} = this.props;
        return(
            <Card
                hidable={hidable}
                title="File Tree"
                content={
                    <div>
                        <AttachmentList notInteractable attachments={attachments}/>
                        {
                            folders.map(folder=>(
                                <Folder notInteractable key={folder.name} name={folder.name} attachments={folder.attachments}/>
                            ))
                        }
                    </div>
                }
            />
        );
    }
};


RepoCard.propTypes={
    attachments: PropTypes.arrayOf(PropTypes.shape({
        fileType: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })),
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        attachments: PropTypes.arrayOf(PropTypes.shape({
            fileType: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }))
    })),
    hidable: PropTypes.bool
};

