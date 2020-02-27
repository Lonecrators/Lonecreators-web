import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { AuthBanner, Social } from '../StyledComponents/styledComponents';
import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="Login">
            <header className="LoginHeader">
                <img src={Logo} alt="" />
            </header>
            <div className="LoginContainer">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="FormContainer">
                            <div className="text-center mt-8e">
                                <h3>Login</h3>
                                <div className="social-link mt-4">
                                    <Social href="" className="social">
                                        <i className="fa fa-facebook"></i>
                                    </Social>
                                    <Social href="" className="social">
                                        <i className="fa fa-google-plus"></i>
                                    </Social>
                                </div>
                                <p className="text-center mt-4">
                                    Or use your email to login
                                </p>
                            </div>
                            <form>
                                <div className="form-group mb-4">
                                    <label htmlFor="">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control lc__form"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="">Password</label>
                                    <input
                                        type="password"
                                        className="form-control lc__form"
                                        onChange={e =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group mb-4 text-center">
                                    <p className="text-center">
                                        Forgot your password?
                                    </p>
                                    <button className="btn bg-blue--light white-text btn-md btn-wd  mx-auto mt-4">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <AuthBanner>
                            <h3 className="white-text">Hello, Friend!</h3>
                            <p className="mt-3 white-text">
                                We help individuals become world-class
                                developers and companies to build and discover
                                talents. What are you waiting for?
                            </p>
                            <Link
                                className="btn btn-outline-white rounded mt-4"
                                to="/register"
                            >
                                Create an account
                            </Link>
                        </AuthBanner>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
