import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'semantic-ui-react';

import {ListItem} from './listItem';

class _List extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <List>
                {this.props.items.map((item)=>(
                    <ListItem key={item.header} {...item}/>
                ))}
            </List>
        );
    }
}

_List.propTypes={
    item: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        image: PropTypes.string,
        header: PropTypes.string.isRequired,
        description: PropTypes.string,
        buttons:
            PropTypes.oneOfType([
                PropTypes.shape({
                    title: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.element
                    ]).isRequired,
                    onClick: PropTypes.func.isRequired
                }),
                PropTypes.arrayOf(
                    PropTypes.shape({
                    title: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.element
                    ]).isRequired,
                    onClick: PropTypes.func.isRequired
                }))
            ])

    }))

};

export default _List;