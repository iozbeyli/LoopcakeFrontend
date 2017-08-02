import React from 'react';
import PropTypes from 'prop-types';
import {List} from '../ListComponents';
import Card from '../CardComponents/card';
import {Link} from 'react-router-dom';
import {Progress} from 'semantic-ui-react';
export const ProjectCard = ({items, isEditable, hidable}) => {

    let temp = [];
    items.map(item=>{
        temp.push({
            header: item.header,
            buttons:[{
                title: <Link to={"/app/student/"+item.header}>Go To Page</Link>,
                onClick: ()=>{}
            }],
            extra: <Progress color="yellow" percent={item.progressPercent} size="small"/>
        }) ;
    });

  return(
      <Card
        icon="coffee"
        title="Project List"
        content={<List items={temp}/>}
        editable={isEditable && {
             icon:'add square',
             title: 'Create Project',
             content: <a>aasdf</a>
         }}
        hidable={hidable}
      />
  );
};


ProjectCard.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,
        progressPercent: PropTypes.number.isRequired
    })),
    isEditable: PropTypes.bool,
    hidable: PropTypes.bool
};
