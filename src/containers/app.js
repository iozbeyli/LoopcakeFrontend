import React from 'react';
import {Grid,Sidebar,Segment,Image,Icon,Menu,Header} from 'semantic-ui-react';
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
                    <Grid style={{
                            paddingRight: 5,
                            paddingLeft: this.state.sidebarOpen ? 0 : 10,
                            }}>
                            {this.state.sidebarOpen && <Grid.Column style={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            }} stretched width={3}>
                            </Grid.Column>}
                        {this.state.sidebarOpen && (
                            <Grid.Column  style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            background: '#2c3e50', 
                            }} stretched width={3}>
                                <SidebarMenu/>
                            </Grid.Column>
                            
                                
                        )}
                        
                        <Grid.Column style={{paddingLeft:this.state.sidebarOpen ? 10 : 0,paddingRight:0}} width={this.state.sidebarOpen ? 13 : 16}>
                            <NavigationBar style={{paddingLeft:0}} hide={this.hideSidebar} right={right} left={left}/>
                            <div style={{paddingRight:20,paddingLeft:15}}>
                                <Route exact path={`${this.props.match.url}`} component={Home}/>
                                <Route path={`${this.props.match.url}announcements`} component={AnnouncementPage}/>
                                <Route path={`${this.props.match.url}course`} component={CoursePage}/>
                                <Route path={`${this.props.match.url}repo`} component={RepoPage}/>
                                <Route path={`${this.props.match.url}group`} component={RepoPage}/>
                                <Route path={`${this.props.match.url}project`} component={RepoPage}/>
                                </div>
                            
                        </Grid.Column>
                    </Grid>
            </div>
        );
    };

};

export default App;
