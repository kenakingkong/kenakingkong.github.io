import {makeStyles} from "@material-ui/core"

export const skeletonStyle = makeStyles(theme => ({
  root: {
    
  },
  skeleton : {
    zIndex: '0', 
    transform: 'translateX(477.5%)',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      height: "100px",
    },
    [theme.breakpoints.up('md')]: {
      height: "300px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "100%",
    },
    [theme.breakpoints.up('xl')]: {
      height: "100%",
    },
  }
}), {index: 1})

export const personStyle = makeStyles(theme => ({
   root: {
      maxWidth: "60%",
      maxHeight: "100vh",
      transform: 'translateX(10%)',
      zIndex: '1',
      marginTop: 0,
      [theme.breakpoints.down('sm')]: {
        transform: 'translate(35%, -10%)',
      },
   },
   icon: {
     position: 'absolute',
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: theme.spacing(5),
      marginTop: 'auto',
      width: "100px"
   },
   person:{
      position: 'absolute',
      height: "800px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
         height: "500px",
       },
       [theme.breakpoints.up('md')]: {
         height: "650px",
       },
       [theme.breakpoints.up('lg')]: {
         height: "800px",
       },
       [theme.breakpoints.up('xl')]: {
         height: "950px",
       },
   }
}), {index: 1})

export const pointStyle = makeStyles(theme => ({
   root: {
      position: 'fixed',
      zIndex: 0,
   },
   pointLeft: {
      float: 'right',
      marginRight: 0,
   },
   pointRight: {
      float: 'left',
      marginLeft: 0,
   },
   pointDown: {
      
   },
   bigPointer: {
      [theme.breakpoints.down('sm')]: {
         height: "125px",
       },
       [theme.breakpoints.up('md')]: {
         height: "250px",
       },
       [theme.breakpoints.up('lg')]: {
         height: "400px",
       },
       [theme.breakpoints.up('xl')]: {
         height: "600px",
       },
      
   },
   littlePointer: {

   }
}), {index: 1})

export const blobStyle = makeStyles(theme => ({
  root: {
  },
  blob: {
    display: 'inline-block',
    
    filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))',
  },
  marquee: {
    overflow: 'hidden',
    position: 'absolute',
    transform: 'translate(75px, -205px)',
    width: '62%',
    height: '30px',
  },
  title: {
    fontFamily: "Playfair display",
    fontSize: '55px',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    hyphens: 'auto',
    width: '50%',
  },
  description: {
    fontFamily: 'Open Sans',
    fontSize: '20px',
    position: 'absolute',
    animation: `$marquee 10s linear infinite`,

    '& span': {
      float: 'left',
      width: '100%',
    }
  },
  '@keyframes marquee':  {
    '0%': {
      left: 0
    },
    '100%': {
      left: -500
    }
  },
}), {index: 1})
