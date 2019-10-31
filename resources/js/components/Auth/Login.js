import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }

    }

    submitForm = (e) => {
        e.preventDefault();
        const { user } = this.state;

        axios.post('http://localhost:8000/api/login', {
            email: user.email,
            password: user.password
        })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    changeInput = (e) => {
        const { user } = this.state;
        user[e.target.name] = e.target.value;
        this.setState({
            user
        })
    }

    render(){
        return(
            <div className="col col-md-8">
                <div className="card rounded-0">
                    <div className="card-header text-center border-0">
                        <h3 className="display-5">Login</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control form-control-lg rounded-0" name="email" type="email"  onChange={this.changeInput}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control form-control-lg rounded-0" name="password" type="password" autoComplete="new-password" onChange={this.changeInput}/>
                            </div>
                            <button className="btn btn-primary btn-block btn-lg rounded-0">Login</button>
                        </form>
                    </div>
                    <div className="card-footer text-center bg-white border-0">
                        <p>Not a member? <Link to="/register">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
