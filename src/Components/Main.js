import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';

import MyMenu from './MyMenu';
import Home from './Home';
import Projects from './Projects';
import About from './About';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#886783',
        main: '#6B4164',
        dark: '#4a2d46',
        contrastText: '#fff',
      },
      secondary: {
        light: '#d7cb68',
        main: '#CDBF43',
        dark: '#8f852e',
        contrastText: '#000',
      }
    },
  });

class Main extends Component {
    render(){
        const containerStyle = {
            //marginLeft: theme.spacing(25),
            //marginRight: theme.spacing(25)
            paddingLeft: theme.spacing(30),
            paddingRight: theme.spacing(30),
        }

        return(
            <div id="main">

                {/** Manage Document Head */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Makena Kong</title>
                    <meta name="description" content="Some of my projects - more to come!!!!"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                    {/* add more information */}
                </Helmet>

                <Router>
                    {/** header/nav bar + menu */}
                    <MyMenu />

                    {/**render pages */}
                    <Container maxWidth={false} style={containerStyle}>
                        <Route exact path="/" component={Home} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/me" component={About} />
                    </Container>

                </Router>

            </div>
        );
    }
}
export default Main;