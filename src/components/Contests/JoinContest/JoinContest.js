import React from 'react';
import styled from 'styled-components';
import Header from '../../../common/Navigation/SecondaryNavbar/SecondaryNavbar';
import { Row, Col, Upload, message } from 'antd';

const JoinContest = ({ className }) => {
    const { Dragger } = Upload;
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(
                    `${info.file.name} file uploaded successfully.`,
                );
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <div className={className}>
            <Header />
            <Row justify="center">
                <Col span={12}>
                    <div className="JoinContest-Container">
                        <Row justify="center">
                            <Col span={12} xs={24} className="Wrapper">
                                <div className="heading text-center">
                                    <h3>Join contest</h3>
                                    <p>
                                        We help individuals become world-class
                                        developers and companies to build and
                                        discover talents. What are you waiting
                                        for?
                                    </p>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="">Title</label>
                                        <input
                                            type="text"
                                            className="lc__input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Description</label>
                                        <textarea
                                            name="description"
                                            className="lc__textarea"
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">
                                            Add Image or video
                                        </label>
                                        <Dragger {...props}>
                                            <p className="ant-upload-drag-icon text-center mb-2">
                                                Drag and drop file
                                            </p>
                                            <p className="text-center">OR</p>
                                            <p className="ant-upload-text">
                                                <button className="btn btn-md select-btn">
                                                    Select
                                                </button>
                                            </p>
                                        </Dragger>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">
                                            Terms and conditions
                                        </label>
                                        <p className="terms">
                                            We help individuals become
                                            world-class developers and companies
                                            to build and discover talents. What
                                            are you waiting for?
                                        </p>
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn btn-large btn-wd bg-blue--light white-text">
                                            Post
                                        </button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default styled(JoinContest)`
    background-color: #f4f4f4;
    .JoinContest-Container {
        padding-top: 40px;
        padding-bottom: 100px;
    }
    .Wrapper {
        background: #fff;
        padding: 2.8rem 5.5rem;
    }
    form {
        margin-top: 3.3rem;
    }
    label {
        font-size: 14px;
        color: rgba(1, 27, 51, 0.8);
        font-weight: 500;
    }
    .lc__input {
        width: 100%;
        background: #ffffff;
        border: 1px solid rgba(1, 27, 51, 0.3);
        border-radius: 3px;
        height: 44px;

        padding: 0 10px;
    }
    .form-group {
        margin-bottom: 1.8rem;
    }
    .lc__textarea {
        width: 100%;
        height: 120px;
        border-radius: 3px;
        border: 1px solid rgba(1, 27, 51, 0.3);
    }
    .ant-upload.ant-upload-drag {
        background: #f4f4f4;
        border: 1px solid rgba(1, 27, 51, 0.3);
        border-radius: 3px;
    }
    .select-btn {
        color: #0f7dff;
        border: 1px solid #0f7dff;
        background: #f4f4f4;
    }
    .terms {
        font-size: 12px;
        color: rgba(1, 27, 51, 0.7);
    }
    @media screen and (max-width: 575px) {
        .Wrapper {
            padding: 2.2rem 2rem;
        }
    }
`;
