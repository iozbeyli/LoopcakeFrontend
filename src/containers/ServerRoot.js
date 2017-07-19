import React from 'react';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import PropTypes,{instanceOf} from 'prop-types';
import {AppRoutes} from '../routes';
import { withCookies, Cookies } from 'react-cookie';

class ServerRoot extends React.Component{
    static propTypes = {
        store: PropTypes.object.isRequired,
        cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount(){
        console.log(this.props);
    };

    render(){
        return(
            <Provider store={this.props.store}>
                <StaticRouter
                    location={this.props.location}
                    context={this.props.context}
                >
                    <AppRoutes/>
                </StaticRouter>
            </Provider>
        );
    }
}

export default withCookies(ServerRoot);