import { connect } from 'react-redux';
import LoginPage from '../../views/LoginPage';
import {loginAction} from '../../actions/authentication';

const mapStateToProps = (state) =>({
  ...state
});

const mapDispatchToProps = (dispatch) =>({
    
});

const VisibleLoginPage = connect(mapStateToProps,mapDispatchToProps)(LoginPage); 

export default VisibleLoginPage;