import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import PropTypes,{instanceOf} from 'prop-types';
import {AppRoutes} from '../routes';
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux';
import Login from './pages/visibleLoginPage';
import App from './app';

const mapStateToProps = (state) =>({
  ...state
});

const mapDispatchToProps = (dispatch) =>({});

class Entry extends React.Component{
   

    render(){
        if(true){
            return(
                <App {...this.props}/>
            );
        }else{
        	return(
        		<Login {...this.props}/>
        		);
        }
        
    }
}



export default Entry;
