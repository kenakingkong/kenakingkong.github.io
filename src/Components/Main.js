import React, {useState} from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import ReactPageScroller from 'react-page-scroller';
import {Helmet} from "react-helmet";
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from '../Styles';

import MyMenu from './MyMenu';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Main = () => {
    
    const [currentPage, setCurrentPage] = useState(null);

    return(
        <div id="main" >

            {/** Manage Document Head */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Makena Kong</title>
                <meta name="description" 
                    content="A Full Stack Engineer who favors front end development and minimalist UI/UX design."/>
                {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                {/* add more information */}

            </Helmet>

            <ThemeProvider theme={theme} >
                <Router>
                    
                    <MyMenu />

                    <Route path="/" >
                        <ReactPageScroller
                            pageOnChange={(num) => setCurrentPage(num)}
                            customPageNumber={currentPage}
                            >
                            <Home />
                            <Projects />
                            <About />
                            <Contact />
                            
                            
                        </ReactPageScroller>
                    </Route>

                </Router>
            </ThemeProvider>

        </div>
    )
}

export default Main;