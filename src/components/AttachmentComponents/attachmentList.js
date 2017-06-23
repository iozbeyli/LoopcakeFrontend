import React from 'react';
import PropTypes from 'prop-types';
import List from "../ListComponents/list";

export const AttachmentList = ({attachments}) => {

    let findFileIcon=(fileType)=>{
        if(fileType==='pdf'){
            return 'file pdf outline';
        }else{
            return 'file outline';
        }
    }
    let temp = [];
    attachments.map(attachment=>{

        temp.push({
            icon: findFileIcon(attachment.fileType),
            header: attachment.name,
            buttons:[
                {
                title: 'Download',
                onClick: ()=>{}
                },
                {
                    title: 'View',
                    onClick: ()=>{}
                }
            ]
        })
    });

    return (
        <List items={temp}/>
    );

};

AttachmentList.propTypes={
  attachments: PropTypes.arrayOf(PropTypes.shape({
      fileType: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
  }))
};