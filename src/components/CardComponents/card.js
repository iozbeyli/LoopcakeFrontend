import React from 'react';
import {Card, Button, Grid, Label, Icon, Modal} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {CardModal} from "./cardModal";

class _Card extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {title,content,editable} = this.props;
        console.log("editable");
        console.log(editable);
        return(
            <Card fluid>
                {title&&<Button color="blue">{title}</Button>}
                <Card.Content>
                    {content}
                    {editable && <br/>}
                    {editable && <CardModal title={editable.title} icon={editable.icon} content={editable.content} actions={editable.actions}/>}
                    {editable && <CardModal title={editable.title} icon={editable.icon} content={editable.content} actions={editable.actions}/>}
                </Card.Content>
            </Card>
        );
    }
}

_Card.propTypes={
    title: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    editable: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]).isRequired,
        actions: PropTypes.arrayOf(PropTypes.element)
    })
};

export default _Card;