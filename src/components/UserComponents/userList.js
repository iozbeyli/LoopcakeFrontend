import React from 'react';
import List from "../ListComponents/list";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const UserList = ({items}) => {

    let temp = [];
    items.map(item=>{
        let header = item.name+" "+item.surname;
        temp.push({
            image: item.image,
            header: header,
            buttons:[{
                title: <Link to={"/app/student/"+header}>Go To Page</Link>,
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
        _id: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
        surname: PropTypes.string
    }))
};