import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import {colors} from '../../constants';
export default class LinkMenuItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Menu.Item>
                <Link style={{color: colors.linkColor}} to={this.props.destination}>{this.props.title}</Link>
            </Menu.Item>
        );
    }
}

LinkMenuItem.propTypes = {
    destination: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
