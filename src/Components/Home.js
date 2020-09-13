import React from 'react';
import {Typography} from "@material-ui/core";
import {sharedStyles} from '../Styles';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {

    const classes = sharedStyles();

    return (
        <div id="home" className={classes.root}>

            <div className={classes.content}>

                <Typography variant="h1" component="h2" gutterBottom>
                    Makena Kong
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    she/her/hers
                </Typography>
                <Typography variant="h3" gutterBottom>
                    A <strong>Full Stack Engineer</strong> who favors front end development and minimalist UI/UX design.
                </Typography>
            </div>

        </div>
    );
}

export default Home;