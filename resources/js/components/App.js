// resources/assets/js/components/App.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import thunk from "redux-thunk";
import store from './store'
import { Provider, useSelector } from 'react-redux';
import { isLoggedIn, LoggedInRoute, LoggedOutRoute } from './functions';

import Landing from './Landing';
import Header from './Header';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Logout from './Auth/Logout';
import NoMatch from './NoMatch';

import Test from './Test';

const App = () => {
    return (
        <BrowserRouter>
            <div className="full">
                <Header />
                <div className="container">
                    <div className="row justify-content-center align-items-center h-100">
                        <Switch>
                            <Route exact path='/' component={Landing} />

                            <LoggedOutRoute authed={!isLoggedIn()} path='/login' component={Login} />
                            <LoggedOutRoute authed={!isLoggedIn()} path='/register' component={Register} />

                            <LoggedInRoute authed={isLoggedIn()} path='/logout' component={Logout} />

                            <LoggedInRoute authed={isLoggedIn()} path='/test' component={Test} />

                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'))
