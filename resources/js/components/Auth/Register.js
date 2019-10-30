import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {

    render(){
        return(
            <div className="col col-md-8">
                <div className="card rounded-0">
                    <div className="card-header text-center">
                        <h3 className="display-5">Register</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control form-control-lg rounded-0" type="text" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input className="form-control form-control-lg rounded-0" type="text" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control form-control-lg rounded-0" type="password" placeholder="" autoComplete="new-password"/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input className="form-control form-control-lg rounded-0" type="confirm-password" placeholder="" autoComplete="new-password"/>
                            </div>
                            <button className="btn btn-primary btn-block btn-lg rounded-0">Login</button>
                        </form>
                        <p>Already have an Account? <Link to="/login">Sign In</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;
