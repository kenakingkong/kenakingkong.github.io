import React, {useState, useEffect} from 'react';
import firebase from '../Firebase.js';
import Typography from '@material-ui/core/Typography';
import {sharedStyles, theme} from "../Styles";

const background = {
    backgroundColor: "#BFB5BE",
    paddingTop: theme.spacing(15), 
    paddingBottom: theme.spacing(15)
}

// get profile summaries from firebase
// returns a promise
const getTestimonials = () => {
    let testimonials = [];
    const testiRef = firebase.database().ref('testimonials');
    return testiRef.once('value').then((snapshot) => {
        let items = snapshot.val();
        for (let item in items){
            testimonials.push({
                id: item,
                content: items[item].content,
                author: items[item].author,
                position: items[item].position,
                company: items[item].company,
                date: items[item].date,
            })
        }
        return testimonials;
    })
}

const Testimonials = () => {

    const classes = sharedStyles();
    
    /*

    const [testimonials, setTestimonials] = useState([]);

    // load firebase data once
    useEffect(() => {
        getTestimonals()
            .then((res) => setTestimonials(res))
            .catch((err) => console.log(err))
    }, []);

    // create Testimonials 
    const createTestimonials = () => {}

    */

    return(
        <div id="testimonials" style={background}
            className={classes.root}>
            <div className={classes.content}>
                
                {/* page title */}
                <Typography variant="h2" gutterBottom>
                    Testimonials
                </Typography>

                {/* Paragraph */}
                <Typography className={classes.lessLessWidth} 
                    variant="body1" component="p" gutterBottom>
                    This is a quote from whoever and whenever
                </Typography>
                
            </div>
        </div>
    )
}

export default Testimonials;