import React from 'react';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import 
   {sharedStyles, accordionStyle, accordionSummaryStyle, accordionDetailStyle}
   from "../Styles";

const MyAccordion = (props) => {

   const classes = sharedStyles();
   const class_a = accordionStyle();
   const class_as = accordionSummaryStyle();
   const class_ad = accordionDetailStyle();

   const info = props.info;
   const expanded = props.expanded;
   const handleChange = props.handleChange;

   const id = `panel${info.id}`;
   const summary = info.title;
   const details = info.details;

   const Details = Object.keys(details).map((key, index) => 
      <div className={classes.itemRow}>
         <Typography 
            variant="caption" 
            className={classes.itemRowTitle}
            gutterBottom>
            {key.toUpperCase()}
         </Typography>
         {details[key]}
      </div>
   )

   return (
      <>
         <Accordion square 
            className={class_a.root}
            expanded={expanded === id} 
            onChange={handleChange(id)}>
            <AccordionSummary 
               className={class_as.root}
               aria-controls={`${id}d-content`} 
               id={`${id}d-content`}>
               <Typography variant="h4" gutterBottom
                  className={class_as.text}>
                  <span className={`${(expanded === id) 
                     ? class_as.activeText : ""}`}>
                        {summary}
                     </span>
               </Typography>
            </AccordionSummary>
            <AccordionDetails className={class_ad.root}>
               <Typography variant="body2" gutterBottom>
                  {Details}
               </Typography>
            </AccordionDetails>
         </Accordion>
      </>
   )
}

export default MyAccordion;