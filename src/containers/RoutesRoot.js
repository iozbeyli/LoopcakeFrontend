import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import PropTypes,{instanceOf} from 'prop-types';
import {AppRoutes} from '../routes';
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux';
class RoutesRoot extends React.Component{
    
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    render(){
        return(
            <div>
              <AppRoutes/>
            </div>
        );
    }
}



export default withCookies(RoutesRoot);
