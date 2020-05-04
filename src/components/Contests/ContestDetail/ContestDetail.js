import React from 'react';
import styled from 'styled-components';
import Header from '../../../common/Navigation/SecondaryNavbar/SecondaryNavbar';
import { Row, Col } from 'antd';
import ContestImg from '../../../assets/images/contest_lg.png';

const ContestDetail = ({ className }) => {
    return (
        <div className={className}>
            <Header />
            <div className="Content">
                <Row justify="center">
                    <Col span={18}>
                        <Row>
                            <Col span={24}>
                                <img
                                    src={ContestImg}
                                    alt="contest detail"
                                    className="BannerImg"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default styled(ContestDetail)`
    background: #f4f4f4;
    .Content {
        padding: 2rem;
    }
    .BannerImg {
        width: 100%;
        height: 300px;
    }
`;
