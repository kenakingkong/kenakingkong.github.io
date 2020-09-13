import React from 'react';
import {Typography} from "@material-ui/core";
import {sharedStyles, rectStyle} from "../Styles";

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
            </div>

            {/* Content */}  

        </div>
    )
}

export default About;