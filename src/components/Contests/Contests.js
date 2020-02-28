import React from 'react';
import Header from '../../common/Navigation/SecondaryNavbar/SecondaryNavbar';
import { TabWrapper } from '../StyledComponents/styledComponents';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import './Contests.scss';

const Contests = () => {
    const { TabPane } = Tabs;
    return (
        <div className="Contests">
            <Header />
            <TabWrapper>
                <div className="container-fluid">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="All" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Writing" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Graphic Design" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Arts" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Simulations" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </TabWrapper>
        </div>
    );
};
export default Contests;
