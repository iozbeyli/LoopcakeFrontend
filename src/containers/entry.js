import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import PropTypes,{instanceOf} from 'prop-types';
import {AppRoutes} from '../routes';
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux';
import Login from './pages/visibleLoginPage';
import App from './app';
import {tokenAction} from '../actions/authentication';
import {Register} from '../views';

const mapStateToProps = (state) =>({
  ...state
});

const mapDispatchToProps = (dispatch) =>({
    tokenAction: (user,token) => {
        console.log("Token Action");
        dispatch(tokenAction(user,token))
    }
});

class Entry extends React.Component{
    static propTypes = {
    cookies: instanceOf(Cookies).isRequired
    };
    constructor(props){
        super(props);
        console.log("Entry");
        console.log(props);
        this.state={
            register: false
        }
    }

    componentWillMount() {
        const { cookies } = this.props;
        let token  = cookies.get('token');
        let user = cookies.get('user');
        this.props.tokenAction(user,token);
    }

    render(){
        console.log("state");
        console.log(this.state);
        if(this.props.user.loggedIn){
            return(
                <App {...this.props}/>
            );
        }else{
            if(this.state.register){
                return(
                    <Register {...this.props}/>
                );
            }else{
                return(
                    <Login {...this.props}/>
                );
            }
        	
        }
    }
}



export default withCookies(connect(mapStateToProps,mapDispatchToProps)(Entry)); 
