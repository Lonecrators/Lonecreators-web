import React from 'react';
import Card from '../../common/Card/card';

import { Row, Col } from 'reactstrap';
import Contest from '../../assets/images/contest_sm.png';
import ContestCard from '../../common/Card/PostCard';
import history from '../../common/History/History';

const ContestContent = ({}) => {
    const showContestDetail = () => {
        console.log('show detail');
        history.push('/contest-detail');
    };
    return (
        <Col md={6} lg={4} className="Contest-Content">
            <ContestCard
                postImg={Contest}
                postTitle=" We help individuals become world-class developers and..."
                postAuthor="David Akinlaja"
                postDate="12/03/2020"
                postCount="135"
                commentCount="300"
                contestTag="Literature"
                onClick={showContestDetail}
            />
        </Col>
    );
};

export default ContestContent;
