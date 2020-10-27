import React from 'react';
import {Typography, IconButton} from "@material-ui/core";
import OpenInNew from '@material-ui/icons/OpenInNew';
import Code from '@material-ui/icons/Code';
import {slideStyle} from "../Styles";

const defaultDescription = 
   "Oops - I haven't written the description for this project yet."
const defaultImg = "https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/projects%2Fcode.png?alt=media&token=466b6439-70ea-4941-8f7c-44f46efa0d83";

const Slide = (props) => {

   const classes = slideStyle();

   const newPage = "_blank";

   const info = props.info;
   const color = props.color;

   const name = info.name;
   const image = info.image || defaultImg;
   const description = info.description || defaultDescription;
   const code = info.code;
   const link = info.link;
   const date = info.date;
   const category = info.category;

   const img = {
      background: `url(${image})`,
      backgroundSize: 'cover',
      backgroundColor: 'black',
      backgroundPosition: 'center'
   }

   return (
      <div className={classes.root} style={img}>
         <div className={classes.overlay}>
            <div className={classes.content}>
               <Typography variant="h2" gutterBottom 
               className={classes.head}>
                  {name}
               </Typography>
               <Typography variant="subtitle" paragraph 
               className={classes.subtitle}>
                  {category}, {date}
               </Typography>
               <Typography variant="body2" gutterBottom 
               className={classes.description}>
                  {description}
               </Typography>
               {link && 
                  <IconButton className={classes.icon} 
                  href={link} target={newPage}>
                     <OpenInNew />
                  </IconButton>}
               {code && 
                  <IconButton className={classes.icon} 
                  href={code} target={newPage}>
                     <Code />
                  </IconButton>
               }
               </div>
         </div>
      </div>
   )
};

export default Slide;