import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import './Footer.scss';

const footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <Link to="/" className="navbar-brand">
                        <img
                            src={Logo}
                            className="w-100 img-fluid"
                            alt="lonecreators logo"
                        />
                    </Link>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <p className="mt-3">
                                    Nigeria might be losing trillions of naira
                                    to the non-review and non-domestication of
                                    its national building code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <ul className="footer-nav">
                        <h4>FEATURES</h4>
                        <li>
                            <Link className="footer-item">Contests</Link>
                        </li>
                        <li>
                            <Link className="footer-item">Posts</Link>
                        </li>
                        <li>
                            <Link className="footer-item">Gallery</Link>
                        </li>
                        <li>
                            <Link className="footer-item">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul className="footer-nav">
                        <h4>COMPANY</h4>
                        <li>
                            <Link className="footer-item">About us</Link>
                        </li>
                        <li>
                            <Link className="footer-item">FAQs</Link>
                        </li>
                        <li>
                            <Link className="footer-item">Privacy policy</Link>
                        </li>
                        <li>
                            <Link className="footer-item">Term of service</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="footer-nav">
                        <h4 className="text-center">CONNECT WITH US</h4>
                        <li className="list-inline-start">
                            <Link className="footer-item">About us</Link>
                        </li>
                        <li className="list-inline-start">
                            <Link className="footer-item">FAQs</Link>
                        </li>
                        <li className="list-inline-start">
                            <Link className="footer-item">Privacy policy</Link>
                        </li>
                        <li className="list-inline-start">
                            <Link className="footer-item">Term of service</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 footer-level__two">
                    <p className="text-center footer-copyrights">
                        &copy; 2019 Lonecreators all simple rights reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
);
export default footer;
