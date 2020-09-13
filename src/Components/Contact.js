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
            <img 
               alt="Picture of me in an orange dress."
               src="https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/orange-dress.png?alt=media&token=5a100664-8552-4452-872f-203f12120ec6" />

         </div>

      </div>
   )
}

export default Contact;