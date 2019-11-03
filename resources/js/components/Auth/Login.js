import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions';

function Login(props) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(login({
            email: email,
            password: password
        })).then(response => {
            if(response.data.access_token){
                props.history.push("/");
            } else {
                console.log(response.data);
                console.log('error');
            }
        })
    }

    const changeInput = (e) => {
        e.preventDefault();
        if(e.target.name === 'email'){
            setEmail(e.target.value);
        } else if(e.target.name === 'password'){
            setPassword(e.target.value);
        }
    }

    const token = useSelector(state => state.token);
    return (
        <div className="col col-md-8">
            <div className="card rounded-0">
                <div className="card-header text-center border-0">
                    <h3 className="display-5">Login</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={submitForm}>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control form-control-lg rounded-0" name="email" type="email"  onChange={changeInput}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control form-control-lg rounded-0" name="password" type="password" autoComplete="new-password" onChange={changeInput}/>
                        </div>
                        <button className="btn btn-primary btn-block btn-lg rounded-0">Login</button>
                    </form>
                </div>
                <div className="card-footer text-center bg-white border-0">
                    <p>Not a member? <Link to="/register">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}



export default Login;
