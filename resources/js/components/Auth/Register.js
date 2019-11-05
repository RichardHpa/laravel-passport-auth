import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../actions';

function Register(props) {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(register({
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        })).then(response => {
            if(response.data){
                props.history.push("/login");
            } else {
                console.log(response.data);
                console.log('error');
            }
        })
    }

    const changeInput = (e) => {
        e.preventDefault();
        if(e.target.name === 'name'){
            setName(e.target.value);
        } else if(e.target.name === 'email'){
            setEmail(e.target.value);
        } else if(e.target.name === 'password'){
            setPassword(e.target.value);
        } else if(e.target.name === 'confirmPassword'){
            setConfirmPassword(e.target.value);
        }
    }

    return (
        <div className="col col-md-8">
            <div className="card rounded-0">
                <div className="card-header text-center border-0">
                    <h3 className="display-5">Register</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={submitForm}>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control form-control-lg rounded-0" type="text" name="name" placeholder="" onChange={changeInput}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control form-control-lg rounded-0" type="email" name="email" placeholder="" onChange={changeInput}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control form-control-lg rounded-0" type="password" name="password" placeholder="" autoComplete="new-password" onChange={changeInput}/>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input className="form-control form-control-lg rounded-0" type="password" placeholder="" name="confirmPassword" autoComplete="new-password" onChange={changeInput}/>
                        </div>
                        <button className="btn btn-primary btn-block btn-lg rounded-0">Register</button>
                    </form>

                    <div className="card-footer text-center bg-white border-0">
                        <p>Already have an Account? <Link to="/login">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;
