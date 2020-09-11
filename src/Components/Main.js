import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactPageScroller from 'react-page-scroller';
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
    constructor(props) {
        super(props);
        this.state = { currentPage: null };
      }
    
      handlePageChange = number => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
      };

    render(){

        const containerStyle = {
            paddingTop: theme.spacing(20),
            paddingLeft: theme.spacing(30),
            paddingRight: theme.spacing(30),
        }

        return(
            <div id="main">

                {/** Manage Document Head */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Makena Kong</title>
                    <meta name="description" 
                        content="A Full Stack Engineer who favors front end development and minimalist UI/UX design."/>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                    {/* add more information */}
                </Helmet>

                <ThemeProvider theme={theme}>
                    <Router>
                        {/** nav */}
                        <MyMenu />

                        {/**content */}
                        <Container maxWidth={false} style={containerStyle}>
                            <Route path="/" >
                                <ReactPageScroller
                                    pageOnChange={this.handlePageChange}
                                    customPageNumber={this.state.currentPage}
                                    >
                                    <Home />
                                    <Projects />
                                    <About />
                                </ReactPageScroller>
                            </Route>

                        </Container>

                    </Router>

                </ThemeProvider>

            </div>
        );
    }
}
export default Main;