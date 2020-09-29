import {makeStyles} from "@material-ui/core"

export const skeletonStyle = makeStyles(theme => ({
  root: {
    transform: 'skewY(-11deg)',
  },
  skeleton : {
    zIndex: '2', 
    float: 'right', 
    marginRight: 0,
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
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
}))
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
}))

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
}))


export const brokenFaceStyle = makeStyles(theme => ({
   root: {},
   cutoutGridContainer:  {
      maxWidth: '25%',
      margin: '5%',
      padding: '0 10%',
    },
    cutoutGrid : {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      position: 'relative',
      gridTemplateRows: 'repeat(12, 1fr)'
    },
    gridItem: {
      img : {
          display: 'block',
          height: '100%'
      }
    } , 
    gridItemBg : {
      gridColumn: '1 / span 6',
      zIndex: 0,
      gridRow: '1 / -1'
    },
    gridItemPortraitHalf : {
      gridColumn: '11 / span 6',
      zIndex: '2',
      gridRow: '2 / -1'
    /*   clip-path: polygon(5% 10%, 27% 3%, 94% 25%, 84% 98%, 39% 98%, 11% 98%, 4% 66%, 4% 34%) */
    },
    gridItemPortraitNeck : {
    /*   clip-path: polygon(5% 3%, 96% 4%, 95% 95%, 6% 95%, 20% 30%) */
      gridColumn: '8 / span 4',
      gridRow: '4 / 10',
      zIndex: '3'
    },
    gridItemPortraitLeft : {
    /*   clip-path: polygon(10% 19%, 93% 15%, 90% 88%, 13% 92%) */
      gridColumn: '4 / span 4',
      gridRow: '4 / 10',
      zIndex: '4'
    },
    gridItemPortraitEye : {
    /*   clip-path: polygon(4% 13%, 84% 12%, 86% 34%, 80% 45%, 80% 76%, 10% 79%) */
      gridColumn: '3 / span 2',
      gridRow: '3 / 5',
      zIndex: '5',
      width: '82%',
      justifySelf: 'end'
    },
    gridItemPortraitShirt : {
    /*   clip-path: polygon(3% 2%, 50% 25%, 97% 8%, 97% 97%, 3% 98%) */
      gridColumn: '1 / span 2',
      gridRow: '5 / -1',
      zIndex: '6'
    },
    gridItemPortraitBg1 : {
    /*   clip-path: polygon(14% 13%, 84% 12%, 86% 34%, 90% 66%, 30% 76%, 10% 79%) */
      gridColumn:' 1 / span 2',
      gridRow: '1 / 4',
      zIndex: '8'
    },
    gridItemPortraitBg2: {
    /*   clip-path: polygon(9% 4%, 80% 0%, 100% 100%, 0% 100%) */
      gridColumn: '12 / span 8',
      gridRow: '5 / 10',
      zIndex: 8
    },
    
      size40:{
        height :' 40%'
      },
      size35:{
        height : '35%'
      },
      size30:{
        height : '30%'
      },
      size25:{
        height : '25%'
      },
      size20:{
        height : '20%'
      },
      size15:{
        height : '15%'
      },
      size10:{
        height : '10%'
      },
}))