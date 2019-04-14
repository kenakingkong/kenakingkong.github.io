import React, {Component} from 'react';
import { Icon } from 'antd';
import myFace from "../assets/images/makena_flowers.jpg";

class Profile extends Component {
    render(){
        const newPage = "_blank";
        return(
            <div id="profile">
                <img src={myFace} style={{borderRadius:'50%', overflow:'hidden',height:250}} alt="Makena's face"/>
                <h3>About Me</h3>
                <p>
                    <b>About Me</b> <br></br>
                    blah blah blah blah blah
                    blah blah blah blah
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/makenakong/" taget={newPage}><Icon type="linkedin" /></a>
                    <span style={{padding:5}}></span>
                    <a href="https://github.com/kenakingkong"><Icon type="github" /></a>
                </p>
            </div>
        );
    }
}

export default Profile;