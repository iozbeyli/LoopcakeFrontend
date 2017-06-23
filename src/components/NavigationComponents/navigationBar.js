import React from 'react';
import {Menu,Card,Button} from 'semantic-ui-react';
import App from '../../containers/app';
import {ButtonMenuItem,LinkMenuItem} from '../MenuComponents'
const NavigationBar = ({hide,right,left}) => (

        <Menu  fluid >
            <ButtonMenuItem onClick={() => hide()} changingIcon={true} iconFirst="hide" iconSecond="sidebar"/>
            <Menu.Item>
                <img src={require('../../../static/images/logo.png')} />
            </Menu.Item>
            {left.map((item)=>{
                return (
                    <LinkMenuItem key={item.title} destination={item.destination} title={item.title}/>
                );
            })}
            <Menu.Menu position='right'>
                {right.map((item)=>{
                    return (
                        <LinkMenuItem key={item.title} destination={item.destination} title={item.title}/>
                    );
                })}
            </Menu.Menu>
        </Menu>

);

export default NavigationBar;