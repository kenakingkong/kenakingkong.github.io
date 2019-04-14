import React, { Component } from 'react';
import Profile from "./Profile";
import ArtBox from './ArtBox';
import ProgramBox from "./ProgramBox";

class Home extends Component {

    /*
    if you want a page title
    import PageHeader from "./PageHeader";
    const pageTitle = "Welcome!";
    <PageHeader pageTitle={pageTitle} />
           
                <Row>
                    <Col span={6} offset={2}>
                        <Profile />
                    </Col>
                    <Col span={12} >Put my grid display stuff here</Col>
                </Row>
    */

    render(){

        /**variables */
        const programType = "programs";
        const artType = "art";

        /**css */
        const leftCol = {
            width: '30%',
            paddingTop: '30px',
            textAlign: 'center'
        }
        const rightCol = {
            width: '70%',
            marginLeft: '100px'
        }
        return (
            <div id="home">
                <div style={{display:'flex'}}>
                    <div style={leftCol}>
                        <Profile />
                    </div>
                    <div style={rightCol}>
                        <h1>My Programs</h1>
                        <ProgramBox />
                        <h1>My Artwork</h1>
                        <ArtBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;