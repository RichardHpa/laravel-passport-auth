import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const isLoggedIn = () => {
    return useSelector(state => state.token) ? true: false;
}

export function LoggedInRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export function LoggedOutRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}
