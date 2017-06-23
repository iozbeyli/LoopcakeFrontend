import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import PropTypes from 'prop-types';
import RoutesRoot from './RoutesRoot';
import {CookiesProvider} from 'react-cookie';

export default class Root extends React.Component{
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render(){
        return(
            <Provider store={this.props.store}>
                <Router>
                    <CookiesProvider>
                        <RoutesRoot/>
                    </CookiesProvider>
                </Router>
            </Provider>
        );
    }
}