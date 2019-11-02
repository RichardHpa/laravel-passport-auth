import React from 'react'
import { Link } from 'react-router-dom'

import { isLoggedIn } from './functions';

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel fixed-top'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Tasksman</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <ul className="navbar-nav">
                { !isLoggedIn() && <li className="nav-item active"><Link to="/login" className="nav-link">Login</Link></li>}
                { !isLoggedIn() && <li className="nav-item active"><Link to="/register" className="nav-link">Register</Link></li>}
                { isLoggedIn() && <li className="nav-item active"><Link to="/logout" className="nav-link">Logout</Link></li>}
                </ul>
            </div>

        </div>
    </nav>
)

export default Header
