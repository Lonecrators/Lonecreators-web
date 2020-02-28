import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { AuthBannerBg, Social } from '../StyledComponents/styledComponents';
import './Login.scss';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div className="Login ">
            <header className="LoginHeader">
                <img src={Logo} alt="" />
            </header>
            <div className="SignUpContainer">
                <div className="row">
                    <div className="col-lg-6">
                        <AuthBannerBg>
                            <h3 className="white-text">Welcome Back!</h3>
                            <p className="mt-3 white-text">
                                We help individuals become world-class
                                developers and companies to build and discover
                                talents. What are you waiting for?
                            </p>
                            <Link
                                className="btn btn-outline-white rounded mt-4"
                                to="/login"
                            >
                                Login
                            </Link>
                        </AuthBannerBg>
                    </div>

                    <div className="col-lg-6">
                        <div className="FormContainer Signup">
                            <div className="text-center ">
                                <h3>Create Your Account</h3>
                                <div className="social-link mt-4">
                                    <Social href="" className="social">
                                        <i className="fa fa-facebook"></i>
                                    </Social>
                                    <Social href="" className="social">
                                        <i className="fa fa-google-plus"></i>
                                    </Social>
                                </div>
                                <p className="text-center mt-4">
                                    Or use your email to create an account
                                </p>
                            </div>
                            <form>
                                <div className="form-group mb-4">
                                    <label htmlFor="">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control lc__form"
                                        onChange={e =>
                                            setFullName(e.target.value)
                                        }
                                    />
                                </div>
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
                                <div className="form-group mb-3">
                                    <label htmlFor="">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control lc__form"
                                        onChange={e =>
                                            setPhoneNumber(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group mb-3 text-center">
                                    <button className="btn bg-blue--light white-text btn-md btn-wd-sm  mx-auto mt-4">
                                        Create my account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
