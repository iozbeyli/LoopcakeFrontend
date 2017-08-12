import React from 'react';
import {Menu,Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';

class _Menu extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Menu {...this.props.props}>
                <Menu.Item>
                    <Image centered height={50} size="small" src={require('../../../static/images/loopcakeWhiteLogoWithText.svg')}></Image>
                </Menu.Item>
                {this.props.items.map(item=>{
                    return (
                        <MenuItem
                            key={item.name}
                            type={item.type}
                            name={item.name}
                            properties={item.properties}/>

                    )
                }
                )}
            </Menu>
        );
    };

};


_Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        properties: PropTypes.object.isRequired
    })).isRequired,

};

export default _Menu;
