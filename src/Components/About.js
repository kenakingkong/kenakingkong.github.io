import React, {useState} from 'react';
import firebase from '../Firebase.js';
import Typography from '@material-ui/core/Typography';
import {sharedStyles, rectStyle} from "../Styles";
import MyAccordion from './MyAccordion';

const getProfileLinks = () => {
    let links = [];
    const linksRef = firebase.database().ref('profileLinks');
    linksRef.on('value', (snapshot) => { 
        let items = snapshot.val();
        for (let item in items){
            links.push({
                id: item,
                platform: items[item].platform,
                link: items[item].link,
                color: items[item].color
            });
        }
    })
    return links;
}

const getProfileSummaries = () => {
    let summaries = [];
    const summaryRef = firebase.database().ref('profileSummary');
    summaryRef.on('value', (snapshot) => {
        let items = snapshot.val();
        for (let item in items){
            summaries.push({
                id: item,
                title: items[item].title,
                details: items[item].details
            })
        }
    })
    return summaries;
}


const About = () => {

    const classes = sharedStyles();
    const shapes = rectStyle();

    const newPage = "_blank";

    const Profiles = getProfileLinks().map((profiles,index) => 
        <a className={classes.itemLink} 
            target={newPage}
            href={profiles.link}>
            <span
                className={shapes.rect} 
                style={{background: profiles.color}} />
            <Typography 
                variant="caption" 
                className={classes.itemLink}
                gutterBottom>
                {profiles.platform}
            </Typography>
        </a>
    );

    const [expanded, setExpanded] = useState(null);
    const expand = (panel) => (event, newExpanded) => {
       setExpanded(newExpanded ? panel : false);
     };

    const Summary = getProfileSummaries().map((info, index) => 
        <MyAccordion info={info} expanded={expanded} handleChange={expand} />
    )

    return(
        <div id="about" className={classes.root}>
            <div className={classes.content}>
                
                {/* page title */}
                <Typography variant="h2" gutterBottom>
                    About
                </Typography>

                {/* Profiles */}
                <div className={classes.itemRow}>
                    <Typography 
                        variant="caption" 
                        className={classes.itemRowTitle}
                        gutterBottom>
                        PROFILES
                    </Typography>
                    {Profiles}
                </div>

                {/* Content */} 
                {Summary}
                
            </div>
        </div>
    )
}

export default About;