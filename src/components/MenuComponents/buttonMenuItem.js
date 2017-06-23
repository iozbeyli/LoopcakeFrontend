import React from 'react';
import PropTypes from 'prop-types';
import {Menu,Icon} from 'semantic-ui-react';
class ButtonMenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            first: true
        }
    }

    changeIcon = () =>{
      this.setState({
          first:!this.state.first
      })
    };

    handleClick = () => {
        this.props.changingIcon && this.changeIcon();
        this.props.onClick();
    };

    render(){
        return(
            <Menu.Item>
                <Icon size="large" name={this.state.first ? this.props.iconFirst : this.props.iconSecond} onClick={this.handleClick}/>
            </Menu.Item>
        );
    }
}

ButtonMenuItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    changingIcon: PropTypes.bool.isRequired,
    iconFirst: PropTypes.string.isRequired,
    iconSecond: PropTypes.string
};

ButtonMenuItem.defaultProps = {
  changingIcon: false
};
export default ButtonMenuItem;