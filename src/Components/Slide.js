import React from 'react';
import {Typography, IconButton} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import OpenInNew from '@material-ui/icons/OpenInNew';
import Code from '@material-ui/icons/Code';
import {slideStyle} from "../Styles";

const defaultDescription = 
   "Oops - I haven't written the description for this project yet."
const defaultImg = "https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/code.png?alt=media&token=6ea2b629-7b80-41bc-83ee-6834799f1616";

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

   const boxStyle = {
      backgroundImage: `url(${image})`,
      boxShadow: `0px 0px 20px 10px ${color}`
   }

   const iconStyle = {
      fill: '#fff',
   }

   return (
      <div>
         <Typography variant="h4" gutterBottom noWrap
            className={classes.cardTitle}>
            {name}
         </Typography>

         <Card className={classes.root} style={boxStyle}>
            <div className={classes.overlay}>
               {(link && code) &&
                  <CardActions className={classes.content}>
                     {link && 
                        <IconButton size="small" href={link} target={newPage}>
                           <OpenInNew style={iconStyle}/> 
                        </IconButton>}
                        <br></br>
                     {code && 
                        <IconButton size="small" href={code} target={newPage}>
                           <Code style={iconStyle}/> 
                        </IconButton>}
                  </CardActions>
               }

               <CardContent className={classes.content}>
                  <Typography variant="body1" component="p">
                     {description}
                  </Typography>
                  <br></br>
                  <Typography variant="caption" component="p">
                     {category}, {date}
                  </Typography>
               </CardContent>

            </div>
         </Card>
      </div>
   )
};

export default Slide;