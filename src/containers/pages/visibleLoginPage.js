import { connect } from 'react-redux';
import LoginPage from '../../views/LoginPage';
import {loginAction} from '../../actions/authentication';
import { withCookies, Cookies } from 'react-cookie';

const mapStateToProps = (state) =>({
  ...state
});

const mapDispatchToProps = (dispatch) =>({
    loginAction: (email,token) => {
    	console.log("Login Action");
    	dispatch(loginAction(email,token))
    }
});

const VisibleLoginPage = withCookies(connect(mapStateToProps,mapDispatchToProps)(LoginPage)); 

export default VisibleLoginPage;