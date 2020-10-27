import React, {useState, useEffect} from 'react';
import firebase from '../Firebase.js';
import {Typography, Grid} from "@material-ui/core";
import {sharedStyles, theme, blobStyle} from "../Styles";

const background = {
    backgroundColor: "#D7E6EA",
    paddingBottom: theme.spacing(20)
}

// get profile summaries from firebase
// returns a promise
const getProfileSummaries = () => {
    let summaries = [];
    const summaryRef = firebase.database().ref('profileSummary');
    return summaryRef.once('value').then((snapshot) => {
        let items = snapshot.val();
        for (let item in items){
            summaries.push({
                id: item,
                title: items[item].title,
                details: items[item].details,
                color: items[item].color,
            })
        }
        return summaries;
    })
}

const About = () => {

    const classes = sharedStyles();
    const blobs = blobStyle()
    
    const [summaries, setSummaries] = useState([]);

    // load firebase data once
    useEffect(() => {
        getProfileSummaries()
            .then((res) => setSummaries(res))
            .catch((err) => console.log(err))
    }, []);

    return(
        <div id="about" style={background}
        className={classes.root}>
            <Grid container 
            justify="center" 
            alignItems="start"
            spacing={0} 
            >
                <Grid item xs={12} sm={4}>
                    <div className={classes.content}>
                
                        {/* page title */}
                        <Typography variant="h2" gutterBottom>
                            who am i, really?
                        </Typography>

                        {/* Paragraph */}
                        <Typography variant="body1" component="p" paragraph>
                            I’m <strong>Makena</strong> (pronouced muh·ken·nuh). I grew up in the San Francisco Bay Area and left only to attend <strong>Cal Poly</strong> San Luis Obispo to get a B.S in Computer Science and a Minor in Studio Art. Were you looking for my&nbsp;
                            <a 
                            className={`${classes.underlineMovesBlack} ${classes.underlineMagical}`}
                            target="_blank"
                            href="http://art-by-makena-kong.s3-website.us-east-2.amazonaws.com/">
                                <strong>art website</strong>
                            </a>
                            ? Oh you weren't? Well, then continue discovering about the computery part of my life. 
                            <br></br>
                        </Typography>
                    </div>
                </Grid>
                <Grid item 
                xs={12} sm={8}
                >
                    <div className={blobs.root}>
                        <div className={blobs.blob}>
                            <svg width="400" height="400" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M411.4 166.7C442.3 193.1 463.7 230.2 462.6 265.2 461.5 300.2 437.9 333.1 419.7 373.2 401.4 413.2 388.5 460.4 355.4 488.1 322.2 515.8 268.9 524 224.8 507.5 180.7 491.1 146 450 112.1 402.9 78.3 355.8 45.4 302.5 50.6 253.1 55.8 203.6 99.2 158 147.1 134.6 195 111.2 247.5 110.1 293.9 117.4 340.3 124.7 380.6 140.3 411.4 166.7Z" fill="#FF294C"/> 
                                <text x="180" y="240" className={blobs.title}>
                                    {summaries[0] && "full stack"}
                                </text> 
                            </svg>
                            <div className={blobs.marquee}>
                                <Typography variant="body2" className={blobs.description}>
                                    <span>
                                    {summaries[0] && Object.values(summaries[0].details)}</span>
                                </Typography>
                            </div>
                        </div>
                        <div className={blobs.blob}>
                            <svg width="400" height="400" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M449.5 177.2C485.4 225.8 500.5 287.5 483.9 334.8 467.4 382 419.3 414.9 370.7 433 322.1 451.1 273.1 454.4 221.4 438.8 169.8 423.3 115.5 388.9 103.6 343.1 91.8 297.3 122.4 240 162.2 190.6 202 141.2 251 99.6 303.9 96.5 356.8 93.4 413.6 128.7 449.5 177.2Z" fill="#FF6B68"/>  
                                <text x="220" y="215" className={blobs.title}>
                                    {summaries[1] && "front-end"}
                                </text>
                            </svg>
                            <div className={blobs.marquee}>
                                <Typography variant="body2" className={blobs.description}>
                                    <span>
                                        {summaries[1] && Object.values(summaries[1].details)}
                                    </span>
                                </Typography>
                            </div>
                        </div>
                        <div className={blobs.blob}>
                            <svg width="400" height="400" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M492.7 188.9C535.8 263.5 547.4 356.5 510 425.7 472.6 495 386.3 540.5 304.9 537.7 223.5 534.8 147 483.7 118.1 419.3 89.3 355 108 277.5 146.3 205.8 184.5 134 242.3 68 308.5 63.1 374.8 58.2 449.5 114.3 492.7 188.9Z" fill="#FE840E"/>  
                                <text x="260" y="236" className={blobs.title}>
                                    {summaries[2] && "UI/UX"}
                                </text> 
                            </svg>
                            <div className={blobs.marquee}>
                                <Typography variant="body2" className={blobs.description}>
                                    <span>
                                    {summaries[2] && Object.values(summaries[2].details)}
                                    </span>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;