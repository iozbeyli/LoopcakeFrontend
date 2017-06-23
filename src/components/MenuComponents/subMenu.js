import React from 'react';
import {Menu} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class SubMenu extends React.Component{
    render(){
        return(
            <Menu.Menu>
                {this.props.items.map(item=>(<Menu.Item key={item.name} name={item.name}>{item.element}</Menu.Item>))}
            </Menu.Menu>
        );
    }
}


SubMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        element: PropTypes.element
    })).isRequired
};
