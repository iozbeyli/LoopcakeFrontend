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
          <Route path="/login" component={Login}/>
          <PrivateRoute exact path="/app" component={App}/>
          <Route path="/register" component={Register}/>
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    console.log(props);
    return(
    false ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}
}/>
)


export default AppRoutes;
