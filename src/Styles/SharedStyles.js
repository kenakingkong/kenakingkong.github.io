import {makeStyles} from "@material-ui/core";

export const sharedStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
      paddingTop: theme.spacing(15),
   }, 
   fullHeight: {
      height: '95vh'
   },
   content: {
      paddingLeft: theme.spacing(30),
      paddingRight: theme.spacing(30),

      [theme.breakpoints.down('sm')]: {
         paddingLeft: theme.spacing(10),
         paddingRight: theme.spacing(10),
       },
       [theme.breakpoints.up('md')]: {
         paddingLeft: theme.spacing(20),
         paddingRight: theme.spacing(20),
       },
       [theme.breakpoints.up('lg')]: {
         paddingLeft: theme.spacing(30),
         paddingRight: theme.spacing(30),
       },
   },
   itemRow: {
      display: 'inline-block',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "100%"
   },
   itemRowTitle: {
      marginRight: theme.spacing(5),
      display: 'inline-block',
      color: '#3a3a3a',
      fontWeight: 'bold',
      opacity: '0.75',
      [theme.breakpoints.down('sm')]: {
         width: "100%"
       },
   },
   itemLink: {
      marginRight: theme.spacing(2),
      display: 'inline-block',
      textDecoration: "none",
      cursor: "pointer",
      color: "#3a3a3a",
      '&:hover':{
          fontWeight: 'bold'
      },
  },
 }))


 export const rectStyle = makeStyles(theme => ({
   rect: {
      height: 15,
      width: 10,
      display: "inline-block",
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
  },
 }))

 export const circleStyle = makeStyles(theme => ({
  circle: {
      width: 15,
      height: 15,
      borderRadius: 7.5,
      display: "inline-block",
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
  },
  circleSelected: {
      width: 9,
      height: 9,
      borderRadius: 9,
      display: "inline-block",
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      backgroundColor: "#fefefe",
  },
 }))

