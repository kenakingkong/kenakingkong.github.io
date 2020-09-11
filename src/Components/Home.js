import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Typography, IconButton} from "@material-ui/core";
import { withStyles} from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const styles = theme => ({
    root: {
        flexGrow: 1,
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
                <Typography variant="h1" component="h2" gutterBottom>
                    Makena Kong
                </Typography>
                <Typography variant="h4" gutterBottom>
                    she/her/hers
                </Typography>
                <Typography variant="h3" gutterBottom>
                    A <strong>Full Stack Engineer</strong> who favors front end development and minimalist UI/UX design.
                    <br></br>
                    <br></br>
                    She self-identifies as a <strong>Creative Coder</strong>.
                </Typography>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);