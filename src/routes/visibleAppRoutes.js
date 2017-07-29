import { connect } from 'react-redux';
import AppRoutes from './appRoutes';

const mapStateToProps = (state) =>({
  ...state
});

const mapDispatchToProps = (dispatch) =>({
});

const VisibleAppRoutes = connect(mapStateToProps,mapDispatchToProps)(AppRoutes); 

export default VisibleAppRoutes;