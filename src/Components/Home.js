import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {Typography, Grid} from "@material-ui/core";
import {sharedStyles, skeletonStyle, theme} from '../Styles';
import 'react-multi-carousel/lib/styles.css';

const header = { 
    fontWeight: "semi-bold", 
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    hyphens: 'auto',
    lineHeight: '1.25',
    fontSize: '80px'
}

const smallText = {
    fontSize: '50px'
}

const moreGutter = {
    marginBottom: theme.spacing(6)
}

const leftBackground = {
    backgroundColor: "#E4DFCF"
}
const rightBackground = {
    backgroundColor: "#000"
}

const leftDiv = {    
    color: "#000",
    paddingTop: theme.spacing(20),
    marginLeft : theme.spacing(10),
    marginRight : theme.spacing(5),
}
const rightDiv = {
    color: "#E4DFCF",
    paddingTop: theme.spacing(40),
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(5),
}

const Home = () => {

    const classes = sharedStyles();
    const skel = skeletonStyle();

    return (
        <Grid container 
        id="home"
        justify="center" 
        alignItems="start"
        spacing={0} 
        >
            <Grid item 
            xs={12} sm={8}
            className={classes.fullHeight}
            style={leftBackground}
            >
                <div style={leftDiv}>
                    <Typography variant="h2" component="h1" style={header} >
                        Hi, I'm Makena Kong 
                        <span style={smallText}> (she/her)</span>. 
                        I'm a&nbsp;
                        <span className={classes.underlineMagical}>
                        Web Developer and Designer</span>&nbsp;
                        based in the San Francisco Bay Area.
                    </Typography>
                </div>
                <div className={skel.root}>
                    <img 
                    className={skel.skeleton}
                    alt="Dancing Skeleton Gif"
                    src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/dancing-skeleton.gif?alt=media&token=1192dd3b-7e14-4fa0-bdca-3d6f50add2da" 
                    />
                </div>
            </Grid>
            <Grid 
            item xs={12} sm={4}
            className={classes.fullHeight}
            style={rightBackground}
            >
                <div style={rightDiv}>
                    <Typography variant="h1" component="h2" style={moreGutter}>
                        <Link smooth to="/#about" 
                        className={classes.underlineMoves}>
                        who am i, really?
                        </Link>
                    </Typography>
                    <Typography variant="h1" component="h2" style={moreGutter}>
                        <Link smooth to="/#projects" 
                        className={classes.underlineMoves}>
                            what have i done?
                        </Link>
                    </Typography>
                    <Typography variant="h1" component="h2" style={moreGutter}>
                        <Link smooth to="/#contact" 
                        className={classes.underlineMoves}>
                            get in touch with me!
                        </Link>
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default Home;