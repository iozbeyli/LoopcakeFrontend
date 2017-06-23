import React from 'react';
import {Route,IndexRoute} from 'react-router-dom';
import {Login,Register} from '../views';
import App from '../containers/app';
export default (
   <div>
       <Route path="/app" component={App}/>
       <Route exact path="/" component={Login}/>
       <Route path="/register" component={Register}/>
   </div>
);