import React from 'react';
import PropTypes from 'prop-types';
import LinkMenuItem from './linkMenuItem';
import ButtonMenuItem from './buttonMenuItem';
import SubMenuItem from './subMenuItem';

class MenuItem extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        let type=this.props.type;
        let properties=this.props.properties;
        return(
            <div>

                {type==='button'&&<ButtonMenuItem {...properties}/>}
                {type==='subMenu'&&<SubMenuItem  {...properties}/>}
                {type==='link'&&<LinkMenuItem  {...properties }/>}

            </div>

        );
    }

};

MenuItem.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    properties: PropTypes.object.isRequired
};

export default MenuItem;