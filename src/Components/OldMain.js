import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout} from 'antd';

import Home from "./Home";
import Art from "./Art";
import Programs from "./Programs";

const { Content} = Layout;
class Main extends Component {

    state = {
        current: 'home',
      }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }

    render(){

        /* custom css */
        const navMenu = {
            textAlign: 'center',
            paddingTop: "50px",
            borderBottom: '2px solid grey',
            width: '70%',
            margin: 'auto'
        }
        const navHeader = {
            fontSize: '40px',
        }
        const navMenuItem = {
            paddingLeft: '10px',
            paddingRight:'10px',
            fontColor: 'black',
            fontSize: '20px',
        }
        const container = {
            paddingTop: '60px',
            width: '70%',
            margin: 'auto',
        }

        return(
            <div id="main">
                <Router>
                    <div style={navMenu}>
                    <h1 style={navHeader}>MAKENA KONG</h1>
                    <h2>
                        <Link style={navMenuItem} to="/">HOME</Link>
                        <Link style={navMenuItem}  to="/programs">PROGRAMS</Link>
                        <Link style={navMenuItem}  to="/art">ART</Link>
                    </h2>
                    </div>

                    <div style={container}>
                        <Route path="/" exact component={Home} />
                        <Route path="/art" component={Art} />
                        <Route path="/programs" component={Programs} />      
                    </div>

                </Router>
            </div>
        );
    }
}
export default Main;