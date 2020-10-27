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
}), {index: 1})

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
  expanded: {},
  toggleDown : {
    transform: 'rotate(0deg)',
    transformOrigin: 'center center',
    paddingRight: theme.spacing(1),
  },
  toggleUp : {
    transform: 'rotate(-180deg)',
    transformOrigin: 'center center',
    paddingLeft: theme.spacing(1),
  }
}), {index: 1})

export const accordionDetailStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
  },
}), {index: 1})