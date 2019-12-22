import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import {Typography} from "@material-ui/core";
import { withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    quiz: {
        marginTop: theme.spacing(10),
    },
    quizPrompt: {
        marginBottom: theme.spacing(5),
        fontWeight: 'bold',
    },
    quizOption: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold'
    }, 
    optionLink: {
        textDecoration: 'none',
        color: '#000',
    }
  });

class Home extends Component {
    render(){
        const {classes} = this.props;

        return (
            <div id="home" className={classes.root}>
                <div className={classes.quiz}>
                    <Typography variant="h3" className={classes.quizPrompt}>
                        PICK ONE:
                    </Typography>
                    <div className={classes.quizOption}>
                        <Typography variant="h5" className={classes.quizOption}>
                            FEED MY PETS
                        </Typography>
                    </div> 
                    <Typography variant="h5" className={classes.quizOption}>
                        <Link to="/projects" className={classes.optionLink}>
                            VIEW MY PROJECTS
                        </Link>
                    </Typography> 
                    <Typography variant="h5" className={classes.quizOption}>
                        <Link to="/me" className={classes.optionLink}>
                            LEARN ABOUT ME
                        </Link>
                    </Typography> 
                </div>   
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);