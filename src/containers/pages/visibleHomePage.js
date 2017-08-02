import { connect } from 'react-redux';
import {Home} from '../../views';
import {} from '../../actions/authentication';
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

const VisibleHomePage = withCookies(connect(mapStateToProps,mapDispatchToProps)(Home));

export default VisibleHomePage;