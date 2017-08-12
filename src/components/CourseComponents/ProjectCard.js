import React from 'react';
import PropTypes from 'prop-types';
import {List} from '../ListComponents';
import Card from '../CardComponents/card';
import {Link} from 'react-router-dom';
import {Progress} from 'semantic-ui-react';
export const ProjectCard = ({items, isEditable, hidable}) => {

    let temp = [];
    if(items){
        items.map(item=>{
        temp.push({
            header: item.name,
            buttons:[{
                title: <Link to={"/project/"+item.name}>Go To Page</Link>,
                onClick: ()=>{}
            }],
            extra: <Progress color="yellow" percent={30} size="small"/>
        }) ;
        });
    }
    

  return(
      items ?
      <Card
        icon="coffee"
        title="Project List"
        content={<List items={temp}/>}
        /*editable={isEditable && {
             icon:'add square',
             title: 'Create Project',
             content: <a>aasdf</a>
         }}*/
        hidable={hidable}
      /> : <Card loading icon="coffee" title="Project List"/>
  );
};


ProjectCard.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        progressPercent: PropTypes.number
    })),
    isEditable: PropTypes.bool,
    hidable: PropTypes.bool
};
