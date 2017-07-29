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
                header: <Link to="/announcements" style={{color:'black'}}>Announcements</Link>,
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
                        element: <Link to="/course/Computer Graphics" style={{color:'black'}}>Computer Graphics</Link>
                    },
                    {
                        name: 'Computer Network',
                        element: <Link to="/course/Computer Network" style={{color:'black'}}>Computer Network</Link>
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
                        element: <Link to="/repo/Loopcake Frontend" style={{color:'black'}}>Loopcake Frontend</Link>
                    },
                    {name: 'LoopcakeMobile' }
                ]
            }
        }
        ];

    return(
        <Card fluid raised>
            <Card.Content>
                <Menu props={{vertical:true,fluid:true,secondary:true}} items={menuItems}/>
            </Card.Content>
        </Card>

    );

};

export default SidebarMenu;