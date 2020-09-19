import React, {useState, useEffect} from 'react';
import firebase from '../Firebase.js';
import Typography from '@material-ui/core/Typography';
import {sharedStyles, theme} from "../Styles";
import MyAccordion from './MyAccordion';

const background = {
    backgroundColor: "#BFD6DD",
    paddingTop: theme.spacing(20), 
    paddingBottom: theme.spacing(15)
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
    
    const [summaries, setSummaries] = useState([]);
    const [expanded, setExpanded] = useState(null);

    // load firebase data once
    useEffect(() => {
        getProfileSummaries()
            .then((res) => setSummaries(res))
            .catch((err) => console.log(err))
    }, []);

    // expand a panel & close others
    const expand = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
    
    // generate profile summary elements
    const createProfileSummaries = () => {
        return summaries.map((info, index) => 
            <MyAccordion 
                key={`accordion-${index}`}
                info={info} 
                expanded={expanded} 
                handleChange={expand} />
        )
    }

    return(
        <div id="about" style={background}
            className={classes.root}>
            <div className={classes.content}>
                
                {/* page title */}
                <Typography variant="h2" gutterBottom>
                    About
                </Typography>

                {/* Paragraph */}
                <Typography className={classes.lessLessWidth} 
                    variant="body1" component="p" gutterBottom>
                    I’m <strong>Makena</strong> (pronouced muh·ken·nuh). I grew up in the San Francisco Bay Area and left only to attend <strong>Cal Poly</strong> San Luis Obispo to get a B.S in Computer Science and a Minor in Studio Art. 
                    <br></br>
                </Typography>

                {/* Accordion */} 
                {createProfileSummaries()}
                
            </div>
        </div>
    )
}

export default About;