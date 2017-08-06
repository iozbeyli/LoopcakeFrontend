import React from 'react';
import {Grid} from 'semantic-ui-react';
import {RepoPage} from '../views';
import Home from './pages/visibleHomePage';
import CoursePage from './pages/visibleCoursePage';
import AnnouncementPage from './pages/visibleAnnouncementPage';
import Components from '../components';
import {Route} from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import {connect} from 'react-redux';
import PropTypes,{instanceOf} from 'prop-types';
const NavigationBar = Components.NavigationComponents.NavigationBar;
const SidebarMenu = Components.SidebarComponents.SidebarMenu;

class App extends React.Component {



    hideSidebar=()=>{
        this.setState({
           sidebarOpen: !this.state.sidebarOpen
        });
    };

    constructor(props){
        super(props);
        this.state={
            sidebarOpen:true
        };
        
    };

    render(){
        console.log("App Props")
        console.log(this.props);
        const left=[
            {destination: "/",title:"Dashboard"},
        ];
        const right=[
            {destination: "/logout", title:"Logout"}
        ];
        return(
            <div>
                        <NavigationBar hide={this.hideSidebar} right={right} left={left}/>
                    <Grid style={{
                            paddingRight: 25,
                            paddingLeft: this.state.sidebarOpen ? 0 : 25,
                            }}>
                        {this.state.sidebarOpen && (
                            <Grid.Column style={{
                       
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            overflow: 'auto',
                            background: '#2c3e50', 
                            }} stretched width={3}>
                                <SidebarMenu/>
                            </Grid.Column>
                        )}
                        <Grid.Column width={this.state.sidebarOpen ? 13 : 16}>
                            <br/>
                            <Route exact path={`${this.props.match.url}`} component={Home}/>
                            <Route path={`${this.props.match.url}announcements`} component={AnnouncementPage}/>
                            <Route path={`${this.props.match.url}course`} component={CoursePage}/>
                            <Route path={`${this.props.match.url}repo`} component={RepoPage}/>
                        </Grid.Column>
                    </Grid>
            </div>
        );
    };

};

export default App;
