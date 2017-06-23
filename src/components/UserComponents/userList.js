import React from 'react';
import List from "../ListComponents/list";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const UserList = ({items}) => {

    let temp = [];
    items.map(item=>{
        temp.push({
            image: item.image,
            header: item.header,
            buttons:[{
                title: <Link to={"/app/student/"+item.header}>Go To Page</Link>,
                onClick: ()=>{}
            }]
        }) ;
    });

    return (
        <List items={temp}/>
    );
};

UserList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired
    }))
};