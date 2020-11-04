import {createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
    createMuiTheme({
        typography: {
            fontFamily: "'Playfair display, Open sans'",
            h1: {
                fontFamily: "Playfair display",
                fontSize: '5rem',
                lineHeight: '1.25',
            },
            h2: { //page titles
                fontFamily: "Playfair display",
                fontSize: '3.25rem', 
            },
            h3: {
                fontFamily: "Open sans",
                fontSize: '4rem', 
                lineHeight: '1',
                fontWeight: '400',
            },
            h4: { //card titles
                fontFamily: "Playfair display",
                fontSize: '2rem', //40pc
            },
            subtitle1: {
                fontFamily: "Open sans",
                fontSize: '1.75rem', //20px
                lineHeight: '2',
            },
            subtitle2: {
                fontFamily: "Open sans",
                fontSize: '1.5rem', //20px
                lineHeight: '2',
            },
            body1: { 
                fontFamily: "Open sans",
                fontSize: '1.5rem', //16px
            },
            body2: {
                fontFamily: "Open sans",
                fontSize: '1.25rem', //14px
            },
            caption: {
                fontFamily: "Open sans",
                fontSize: '1rem', //12px
            },
        },
    })
);
