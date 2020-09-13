import React from 'react';
import {Typography} from "@material-ui/core";
import {sharedStyles} from "../Styles";

const Contact = () => {

   const classes = sharedStyles();

   return(
      <div id="contact" className={classes.root}>
         <div className={classes.content}>

            {/* page title */}
            <Typography variant="h2" gutterBottom>
                  Contact Me
            </Typography>

            {/* content */}
            
         </div>

      </div>
   )
}

export default Contact;