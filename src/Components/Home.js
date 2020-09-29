import React from 'react';
import {Typography, Button} from "@material-ui/core";
import {sharedStyles, skeletonStyle, theme} from '../Styles';
import 'react-multi-carousel/lib/styles.css';

const background = {backgroundColor: "#2a2a2a"};
const name = {color: "#fefefe", marginBottom: '0'}
const header = {color: "#fefefe", marginBottom: '0', fontWeight: "bold"}
const text = {color: "#fefefe", marginBottom: theme.spacing(10)}
const btn = {
    color: "#fefefe", 
    border: 'solid 1px #fefefe',
    borderRadius: '20px', 
    paddingLeft: theme.spacing(2), 
    paddingRight: theme.spacing(2)
}


const Home = () => {

    const classes = sharedStyles();
    const skel = skeletonStyle();

    return (
        <div id="home" style={background}
            className={`${classes.root} ${classes.fullHeight}`}>
            <div className={classes.content}>

                <Typography variant="h2" component="h1" style={name}>
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

                <Button variant="outlined" style={btn}>
                    <Typography variant="caption">
                        CONTACT ME
                    </Typography>
                </Button>

                {/** Diagonal dancing skeletons */}
                <div className={skel.root}>
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
                    <img 
                        className={skel.skeleton}
                        alt="Dancing Skeleton Gif"
                        src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/dancing-skeleton.gif?alt=media&token=1192dd3b-7e14-4fa0-bdca-3d6f50add2da" 
                        />
                </div>
    
            </div>

        </div>
    );
}

export default Home;