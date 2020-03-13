import React from 'react';
import Header from '../../common/Navigation/SecondaryNavbar/SecondaryNavbar';
import { TabWrapper } from '../StyledComponents/styledComponents';
import { Row } from 'reactstrap';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import ContestContent from './ContestContent';

import './Contests.css';

const Contests = () => {
    const { TabPane } = Tabs;
    return (
        <div className="Contests">
            <Header />
            <TabWrapper>
                <Tabs defaultActiveKey="1" animated={false}>
                    <TabPane tab="All" key="1">
                        <div className="container-fluid px-0">
                            <Row>
                                <ContestContent />
                                <ContestContent />
                                <ContestContent />
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab="Writing" key="2">
                        <div className="container-fluid px-0">
                            <Row>
                                <ContestContent />
                                <ContestContent />
                                <ContestContent />
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab="Graphic Design" key="3">
                        <div className="container-fluid px-0">
                            <Row>
                                <ContestContent />
                                <ContestContent />
                                <ContestContent />
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab="Arts" key="4">
                        <div className="container-fluid px-0">
                            <Row>
                                <ContestContent />
                                <ContestContent />
                                <ContestContent />
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab="Simulations" key="5">
                        <div className="container-fluid px-0">
                            <Row>
                                <ContestContent />
                                <ContestContent />
                                <ContestContent />
                            </Row>
                        </div>
                    </TabPane>
                </Tabs>
            </TabWrapper>
        </div>
    );
};
export default Contests;
