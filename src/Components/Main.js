import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Container, Tabs, Tab, Paper} from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import Home from "./Home";
import Art from "./Art";
import Programs from "./Programs";
import Profile from "./Profile";
  
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {currentTab : "home"};
    }

    handleChange = (event, newValue) => {
        this.setState({currentTab: newValue});
    };

    render(){

        return(
            <div id="main">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Makena Kong</title>
                    <meta name="description" content="Some of my projects - more to come!!!!"/>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                </Helmet>
                
                    {/*<Router>

                         {/**NavBar *
                         <Container maxWidth={'xl'} style={{marginTop: '5%'}}>

                            <Paper square >
                                <Tabs
                                    value={this.state.currentTab}
                                    onChange={this.handleChange}
                                    variant="fullWidth"
                                    indicatorColor="secondary"
                                    textColor="primary"
                                    aria-label="icon label tabs example"
                                    >
                                        {/*<Tab icon={<Avatar alt="Makena Kong" src={myFace} />}  label="MAKENA KONG"/>
                                        <Tab label="MAKENA KONG" value="home"/>
                                        <Tab icon={<CodeIcon />} label="PROJECTS" value="projects"/>
                                        <Tab icon={<BrushIcon />} label="ARTWORK" value="artwork"/>
                                        <Tab icon={<EmojiPeopleIcon />} label="ABOUT" value="about" onClick={() => this.props.history.push("/about")}/>
                                </Tabs>
                            </Paper>
                        </Container>

                        {/**Content *
                        <Switch>
                            <Route path="/">
                                <Home/>
                            </Route>
                            <Route path="/projects">
                                <Programs/>
                            </Route>
                            <Route path="/artwork">
                                <Art />
                            </Route>
                            <Route path="/about">
                                <Profile />
                            </Route>
                        </Switch>

                    </Router>*/}

                    <Profile />
                    <Home/>
               
                
            </div>
        );
    }
}
export default Main;