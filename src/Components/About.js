import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles, Typography} from "@material-ui/core";
import Resume from "../assets/Makena_Kong_Resume.pdf";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container : {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(20),
    },
    title: {
        fontWeight: 'bold'
    },
    item : {
        marginRight: theme.spacing(3),
        float: 'left',
        width: 75,
        '&:hover':{
            fontWeight: 'bold'
        }
    }, 
    itemRow: {
        display: 'inline-block',
        marginBottom: theme.spacing(3),
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        float: 'left',
        marginTop: 6,
        marginRight: theme.spacing(3),
        backgroundColor: "#CDBF43"
    },
    link : {
        textDecoration: "none",
        color: "#3a3a3a",
        '&:hover':{
            fontWeight: 'bold'
        }
    },
    itemLink: {
        marginRight: theme.spacing(3),
        float: 'left',
        width: 75,
        textDecoration: "none",
        color: "#3a3a3a",
        '&:hover':{
            fontWeight: 'bold'
        }
    }
});


class About extends Component {
    render(){
        const { classes } = this.props;
        const newPage = "_blank";

        return (
            <div id="about" className={classes.root}>

                {/**page title */}
                <div className={classes.container}>
                    <Typography variant="h3" className={classes.title}>
                        ME
                    </Typography>
               </div>

                {/**personal description */}
               <div className={classes.container}>
                   <Typography variant="h4">
                       A CREATIVE PERSON THAT LIKES TO CREATE.
                   </Typography>
               </div>
                
                {/**links */}
                <div className={classes.container}>
                    <div className={classes.itemRow}>
                        <a className={classes.itemLink} target={newPage}
                            href="https://www.github.com/kenakingkong">
                            <Typography variant="h6" className={classes.itemLink}>
                                GITHUB 
                            </Typography>
                        </a>
                        <div className={classes.circle}></div>
                        <a className={classes.itemLink} target={newPage}
                            href="https://glitch.com/@kenakingkong">
                            <Typography variant="h6" className={classes.itemLink}>
                                GLITCH
                            </Typography>
                        </a>
                        <div className={classes.circle}></div>
                        <a className={classes.itemLink} target={newPage}
                            href="https://www.linkedin.com/in/makenakong">
                            <Typography variant="h6" className={classes.itemLink}>
                                LINKEDIN
                            </Typography>
                        </a>
                    </div>
                    <br></br>
                    <div className={classes.itemRow}>
                        <a className={classes.itemLink} target={newPage}
                            href={Resume} download="Makena Kong's Resume">
                            <Typography variant="h6" className={classes.itemLink}>
                                RESUME
                            </Typography>
                        </a>
                        <div className={classes.circle}></div>
                        <a className={classes.itemLink} target="_top"
                                href="mailto:kena.kong@gmail.com">
                            <Typography variant="h6" className={classes.itemLink}>
                                EMAIL
                            </Typography>
                        </a>
                    </div>
                    <br></br>
                    <div className={classes.itemRow}>
                        <a className={classes.itemLink} target={newPage}
                            href="https://www.instagram.com/maks_ugly_ass_art/">
                            <Typography variant="h6" className={classes.itemLink}>
                                ART
                            </Typography>
                        </a>
                    </div>
               </div>
            </div>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About);