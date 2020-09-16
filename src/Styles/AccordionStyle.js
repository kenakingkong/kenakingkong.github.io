import {makeStyles} from "@material-ui/core";

export const accordionStyle = makeStyles(theme => ({
  root: {
    width: '50%',
    border: 'none',
    boxShadow: 'none',
    padding: theme.spacing(0),
    background: 'transparent',

    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
}))

export const accordionSummaryStyle = makeStyles(theme => ({
  root: {
    borderBottom: 'none',
    marginBottom: -1,
    padding: theme.spacing(0),
    minHeight: 50,

    '&$expanded': {
      minHeight: 50,
    },
  },
  content: {
    '&$expanded': {
      margin: theme.spacing(0),
    },
  },
  text: {
    fontWeight:'normal',
    '&:hover': {
      fontWeight: 'bold'
    },
  },
  activeText: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationColor: '#CD6443',
  },
  expanded: {},
}))

export const accordionDetailStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
  },
}))