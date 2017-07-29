import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import template from './template';
import {StaticRouter} from  'react-router-dom';
const app = express();
const context={};
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import {AppRoutes} from './routes';

import { CookiesProvider } from 'react-cookie';
const cookiesMiddleware = require('universal-cookie-express');
import RoutesRoot from './containers/RoutesRoot';

app.use(express.static('dist/public'));
app.use(cookiesMiddleware());

app.get('*',(req,res)=>{

    let initMOCKstore = {};
    const store = createStore(rootReducer, initMOCKstore);

    const body = ReactDOM.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <CookiesProvider cookies={req.universalCookies}>
                    <RoutesRoot/>
                </CookiesProvider>
            </StaticRouter>
        </Provider>);

    const initialState = store.getState();
    const html = template(body)(initialState);
    
    if(context.url){
        res.writeHead(301,{
            Location: context.url
        });
        res.end();
    }else{
        res.send(html);
    }

});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});