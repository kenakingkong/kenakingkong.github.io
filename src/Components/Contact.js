import React from 'react';
import {Typography, IconButton} from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {sharedStyles, personStyle, pointStyle} from "../Styles";

const Contact = () => {

   const classes = sharedStyles();
   const person = personStyle();
   const pointers = pointStyle();

   return(
      <div id="contact" className={classes.root}>
         <div className={classes.content}>

            {/* page title */}
            <Typography variant="h2" gutterBottom>
                  Contact Me
            </Typography>

            {/* content */}
            <div className={person.root}>
               <IconButton 
                  size="medium" 
                  className={person.icon}  
                  disableFocusRipple={true} 
                  disableRipple={true}
                  style={{backgroundColor: 'transparent'}}
                  href="mailto:kena.kong@gmail.com">
                  <MailOutlineIcon className={person.icon}/>
               </IconButton>
               <img 
                  className={person.person}
                  alt="Picture of me in an orange dress."
                  src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/orange-dress.png?alt=media&token=5a100664-8552-4452-872f-203f12120ec6" 
               />
            </div>

         </div>

      </div>
   )
}

export default Contact;