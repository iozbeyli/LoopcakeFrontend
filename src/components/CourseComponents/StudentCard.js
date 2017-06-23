import React from 'react';
import PropTypes from 'prop-types';
import Card from '../CardComponents/card';

import {UserList} from '../UserComponents/userList';

export const StudentCard = ({items}) => {

    return (
        <Card
            title="Students"
            content={<UserList items={items}/>}
            editable={{
                content:<a>fasd</a>,
                icon:'add square',
                title: 'Add Student'
            }}
        />
    );
}



StudentCard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired
  }))
};