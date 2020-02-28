import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    const toggleNavbar = () => {
        console.log('you clicked');
        const navBar = document.querySelector('.navbar-collapse');
        if (navBar.classList.contains('collapse')) {
            navBar.classList.remove('collapse');
        } else {
            navBar.classList.add('collapse');
        }
    };
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
                <div className="container-fluid header-padding">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="lonecreators logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#basicExampleNav"
                        aria-controls="basicExampleNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <i className="fa fa-bars"></i>
                    </button>

                    <div
                        className="navbar-collapse collapse"
                        id="basicExampleNav"
                    >
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/contests">
                                    Contests
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-md-3" to="/posts">
                                    Posts
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link login" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item ml-md-3">
                                <Link
                                    to="/register"
                                    className="btn btn-md white-text bg-blue--light"
                                >
                                    Join now
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
