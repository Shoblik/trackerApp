import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/app.css';

import Login from './components/login';
import Homepage from './components/homepage';
import TrackingConfig from './components/trackingConfig';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/trackingConfig" component={TrackingConfig} />
                <Route path="/homepage" component={Homepage} />
                <Route path="/" component={Login}/>
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
