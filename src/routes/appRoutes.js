import React from 'react';
import {Route,IndexRoute,Redirect} from 'react-router-dom';
import {Register} from '../views';
import Login from '../containers/pages/visibleLoginPage';
import Entry from '../containers/entry';

class AppRoutes extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
          <Route  path="/" component={Entry}/>
          
      </div>
    );
  }
}



export default AppRoutes;
