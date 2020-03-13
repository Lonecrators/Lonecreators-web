import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/images/logo.svg';
import history from '../../History/History';
import { Link } from 'react-router-dom';
import './SecNav.css';

const NavBar = props => {
    const [path, setPath] = useState('');
    useEffect(() => {
        getCurrentRoute();
        addShadowToNav();
    });
    const toggleNavbar = () => {
        const navBar = document.querySelector('.navbar-collapse');
        if (navBar.classList.contains('collapse')) {
            navBar.classList.remove('collapse');
        } else {
            navBar.classList.add('collapse');
        }
    };
    const getCurrentRoute = () => {
        const { pathname } = history.location;
        const filteredPath = pathname.split('/').join('');
        switch (filteredPath) {
            case 'contests':
                setPath('contests');
                break;
            case 'posts':
                setPath('posts');
                break;
            default:
                setPath('contests');
                break;
        }
    };
    const addShadowToNav = () => {
        const scrollY = window.scrollY;
        const navBar = document.querySelector('.navbar');
        window.scrollY >= 200
            ? navBar.classList.remove('no-shadow')
            : navBar.classList.add('no-shadow');
    };

    return (
        <header className="SecHeader">
            <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent no-shadow">
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
                            <div className="input-group lc__input-group">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon1"
                                    >
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control lc__form "
                                    aria-label="Search Contests"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link " to="/contests">
                                    Contests
                                </Link>
                                {path === 'contests' && (
                                    <span className="blue-dot"></span>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/posts">
                                    Posts
                                </Link>
                                {path === 'posts' && (
                                    <span className="blue-dot"></span>
                                )}
                            </li>
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

export default NavBar;
