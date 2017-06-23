/**
 * Created by Melih on 13.06.2017.
 */
import React from 'react';
import PropTypes,{instanceOf} from 'prop-types';
import {Menu} from 'semantic-ui-react';
import SubMenu from './subMenu';

class SubMenuItem extends React.Component{
    constructor(props) {
        super(props);
        console.log("subMenu",props);
    }
    render(){
        return(
            <Menu.Item>
                <Menu.Header onClick={this.props.onClick}>{this.props.header}</Menu.Header>
                <SubMenu items={this.props.items}/>
            </Menu.Item>
        );
    }
}

SubMenuItem.propTypes = {
    header: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    onClick: PropTypes.func,
    items: PropTypes.array.isRequired
};

export default SubMenuItem;