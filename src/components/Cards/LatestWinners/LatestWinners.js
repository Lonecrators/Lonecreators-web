import React from 'react';
import { Row, Col } from 'reactstrap';
import Card from '../../../common/Card/card';
import contestImg from '../../../assets/images/winners.png';
import './style.scss';

const latestWinners = props => {
    return (
        <div className="LatestWinners">
            <Row className="mt-3">
                <Col md={6} lg={3}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <p className="winners-name">Adebowale Johnson</p>
                            <p className="winner-description">
                                Winner of the contest “Nigeria constitution a
                                curse or a blessing
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <p className="winners-name">Adebowale Johnson</p>
                            <p className="winner-description">
                                Winner of the contest “Nigeria constitution a
                                curse or a blessing
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <p className="winners-name">Adebowale Johnson</p>
                            <p className="winner-description">
                                Winner of the contest “Nigeria constitution a
                                curse or a blessing
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card>
                        <img src={contestImg} className="card-img w-100" />
                        <div className="card-body">
                            <p className="winners-name">Adebowale Johnson</p>
                            <p className="winner-description">
                                Winner of the contest “Nigeria constitution a
                                curse or a blessing
                            </p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default latestWinners;
