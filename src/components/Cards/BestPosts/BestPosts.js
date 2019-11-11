import React from 'react';
import { Col, Row } from 'reactstrap';
import Card from '../../../common/Card/card';
import contestImg from '../../../assets/images/posts.png';
import './style.scss';

const bestPosts = props => {
    return (
        <div className="BestPosts">
            <Row className="mt-3">
                <Col md={6} lg={4}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <p className="card-content">
                                We help individuals become world-class
                                developers and...
                            </p>
                            <Row className="justify-content-between">
                                <Col xs={6} md={6}>
                                    <p className="contest-author">
                                        By Adeshina
                                    </p>
                                </Col>
                                <Col xs={4} md={4}>
                                    <p className="contest-date">21 Aug, 2019</p>
                                </Col>
                            </Row>
                            <Row className="ustify-content-between">
                                <Col xs={3} md={3}>
                                    <p className="contest-tag">Writing</p>
                                </Col>
                                <Col xs={4} md={3}>
                                    <p className="posts-count text-center">
                                        24 Posts
                                    </p>
                                </Col>
                                <Col xs={5} md={5} className="text-right">
                                    <p className="post-comment">214 Comments</p>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <p className="card-content">
                                We help individuals become world-class
                                developers and...
                            </p>
                            <Row className="justify-content-between">
                                <Col xs={6} md={6}>
                                    <p className="contest-author">
                                        By Adeshina
                                    </p>
                                </Col>
                                <Col xs={4} md={4}>
                                    <p className="contest-date">21 Aug, 2019</p>
                                </Col>
                            </Row>
                            <Row className="ustify-content-between">
                                <Col xs={3} md={3}>
                                    <p className="contest-tag">Writing</p>
                                </Col>
                                <Col xs={4} md={3}>
                                    <p className="posts-count text-center">
                                        24 Posts
                                    </p>
                                </Col>
                                <Col xs={5} md={5} className="text-right">
                                    <p className="post-comment">214 Comments</p>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <p className="card-content">
                                We help individuals become world-class
                                developers and...
                            </p>
                            <Row className="justify-content-between">
                                <Col xs={6} md={6}>
                                    <p className="contest-author">
                                        By Adeshina
                                    </p>
                                </Col>
                                <Col xs={4} md={4}>
                                    <p className="contest-date">21 Aug, 2019</p>
                                </Col>
                            </Row>
                            <Row className="ustify-content-between">
                                <Col xs={3} md={3}>
                                    <p className="contest-tag">Writing</p>
                                </Col>
                                <Col xs={4} md={3}>
                                    <p className="posts-count text-center">
                                        24 Posts
                                    </p>
                                </Col>
                                <Col xs={5} md={5} className="text-right">
                                    <p className="post-comment">214 Comments</p>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default bestPosts;
