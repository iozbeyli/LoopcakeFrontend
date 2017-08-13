import React from 'react';
import PropTypes from 'prop-types';
import Card from '../CardComponents/card';
import StudentEdit from './studentEdit';
import {UserList} from '../UserComponents/userList';

export const StudentCard = ({students,hidable}) => {
    
    return (
        students ? <Card
            hidable= {hidable}
            icon="student"
            title="Students"
            content={<UserList items={students}/>}
            editable={<StudentEdit/>}
        /> : <Card loading icon="student" title="Students"/>
    );
}




StudentCard.propTypes = {
    hidable: PropTypes.bool,
    students: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
        surname: PropTypes.string
    }))
};