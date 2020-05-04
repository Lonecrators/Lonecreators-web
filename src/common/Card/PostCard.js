import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

const PostCard = ({
    className,
    alt,
    postTitle,
    postImg,
    postCount,
    postAuthor,
    postDate,
    commentCount,
    contestTag,
    onClick,
}) => {
    return (
        <div className={className}>
            <img src={postImg} alt={alt} className="card-img w-100" />
            <div className="card-body">
                <p className="card-title" onClick={onClick}>
                    {postTitle}
                </p>
                <Row className="justify-content-between">
                    <Col xs={6}>
                        <p className="contest-author">{postAuthor}</p>
                    </Col>
                    <Col xs={4}>
                        <p className="contest-date text-right">{postDate}</p>
                    </Col>
                </Row>
                <Row className="justify-content-between">
                    <Col xs={5} lg={3}>
                        <p className="contest-tag">{contestTag}</p>
                    </Col>
                    <Col xs={5} lg={4}>
                        <p className="post-count text-center">
                            {postCount} Posts{' '}
                        </p>
                    </Col>
                    <Col xs={12} lg={5}>
                        <p className="comment-count text-right">
                            {commentCount} Comments
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default styled(PostCard)`
    width: 100%;
    box-sizing: border-box;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 4px 8px rgba(9, 165, 219, 0.3);
        border: 0.25px solid rgba(9, 165, 219, 0.7);
    }
    @media screen and (max-width: 575px) {
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 769px) {
        margin-bottom: 1rem;
    }
    .card-title {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        &:hover {
            color: #297bf5;
        }
    }
    .post-count,
    .comment-count,
    .contest-tag {
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
    }
    .contest-date,
    .contest-author {
        color: rgba(1, 27, 51, 0.5);
        font-size: 12px;
        line-height: 20px;
        font-weight: 500;
    }
    .contest-tag {
        color: #297bf5;
    }
    @media screen and (max-width: 575px) {
        .comment-count {
            text-align: left !important;
        }
    }
`;
