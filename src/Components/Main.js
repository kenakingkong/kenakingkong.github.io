import React from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import {Helmet} from "react-helmet";
import {ThemeProvider} from '@material-ui/core/styles';
import {menuStyles, theme} from '../Styles';

import MyMenu from './MyMenu';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

 
const Main = () => {

    const menuClasses = menuStyles()
    
    return(
        <div id="main">

            {/** Manage Document Head */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Makena Kong</title>
                <meta name="description" 
                    content="Makena Kong is a web developer and designer based in the San Francisco Bay Area!"/>
            </Helmet>

            <ThemeProvider theme={theme} >
                <Router>
                    
                    <MyMenu classes={menuClasses}/>

                    <Route path="/" >
                        <Home />
                        <About />
                        <Projects />
                        <Contact />
                    </Route>

                </Router>
            </ThemeProvider>

        </div>
    )
}

export default Main;