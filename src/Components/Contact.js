import React from 'react';
import {Typography} from "@material-ui/core";
import {sharedStyles, personStyle, pointStyle, theme} from "../Styles";

import Social from './Social';

const background = {
   backgroundColor: "#E4DFCF"
}
const images = {
   position: 'relative',
   height: '50vh'
}
const footer = {
   position: 'relative',
   bottom: theme.spacing(2),
   marginLeft: theme.spacing(5),
}

const Contact = () => {

   const classes = sharedStyles();
   const person = personStyle();
   const pointers = pointStyle();

   return(
      <div id="contact" style={background}
         className={`${classes.root} ${classes.fullHeight}`}>
         <div className={classes.content}>

            <Typography variant="h2" gutterBottom>
                  you can reach me!
            </Typography>

         </div>

         <div style={images}>
            <div className={pointers.pointRight}>
               <img 
                  className={pointers.bigPointer}
                  alt="Creation of adam - left hand pointing right"
                  src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/left-hand.png?alt=media&token=06acc167-3fdc-4ca0-92e8-62831f5cc673" 
               />
            </div>
            <div className={pointers.pointLeft}>
               <img 
                     className={pointers.bigPointer}
                     alt="Creation of adam - right hand pointing left"
                     src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/right-hand.png?alt=media&token=820bf112-db27-4f07-b3e3-306f13f1621d" 
                  />
            </div>

            <div className={person.root}>
               <img 
                  className={person.person}
                  alt="Picture of me in an orange dress."
                  src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/orange-dress.png?alt=media&token=f601fa07-5132-46d5-a063-3b31e71fc0bf" 
               />
            </div>
         </div>

        
         <div style={footer}>
            <Typography variant="h1" component="h2">
               <a 
               href="mailto:kena.kong@gmail.com"
               className={classes.underlineMovesBlack}>
                  EMAIL
               </a>
            </Typography>
            <Social />
         </div>

      </div>
   )
}

export default Contact;