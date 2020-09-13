import {createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
 palette: {
   primary: {
     extra: '#C09ABA',
     light: '#A15995',
     main: '#6B4164',
     dark: '#442B40',
   },
   secondary: {
     extra: '#CDC743',
     light: '#CDA643',
     main: '#CD8543',
     dark: '#CD6443',
   }
 },
 typography: {
   fontFamily: "'DM serif display, Open sans'",
   h1: {
       fontFamily: "DM serif display",
       fontSize: '5.75rem', 
       fontWeight: 'bold'
   },
   h2: { //page titles
       fontFamily: "DM serif display",
       fontSize: '3.25rem', 
   },
   h3: { // large headline
       fontFamily: "Open sans",
       fontSize: '2.25rem', 
   },
   h4: { //card titles
       fontFamily: "DM serif display",
       fontSize: '2rem', //40pc
   },
   subtitle1: {
       fontFamily: "Open sans",
       fontSize: '1.75rem', //20px
   },
   body1: { 
       fontFamily: "Open sans",
       fontSize: '1.25rem', //16px
   },
   body2: {
       fontFamily: "Open sans",
       fontSize: '1.15rem', //14px
   },
   caption: {
       fontFamily: "Open sans",
       fontSize: '1rem', //12px
   },
 },
});

