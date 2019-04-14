import React, { Component } from 'react';
import PageHeader from "./PageHeader";
import { Row, Col } from 'antd';

class Home extends Component {
    render(){
        const pageTitle = "Welcome!";

        return (
            <div id="home">
                <PageHeader pageTitle={pageTitle} />
                <Row>
                    <Col span={16} push={8}>Put profile photo and content here</Col>
                    <Col span={8} pull={16}>Put my grid display stuff here</Col>
                </Row>
            </div>
        );
    }
}

export default Home;