import React from 'react';
import Aux from '../../common/Hoc/hoc';
import Header from '../../common/Navigation/Header/Header';
import Footer from '../../common/Navigation/Footer/Footer';
import OnGoingContests from '../Cards/onGoingContests/onGoingContests';
import BestPosts from '../Cards/BestPosts/BestPosts';
import LatestWinners from '../Cards/LatestWinners/LatestWinners';
import HighestRated from '../Cards/HighestRatedUsers/HighestRatedUsers';
import './Home.scss';

const Home = () => (
    <div className="Home">
        <Header />
        <main>
            <section className="intro">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="main_text">
                                <h1 className="main-heading__text">
                                    We Accelerate Your <br /> Career in Tech
                                </h1>
                                <p className="mt-3">
                                    We help individuals become world class
                                    developers and companies to build and
                                    discover talents. What are you <br />{' '}
                                    waiting for?
                                </p>
                                <button className="mt-3 btn btn-md white-text btn-brand">
                                    Create a Contest
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home_bg"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ongoing-contests">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="section-heading font-weight-bold">
                                On-going contests
                            </h3>
                            <p>
                                We help individuals become world-class
                                developers and companies to build and discover
                                talents. What are you waiting for?
                            </p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <OnGoingContests />
                    </div>
                </div>
            </section>
            <section className="best-post">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="section-heading font-weight-bold">
                                Best posts of the week
                            </h3>
                            <p>
                                We help individuals become world-class
                                developers and companies to build and discover
                                talents. What are you waiting for?
                            </p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <BestPosts />
                    </div>
                </div>
            </section>
            <section className="latest-winners mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="section-heading font-weight-bold">
                                Latest winners
                            </h3>
                            <p>
                                We help individuals become world-class
                                developers and companies to build and discover
                                talents. What are you waiting for?
                            </p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <LatestWinners />
                    </div>
                </div>
            </section>
            <section className="highest-rated-users mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="section-heading font-weight-bold">
                                Highest rated users of the month
                            </h3>
                            <p>
                                We help individuals become world-class
                                developers and companies to build and discover
                                talents. What are you waiting for?
                            </p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <HighestRated />
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);
export default Home;
