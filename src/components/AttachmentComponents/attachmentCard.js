import React from 'react';
import Card from "../CardComponents/card";
import PropTypes from 'prop-types';
import {AttachmentList} from './attachmentList';
import {Accordion,Header} from "semantic-ui-react";
import Folder from "./folder";

export const AttachmentCard = ({attachments,folders}) => {
    return(
        <Card
            title="Attachments"
            content={
                <div>
                    <AttachmentList attachments={attachments}/>
                    {
                        folders.map(folder=>(
                            <Folder key={folder.name} name={folder.name} attachments={folder.attachments}/>
                        ))
                    }
                </div>
            }
        />
    );
};


AttachmentCard.propTypes={
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
    }))
};

