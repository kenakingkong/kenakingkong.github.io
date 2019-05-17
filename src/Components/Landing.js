import React, { Component } from 'react';
import Mountains from "../assets/videos/GeometricMountains_Medium.mp4";

class Landing extends Component {
    render(){

        /* center items */
        const headerTitle = {
            color: 'color value',
            textAlign: 'center',
            //alignSelf: 'center',
            height: '100%',
            width: '100%',
            marginTop: '20%',
            position: 'fixed',
            zIndex: '1',
            backgroundColor: 'transparent',
            opacity: '0.8',
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        };

        const backgroundVid = {
            height: '100%',
             width: '100%',
             top: '0px',
             padding: 'none',
             position: 'relative',
             opacity: '0.2',
             zIndex: '-1',
            
        };

        return (
            <div id="landing" >
                    <div style={headerTitle}>
                        <h1 style={{fontSize:'75px'}}>MAKENA KONG</h1>
                        {/*<button>ENTER</button>*/}
                    </div>
                <video className='videoTag' style={backgroundVid} autoPlay loop muted>
                    <source src={Mountains} type='video/mp4' />
                </video>

            </div>
        )
    }
}

export default Landing;