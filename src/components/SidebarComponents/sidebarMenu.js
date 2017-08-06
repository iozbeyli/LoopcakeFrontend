import React from 'react';
import {Card} from 'semantic-ui-react';
import App from '../../containers/app';
import {SubMenuItem} from '../MenuComponents';
import {Link} from 'react-router-dom';
import Menu from '../MenuComponents/menu';
const SidebarMenu = () => {

    const menuItems = [
        {
            type: 'subMenu',
            name: 'announcements',
            properties: {
                header: <Link to="/announcements" style={{color:'white'}}>Announcements</Link>,
                items:[]
            }
        },
        {
            type: 'subMenu',
            name: 'courses',
            properties: {
                header: 'Courses',
                items: [
                    {
                        name: 'Computer Graphics',
                        element: <Link to="/course/Computer Graphics" style={{color:'white'}}>Computer Graphics</Link>
                    },
                    {
                        name: 'Computer Network',
                        element: <Link to="/course/Computer Network" style={{color:'white'}}>Computer Network</Link>
                    }
                ]
            }
        },
        {
            type: 'subMenu',
            name: 'projects',
            properties: {
                header: 'Projects',
                items: [
                    {name: 'Rubic Cube'},
                    {name: 'Texture Mapping'}
                ]
            }
        },
        {
            type: 'subMenu',
            name: 'repos',
            properties: {
                header: 'Repos',
                items: [
                    {
                        name: 'Loopcake Frontend',
                        element: <Link to="/repo/Loopcake Frontend" style={{color:'white'}}>Loopcake Frontend</Link>
                    },
                    {name: 'LoopcakeMobile' }
                ]
            }
        }
        ];

    return(
        <Menu fluid props={{inverted:true,vertical:true,fluid:true,color:'blue'}} items={menuItems}/>
    );

};

export default SidebarMenu;