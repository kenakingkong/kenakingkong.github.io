import React from 'react';
import {Typography} from "@material-ui/core";
import {sharedStyles, skeletor, theme} from '../Styles';
import 'react-multi-carousel/lib/styles.css';

const background = {backgroundColor: "#2a2a2a"};
const name = {color: "#fefefe", marginBottom: '0'}
const header = {color: "#fefefe", marginBottom: '0', fontWeight: "bold"}
const text = {color: "#fefefe", marginBottom: theme.spacing(10)}


const Home = () => {

    const classes = sharedStyles();
    const skel = skeletor();

    return (
        <div id="home" style={background}
            className={`${classes.root} ${classes.fullHeight}`}>
            <div className={classes.content}>

                <Typography variant="h2" component="h1" 
                    style={name} gutterBottom>
                    Makena Kong
                </Typography>
                <Typography variant="subtitle2" style={text} gutterBottom>
                    she/her/hers
                </Typography>
                <Typography variant="h1" component="h2" 
                    style={header} gutterBottom>
                    WEB DEVELOPER & DESIGNER
                </Typography>
                <Typography className={classes.lessWidth}
                    variant="subtitle1" style={text} gutterBottom>
                    I am a full stack engineer who favors front end development and impactful UI/UX design. I focus on creativity, usability, and accessbility. 
                </Typography>

                <img 
                    className={skel.skeleton}
                    alt="Dancing Skeleton Gif"
                    src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/dancing-skeleton.gif?alt=media&token=1192dd3b-7e14-4fa0-bdca-3d6f50add2da" 
                    />
                    <img 
                    className={skel.skeleton}
                    alt="Dancing Skeleton Gif"
                    src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/dancing-skeleton.gif?alt=media&token=1192dd3b-7e14-4fa0-bdca-3d6f50add2da" 
                    />
                    <img 
                    className={skel.skeleton}
                    alt="Dancing Skeleton Gif"
                    src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/dancing-skeleton.gif?alt=media&token=1192dd3b-7e14-4fa0-bdca-3d6f50add2da" 
                    />
    
            </div>

        </div>
    );
}

export default Home;