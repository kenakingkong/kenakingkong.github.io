import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {Animated} from 'react-animated-css';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import DescriptionIcon from '@material-ui/icons/Description';
import MyLogo from '../assets/mylogo.png';

//ACTIVE PAGES
const pages = [
    {
        name: "HOME",
        link: "/"
    },
    {
        name: "PROJECTS",
        link: "/projects"
    },
    { 
        name: "ME",
        link: "/me"
    }
];

const menuStyles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#fefefe'
    },
    boxStyle: {
        boxShadow: 'none',
    },
    menuButtonIcon: {
      marginRight: theme.spacing(1),
    },
    menuButton: {
      flexGrow: 1,
    },
    brand: {
        marginRight: theme.spacing(1)
    },
    dropDown: {
        
        position: 'absolute',
        backgroundColor: '#fefefe',
        zIndex: 1
    },
    menuItem: {
        listStyleType: 'none',
        marginLeft: theme.spacing(7),
    },
    menuItemLink: {
        textDecoration: 'none',
        color: '#000',
    },
    item:  {
        '&:hover' : {
            fontWeight: 'bold'
        }
    },
  });


// MAIN COMPONENT
class MyMenu extends Component{

    constructor() {
        super();
        this.state = {showMenu: false,}
        this.showMenu = this.showMenu.bind(this);
    }

    // handle menu toggle
    showMenu(event) {
        event.preventDefault();
        this.setState({
          showMenu: !this.state.showMenu,
        });
    }

    render(){
        const { classes } = this.props;

        // render menu items
        const menuItems = pages.map((page, index) =>
                            <Animated animationIn="bounceInDown" animationOut="fadeOut" 
                                        animationInDelay={(index*200).toString()} isVisible={true}>
                                <li className={classes.menuItem} key={index+page} value={page}>
                                    <Link to={page.link} className={classes.menuItemLink}>
                                        <IconButton edge="start" color="inherit" aria-label="menu-item" 
                                                    disableFocusRipple={true} disableRipple={true} 
                                                    style={{backgroundColor: 'transparent'}}>
                                            <DescriptionIcon className={classes.menuButtonIcon} />
                                            <Typography variant="h6" className={classes.item}> 
                                                {page.name}
                                            </Typography>
                                        </IconButton>
                                    </Link>
                                </li>
                            </Animated>);

        return (
            <div className={classes.root}>
                <AppBar position="static" 
                        color="inherit"
                        className={classes.boxStyle}
                >
                    <Toolbar>

                        {/* File Icon and Button */}
                        <div className={classes.menuButton} onClick={this.showMenu}>
                            <IconButton edge="start" color="inherit" aria-label="menu"
                                         disableFocusRipple={true} disableRipple={true}
                                         style={{backgroundColor: 'transparent'}}>
                                {this.state.showMenu 
                                    ? <FolderOpenIcon className={classes.menuButtonIcon} />
                                    : <FolderIcon className={classes.menuButtonIcon} />}
                                <Typography variant="h6" className={classes.item}> FILES </Typography>
                            </IconButton>
                        </div>

                        {/**brand name logo thing */}
                        <img className={classes.brand} src={MyLogo} alt="Makena Kong"/>

                    </Toolbar>
                </AppBar>

                {/** drop down menu*/}
                {this.state.showMenu ? 
                    <div className={classes.dropDown}>
                        {menuItems}
                    </div>
                : null}
            </div>
        );
    }
}

MyMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(menuStyles)(MyMenu);