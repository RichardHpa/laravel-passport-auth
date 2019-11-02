import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions';

const Logout = (props) => {
    const dispatch = useDispatch();
    dispatch(logout())

    return (
        <Redirect to="/"/>
    )
}
export default Logout;
