import React, { Component } from 'react';
import MountainVideo from "../assets/videos/GeometricMountains_Medium.mp4";

class Landing extends Component {
    render(){

        const styles = {
            videoContainer : {
                position: 'relative',
            },
            videoStyle : {
                height: 'auto',
                width: '100%',
                backgroundSize: 'cover',
                verticalAlign: 'middle',
                opacity: '0.2',
                zIndex: '-1',
            },
            overlayDesc: {
                position: 'absolute',
                backgroundColor: 'transparent',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            mainTitle:{
                fontSize: 20
            }
        }

        return (
            <div id="landing" >

                <div style={styles.videoContainer}>
                    <video style={styles.videoStyle} autoPlay loop muted>
                        <source src={MountainVideo} type='video/mp4' />
                    </video>

                    <div style={styles.overlayDesc}>
                        <h2 style={styles.mainTitle}>MAKENA KONG</h2>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Landing;