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
            marginLeft: theme.spacing(25),
            marginRight: theme.spacing(25)
        }

        return(
            <div id="main">

                {/** Manage Document Head */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Makena Kong</title>
                    <meta name="description" content="Some of my projects - more to come!!!!"/>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                    {/* add more information */}
                </Helmet>

                <ThemeProvider theme={theme}>

                    <Router>
                        <MyMenu />

                        <Container maxWidth={false} style={containerStyle}>
                            <Route exact path="/" component={Home} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/me" component={About} />
                        </Container>

                    </Router>

                </ThemeProvider>

            </div>
        );
    }
}
export default Main;