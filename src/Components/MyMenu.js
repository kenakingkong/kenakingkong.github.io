import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {menuStyles} from '../Styles'

import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import DescriptionIcon from '@material-ui/icons/Description';
import MyLogo from '../Assets/mylogo.png';

//ACTIVE PAGES
const pages = [
    {
        name: "HOME",
        link: "/#home"
    },
    {
        name: "PROJECTS",
        link: "/#projects"
    },
    { 
        name: "ABOUT",
        link: "/#about"
    },
    {
        name: "CONTACT",
        link: "/#contact"
    }
];


const MyMenu = () => {

    const [showingMenu, setShowingMenu] = useState(false);

    const classes = menuStyles();

    const menuItems = pages.map((page, index) =>
        <li className={classes.menuItem} key={index+page} value={page}>
            <Link to={page.link} className={classes.menuItemLink}>
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu-item" 
                    disableFocusRipple={true} 
                    disableRipple={true} 
                    style={{backgroundColor: 'transparent'}}
                >
                    <DescriptionIcon 
                        className={classes.menuButtonIcon} />

                    <Typography 
                        variant="body2" 
                        className={classes.item}> 
                        {page.name}
                    </Typography>
                </IconButton>
            </Link>
        </li>
    );

    return (
        <div className={classes.root}>
            <AppBar position="fixed" 
                    color="transparent"
                    className={classes.boxStyle}
            >
                <Toolbar>

                    {/* File Icon and Button */}
                    <div 
                        className={classes.menuButton} 
                        onClick={() => setShowingMenu(!showingMenu)}>
                        <IconButton
                            edge="start" 
                            color="inherit" 
                            aria-label="menu"
                            disableFocusRipple={true} 
                            disableRipple={true}
                            style={{backgroundColor: 'transparent'}}
                        >
                            {showingMenu 
                                ? 
                                <FolderOpenIcon 
                                    className={classes.menuButtonIcon} />
                                : 
                                <FolderIcon 
                                    className={classes.menuButtonIcon} />}
                            <Typography 
                                variant="body2" 
                                className={classes.item}>
                                FILES 
                            </Typography>
                        </IconButton>
                    </div>

                    {/**brand name logo thing */}
                    <Link to="/#home" className={classes.menuItemLink}>
                        <img 
                            className={classes.brand} 
                            src={MyLogo} 
                            alt="Makena Kong"/>
                    </Link>


                </Toolbar>
            </AppBar>

            {/** drop down menu*/}
            {showingMenu ? 
                <div className={classes.dropDown}>
                    {menuItems}
                </div>
            : null}
        </div>
    );
}

export default MyMenu;