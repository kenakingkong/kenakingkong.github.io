import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Typography, IconButton} from "@material-ui/core";
import { withStyles} from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

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
        cursor: 'pointer',
        '&:hover':{
            fontWeight: 'bold'
        }
    }, 
    optionLink: {
        textDecoration: 'none',
        color: '#000',
    },
    backButton: {
        marginBottom: theme.spacing(2),
        "&:hover": {
            fontWeight: 'bold',
            backgroundColor: 'transparent',
        }
    },
    backIcon: {
        marginRight: theme.spacing(2)
    }
  });

class Home extends Component {
    constructor(){
        super();
        this.state = {showingPets : false};
        this.showPets = this.showPets.bind(this);
    }

    //handle/toggle showing pets
    showPets(){
        this.setState(state => ({ showingPets : !this.state.showingPets}));
    }

    render(){
        const {classes} = this.props;

        return (
            <div id="home" className={classes.root}>
                {this.state.showingPets 
                    ?  
                    <div> 
                        <IconButton
                            className={classes.backButton}
                            size = {"small"} disableFocusRipple={true} disableRipple={true} 
                            onClick={() => {this.setState(state => ({showingPets : false}))}}
                        >
                            <KeyboardBackspaceIcon className={classes.backIcon} />
                            PICK SOMETHING ELSE
                        </IconButton>
                        <div className="glitch-embed-wrap" style={{height: 'auto', width: '100%'}}>
                            <iframe
                                src="https://glitch.com/embed/#!/embed/makenas-virtual-pet?path=README.md&previewSize=100"
                                title="makenas-virtual-pet on Glitch"
                                allow="geolocation; microphone; camera; midi; vr; encrypted-media"
                                style={{height: '600px', width: '600px', border: '0'}}>
                            </iframe>
                        </div>
                    </div>
                    : 
                    <div className={classes.quiz}>
                        <Typography variant="h3" className={classes.quizPrompt}>
                            PICK ONE:
                        </Typography>
                        <div className={classes.quizOption} 
                            onClick={() => this.showPets()}>
                            <Typography variant="h4" className={classes.quizOption}>
                                FEED MY PETS
                            </Typography>
                        </div> 
                        <Typography variant="h4" className={classes.quizOption}>
                            <Link to="/projects" className={classes.optionLink}>
                                VIEW MY PROJECTS
                            </Link>
                        </Typography> 
                        <Typography variant="h4" className={classes.quizOption}>
                            <Link to="/me" className={classes.optionLink}>
                                LEARN ABOUT ME
                            </Link>
                        </Typography> 
                    </div> }  
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);