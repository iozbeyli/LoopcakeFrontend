import React from 'react';
import {Route,IndexRoute,Redirect} from 'react-router-dom';
import {Register} from '../views';
import Login from '../containers/pages/visibleLoginPage';
import App from '../containers/app';

class AppRoutes extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
          <Route path="/app" component={App}/>
          <Route exact path="/" component={Login}/>
          <Route path="/register" component={Register}/>
      </div>
    );
  }
}



export default AppRoutes;
