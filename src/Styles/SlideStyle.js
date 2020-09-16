import {makeStyles} from "@material-ui/core";

export const slideStyle = makeStyles(theme => ({
   root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    height: '350px',
    width: '450px',
    borderRadius: '3px',
    backgroundSize: 'cover',
    backgroudPosition: 'center',
    backgroundRepeat: 'no-repeat',
   },
   cardTitle: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
   },
   overlay: {
     color: 'transparent',

     '.icon': {
      fill: 'transparent'
    },

    '&:hover, &:focus':{
      height: '100%',
      borderRadius: '2.5px',
      backgroundColor: 'rgba(0,0,0,0.7)',
      color: '#fff',

      '.icon': {
        fill: '#fff'
      }
    },
  },
  content: {
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(0),
    marginBottom: theme.spacing(0),
  }
 }));
 
 export const slideMenuStyle = makeStyles(theme => ({
   root: {
     paddingRight: theme.spacing(20),
   },
   itemClass: {
     paddingLeft: theme.spacing(3),
     paddingRight: theme.spacing(3),

     [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
   }
 }))