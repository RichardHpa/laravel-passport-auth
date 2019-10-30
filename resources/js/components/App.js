// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing';
import Header from './Header';
import Login from './Auth/Login';
import Register from './Auth/Register';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className="full">
                    <Header />
                    <div className="container">
                        <div className="row justify-content-center align-items-center h-100">
                            <Switch>
                                <Route exact path='/' component={Landing} />
                                <Route exact path='/login' component={Login} />
                                <Route exact path='/register' component={Register} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
