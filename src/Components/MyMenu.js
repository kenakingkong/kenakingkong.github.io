import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';


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
        name: "ABOUT",
        link: "/#about"
    },
    {
        name: "PROJECTS",
        link: "/#projects"
    },
    {
        name: "CONTACT",
        link: "/#contact"
    }
];



const MyMenu = (props) => {

    const [showingMenu, setShowingMenu] = useState(false);

    const classes = props.classes;

    const menuItems = pages.map((page, index) =>
        <li className={classes.menuItem} 
            key={index+page} value={page} >
            <Link smooth to={page.link} 
            className={classes.menuItemLink} tabindex={index + 1}>
                <Button 
                edge="start" 
                aria-label="menu-item" 
                disableFocusRipple={true} 
                disableRipple={true} 
                startIcon={<DescriptionIcon 
                className={classes.menuButtonIcon} />}
                >
                    <Typography 
                    variant="body2" 
                    className={classes.item}> 
                        {page.name}
                    </Typography>
                </Button>
            </Link>
        </li>
    );

    return (
        <div className={classes.root}>
            <AppBar 
            position="fixed" 
            className={classes.boxStyle}
            >
                <Toolbar className={classes.blur}>

                    {/* File Icon and Button */}
                    <Button
                    tabindex={0}
                    edge="start" 
                    aria-label="menu"
                    disableFocusRipple={true} 
                    disableRipple={true}
                    onClick={() => setShowingMenu(!showingMenu)}
                    startIcon={showingMenu 
                        ? <FolderOpenIcon className={classes.menuButtonIcon} />
                        : <FolderIcon className={classes.menuButtonIcon} />
                        }
                    >
                        <Typography variant="body2" lassName={classes.item}>
                            FILES 
                        </Typography>
                    </Button>

                    <span className={classes.root}></span>
                
                    {/**brand name logo thing */}
                    <Link smooth to="/#home">
                        <img  
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