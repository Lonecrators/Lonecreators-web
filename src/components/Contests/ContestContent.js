import React from 'react';
import Card from '../../common/Card/card';
import { Row, Col } from 'reactstrap';
import Contest from '../../assets/images/contest_sm.png';
import ContestCard from '../../common/Card/PostCard';

const ContestContent = ({}) => {
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
            />
        </Col>
    );
};

export default ContestContent;
