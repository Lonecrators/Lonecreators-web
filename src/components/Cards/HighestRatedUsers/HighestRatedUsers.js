import React from 'react';
import { Row, Col } from 'reactstrap';
import Card from '../../../common/Card/card';
import contestImg from '../../../assets/images/users.png';
import './style.scss';

const highestRatedUsers = props => {
    return (
        <div className="HighestRated">
            <Row className="mt-3">
                <Col md={6} lg={3}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <Row className="justify-content-between">
                                <Col xs={8} md={8}>
                                    <p className="username">Kristen Joseph</p>
                                </Col>
                                <Col xs={4} md={4}>
                                    <p className="user-rating">
                                        <i className="fa fa-star mr-2"></i>4.5
                                    </p>
                                </Col>
                            </Row>
                            <p className="user-description">
                                Winner of the contest “Nigeria constitution a
                                curse or a blessing"
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <Row className="justify-content-between">
                                <Col xs={8} md={8}>
                                    <p className="username">Kristen Joseph</p>
                                </Col>
                                <Col xs={4} md={4}>
                                    <p className="user-rating">
                                        <i className="fa fa-star mr-2"></i>4.5
                                    </p>
                                </Col>
                            </Row>
                            <p className="user-description">
                                Winner of the contest “Nigeria constitution a
                                curse or a blessing"
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <Row className="justify-content-between">
                                <Col xs={8} md={8}>
                                    <p className="username">Kristen Joseph</p>
                                </Col>
                                <Col xs={4} md={4}>
                                    <p className="user-rating">
                                        <i className="fa fa-star mr-2"></i>4.5
                                    </p>
                                </Col>
                            </Row>
                            <p className="user-description">
                                Winner of the contest “Nigeria constitution a
                                curse or a blessing"
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <Row className="justify-content-between">
                                <Col xs={8} md={8}>
                                    <p className="username">Kristen Joseph</p>
                                </Col>
                                <Col xs={4} md={4}>
                                    <p className="user-rating">
                                        <i className="fa fa-star mr-2"></i>4.5
                                    </p>
                                </Col>
                            </Row>
                            <p className="user-description">
                                Winner of the contest “Nigeria constitution a
                                curse or a blessing"
                            </p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default highestRatedUsers;
