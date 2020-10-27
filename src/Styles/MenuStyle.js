import {makeStyles} from "@material-ui/core";

export const menuStyles = makeStyles(theme => ({
   root: {
     flexGrow: 1,
   },
   blur:{
    backdropFilter: 'blur(2px)'
   },
   boxStyle: {
       boxShadow: 'none',
       background: 'transparent',
   },
   menuButtonIcon: {
     marginRight: theme.spacing(1),
     flexGrow: 1
   },
   dropDown: {
       paddingTop: theme.spacing(8),
       position: 'fixed',
       backgroundColor: 'transparent',
       zIndex: 1,
       backdropFilter: 'blur(5px)'
   },
   menuItem: {
       listStyleType: 'none',
       marginLeft: theme.spacing(7),
   },
   menuItemLink: {
       textDecoration: 'none',
       color: '#000',
   },
   item:  {
       '&:hover' : {
           fontWeight: 'bold'
       }
   },
 }), {index: 1});