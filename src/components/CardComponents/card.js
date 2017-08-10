import React from 'react';
import {Card, Button, Grid, Label, Icon, Modal,Dimmer,Loader,Segment,Image} from 'semantic-ui-react';
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
                {editable}
            </Card.Content>
        )
    }

    _renderLoader(){
        return(
            <Card.Content>
                <Dimmer.Dimmable dimmed={true}>
                    <Dimmer active={true} inverted>
                        <Loader size="small">Loading</Loader>
                    </Dimmer>
                    <br/>
                    <br/>
                    <br/>
                </Dimmer.Dimmable>
            </Card.Content>
        );
    }

    _handleClick = () => {
        this.setState({hidden:!this.state.hidden})
    }

    _renderHidableOptionSelectorLabelWithIcon() {
        if (!this.props.hidable) {
            return null;
        }
        return (
            <Label size="large" onClick={this._handleClick} as='a' color="blue" attached='top right'>
                <Icon name={this.state.hidden ? 'triangle right': 'dropdown'}/>
            </Label>
        );
    }

    _renderRightIcon() {
        return (
            <Label size="large" color="blue" attached='top left'>
                <Icon name={this.props.icon}/>
            </Label>
        );
    }

    render(){
        const {title,content,editable,icon,loading} = this.props;
        return(
            <Card fluid>
                {title&&<Button color="blue">{title}</Button>}
                {icon&&this._renderRightIcon()}
                {this._renderHidableOptionSelectorLabelWithIcon()}
                {loading ? this._renderLoader() : this._renderContent()}
            </Card>
        );
    }
}

_Card.propTypes={
    title: PropTypes.string,
    icon: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    editable: PropTypes.element,
    hidable: PropTypes.bool,
    loading: PropTypes.bool
};

export default _Card;