import React, {useState, useEffect} from 'react';
import firebase from '../Firebase.js';
import Typography from '@material-ui/core/Typography';
import {sharedStyles, rectStyle} from "../Styles";
import MyAccordion from './MyAccordion';

// get profile links from firebase
//returns a promimse
const getProfileLinks = () => {
    let links = [];
    const linksRef = firebase.database().ref('profileLinks');
    return linksRef.once('value').then((snapshot) => { 
        let items = snapshot.val();
        for (let item in items){
            links.push({
                id: item,
                platform: items[item].platform,
                link: items[item].link,
                color: items[item].color
            });
        }
        return links;
    })
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
                details: items[item].details
            })
        }
        return summaries;
    })
}


const About = () => {

    const classes = sharedStyles();
    const shapes = rectStyle();

    const newPage = "_blank";

    const [profiles, setProfiles] = useState([]);
    const [summaries, setSummaries] = useState([]);
    const [expanded, setExpanded] = useState(null);

    // load firebase data once
    useEffect(() => {
        getProfileLinks()
            .then((res) => setProfiles(res))
            .catch((err) => console.log(err))
        
        getProfileSummaries()
            .then((res) => setSummaries(res))
            .catch((err) => console.log(err))
    }, []);

    // expand a panel & close others
    const expand = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };

    // generate profile link elements
    const createProfileLinks = () => {
        return profiles.map((profiles,index) => 
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
    }
    
    // generate profile summary elements
    const createProfileSummaries = () => {
        return summaries.map((info, index) => 
            <MyAccordion 
                info={info} 
                expanded={expanded} 
                handleChange={expand} />
        )
    }

    return(
        <div id="about" className={`${classes.root} ${classes.fullHeight}`}>
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
                    {createProfileLinks()}
                </div>

                {/* Content */} 
                {createProfileSummaries()}
                
            </div>
        </div>
    )
}

export default About;