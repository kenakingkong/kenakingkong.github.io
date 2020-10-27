import {makeStyles} from "@material-ui/core";

export const slideStyle = makeStyles(theme => ({
   root: {
     width: '500px',
     height: '350px',
     borderRadius: '5px',
     '&:hover': {
       width: '525px',
       height: '375px',
       transition: 'all 0.25s'
     }

   },
   overlay: {
    zIndex: '1',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    
    background: 'rgba(77, 77, 77, .9)',
    color: "#fff",
    opacity: '0',
    transition: 'all 0.5s',

    '&:hover': {
      opacity: '1',

      '& .head': {
        transition: 'all 0.5s',
        opacity: 1,
      },
      '& .subtitle': {
        transition: 'all 0.5s',
        opacity: 1,
      },
      '& .description': {
        transition: 'all 0.5s',
        opacity: 1,
      },
      '& .icon': {
        transition: 'all 0.5s',
        opacity: 1,
      }
    }
   },
   content: {
     padding: theme.spacing(5)
   },
   head: {
     fontSize: '40px',
     marginBottom: 0,
   },
   icon:{
     color: "#fefefe",
   }
 }), {index: 1});
 
 export const slideMenuStyle = makeStyles(theme => ({
   root: {
     paddingRight: theme.spacing(20),
     height: "375px",
     marginTop: theme.spacing(5)
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
 }), {index: 1})