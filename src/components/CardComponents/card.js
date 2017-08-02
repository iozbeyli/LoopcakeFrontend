import React from 'react';
import {Card, Button, Grid, Label, Icon, Modal} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {CardModal} from "./cardModal";

class _Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {hidden: props.hidable};
    }

    _renderContent() {
        if (this.state.hidden) {
            return null;
        }
        const {title,content,editable} = this.props;
        return (
            <Card.Content>
                {content}
                {editable && <br/>}
                {editable && <CardModal title={editable.title} icon={editable.icon} content={editable.content} actions={editable.actions}/>}
                {editable && <CardModal title={editable.title} icon={editable.icon} content={editable.content} actions={editable.actions}/>}
            </Card.Content>
        )
    }

    _handleClick = () => {
        this.setState({...this.state, hidden:!this.state.hidden})
    }

    _renderHidableOptionSelectorLabelWithIcon() {
        if (!this.props.hidable) {
            return null;
        }
        return (
            <Label onClick={this._handleClick} as='a' color="blue" attached='top right'>
                <Icon name={this.state.hidden ? 'triangle right': 'dropdown'}/>
            </Label>
        );
    }
    render(){
        const {title,content,editable} = this.props;
        return(
            <Card fluid>
                {title&&<Button color="blue">{title}</Button>}
                {this._renderHidableOptionSelectorLabelWithIcon()}
                {this._renderContent()}
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
    }),
    hidable: PropTypes.bool,
};

export default _Card;