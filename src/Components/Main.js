import React, { Component } from 'react';
import NavBar from "./NavBarSide";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Landing from "./Landing";
import Home from "./Home";
import Art from "./Art";
import Programs from "./Programs";

class Main extends Component {
    render(){
        return(
            <div id="main">
                <Landing />
            </div>
        );
    }
}
export default Main;