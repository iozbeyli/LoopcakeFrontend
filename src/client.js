import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import {CookiesProvider} from 'react-cookie';
export const store = configureStore(window.__INITIAL_STATE__);

const node=(
<CookiesProvider>
    <Root store={store}/>
</CookiesProvider>

);



ReactDOM.render(node,document.getElementById('app'));