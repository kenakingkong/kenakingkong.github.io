import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles, Typography} from "@material-ui/core";

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
                        <div className={classes.item}>
                            <a  className={classes.link} target={newPage}
                                href="https://www.github.com/kenakingkong">
                                <Typography variant="h6">GITHUB </Typography>
                            </a>
                        </div>
                        <div className={classes.circle}></div>
                        <div className={classes.item}>
                            <a  className={classes.link} target={newPage}
                                href="https://glitch.com/@kenakingkong">
                                <Typography variant="h6">GLITCH</Typography>
                            </a>
                        </div>
                        <div className={classes.circle}></div>
                        <div className={classes.item}>
                            <a  className={classes.link} target={newPage}
                                href="https://www.linkedin.com/in/makenakong">
                                <Typography variant="h6">LINKEDIN</Typography>
                            </a>
                        </div>
                   </div>
                   <br></br>
                   <div className={classes.itemRow}>
                        <div className={classes.item}>
                            <a  className={classes.link} target={newPage}
                                href="/src/assets/Makena_Kong_Resume.pdf" download="Makena Kong's Resume">
                                <Typography variant="h6">RESUME</Typography>
                            </a>
                        </div>
                        <div className={classes.circle}></div>
                        <div className={classes.item}>
                            <a  className={classes.link} target="_top"
                                    href="mailto:kena.kong@gmail.com">
                                <Typography variant="h6">EMAIL</Typography>
                            </a>
                        </div>
                    </div>
                    <br></br>
                    <div className={classes.itemRow}>
                            <div className={classes.item}>
                                <Link to="/art" className={classes.link}>
                                    <Typography variant="h6">ART</Typography>
                                </Link>
                            </div>
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