import React, { Component } from 'react';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
    state = {
        isOpen: false,
    };
    toggleNavbar = () => {
        console.log('you clicked mobile Navbar');
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
                    <div className="container">
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
                            onClick={this.toggleNavbar}
                        >
                            <i className="fa fa-bars"></i>
                        </button>
                        {this.state.isOpen ? (
                            <div
                                className="navbar-collapse"
                                id="basicExampleNav"
                            >
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" href="/">
                                            Contests
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link mx-md-3"
                                            to="/"
                                        >
                                            Posts
                                        </Link>
                                    </li>
                                </ul>

                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item ml-md-3">
                                        <Link
                                            to="/"
                                            className="btn btn-md white-text bg-blue--light"
                                        >
                                            Join now
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
