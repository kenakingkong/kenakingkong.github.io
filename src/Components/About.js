import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {sharedStyles, rectStyle} from "../Styles";
import MyAccordion from './MyAccordion';

const profileInfo = [
    {
        platform: 'LINKEDIN',
        link: 'https://www.linkedin.com/in/makenakong',
        color: '#CD6443'
    },{
        platform: 'GITHUB',
        link: 'https://www.github.com/kenakingkong',
        color: '#CD8543'
    }, {
        platform: 'GLITCH',
        link: 'https://www.glitch.com/@kenakingkong',
        color: '#CDA643'
    }, {
        platform: 'MEDIUM',
        link: 'https://www.medium.com/@makenakong',
        color: '#CDC743'
    }
]

const profileSummary = [
    {
        id: 0,
        title: "Full Stack Development",
        details: {
            languages: "Javascript | Python | Node | GraphQL",
            cloud: "AWS | GCP",
            other: "SQL | Git| | HTTP | REST | LINUX"
        }
    },
    {
        id: 1,
        title: "Front end Development",
        details: {
            frameworks: "React | Vue | Flask |Django | Shiny",
            libaries: "Bootsrap | Material UI | Bulma",
            languages: "Javascript | HTML | CSS | JQuery"
        }
    },
    {
        id: 2,
        title: "UI/UX Development & Design",
        details: {
            tools: "Figma | Adobe XD | Gimp",
            skills: "Visual Design | Copywriting "
        }
    },
    {
        id: 3,
        title: "Art & Illustration",
        details: {
            painting: "oil | acrylic | watercolor",
            speciality: "dog portraiture"
        }
    },
]

const About = () => {
    const classes = sharedStyles();
    const shapes = rectStyle();

    const newPage = "_blank";

    const Profiles = profileInfo.map((profiles,index) => 
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

    const Summary = profileSummary.map((info, index) => 
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