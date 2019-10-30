// resources/assets/js/components/Header.js

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel fixed-top'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Tasksman</Link>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link" href="#">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register" className="nav-link" href="#">Register</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header
