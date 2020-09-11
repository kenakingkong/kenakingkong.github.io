import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {withStyles} from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
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
        link: "/#projects"
    },
    { 
        name: "ME",
        link: "/#about"
    }
];

const menuStyles = theme => ({
    root: {
      flexGrow: 1
    },
    boxStyle: {
        boxShadow: 'none',
        background: 'transparent',
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
        paddingTop: theme.spacing(8),
        position: 'fixed',
        backgroundColor: 'transparent',
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
                                </li>);

        return (
            <div className={classes.root}>
                <AppBar position="fixed" 
                        color="transparent"
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