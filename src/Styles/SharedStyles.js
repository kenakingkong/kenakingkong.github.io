import {makeStyles} from "@material-ui/core";

export const sharedStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
      paddingTop: theme.spacing(15),
   }, 
   fullHeight: {
      height: '95vh'
   },
   lessWidth: {
      width: '56%',
      [theme.breakpoints.down('sm')]: {
         width: '100%'
       },
       [theme.breakpoints.up('md')]: {
         width: '100%'
       },
       [theme.breakpoints.up('lg')]: {
         width: '56%'
       },
   },
   lessLessWidth: {
      width: '30%',
      [theme.breakpoints.down('sm')]: {
         width: '100%'
       },
       [theme.breakpoints.up('md')]: {
         width: '100%'
       },
       [theme.breakpoints.up('lg')]: {
         width: '30%'
       },
   },
   content: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),

      [theme.breakpoints.down('sm')]: {
         paddingLeft: theme.spacing(10),
         paddingRight: theme.spacing(10),
       },
       [theme.breakpoints.up('md')]: {
         paddingLeft: theme.spacing(15),
         paddingRight: theme.spacing(15),
       },
       [theme.breakpoints.up('lg')]: {
         paddingLeft: theme.spacing(15),
         paddingRight: theme.spacing(15),
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
  underlineMagical: {
    backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 0.2em',
    backgroundPosition: '0 87.5%',
  },
  underlineMoves: {
    color: "#E4DFCF",
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bolder',
      color: "#E4DFCF",
      backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 0.2em',
      backgroundPosition: '0 87.5%',
      transition: 'background-size 0.25s ease-in-out',
    },
  },
  underlineMovesBlack: {
    color: "#000",
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bolder',
      color: "#000",
      backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 0.2em',
      backgroundPosition: '0 87.5%',
      transition: 'background-size 0.25s ease-in-out',
    },
  },
 }), {index: 1})


 export const rectStyle = makeStyles(theme => ({
   rect: {
      height: 15,
      width: 10,
      display: "inline-block",
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
  },
 }), {index: 1})

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
 }), {index: 1})

