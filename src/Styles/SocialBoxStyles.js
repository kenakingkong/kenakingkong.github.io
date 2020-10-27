import {makeStyles} from "@material-ui/core";

export const socialBoxStyles = makeStyles(theme => ({
   root: {
      boxShadow: "2px 2px 10px 1px grey",
      borderRadius: "10px",
      backgroundColor: "#fff",
      margin: theme.spacing(10),
      padding: theme.spacing(2),
      zIndex: '100', 
      float: 'right', 
   },
}), {index: 1})