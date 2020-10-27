import React, {useState, useEffect} from 'react';
import firebase from '../Firebase.js';
import Typography from '@material-ui/core/Typography';
import {sharedStyles, theme} from "../Styles";

const background = {
    backgroundColor: "#BFB5BE",
    paddingTop: theme.spacing(15), 
    paddingBottom: theme.spacing(15)
}

// get profile links from firebase
//returns a promimse
const getProfileLinks = () => {
    let links = [];
    const linksRef = firebase.database().ref('profileLinks');
    return linksRef.once('value').then((snapshot) => { 
        let items = snapshot.val();
        for (let item in items){
            links.push({
                id: item,
                platform: items[item].platform,
                link: items[item].link,
                color: items[item].color
            });
        }
        return links;
    })
 }

const Social = () => {
    const classes = sharedStyles();
    const [profiles, setProfiles] = useState([]);
 
    const newPage = "_blank";
 
    // load firebase data once
    useEffect(() => {
       getProfileLinks()
             .then((res) => setProfiles(res))
             .catch((err) => console.log(err))
    }, []);
 
    // generate profile link elements
    const createProfileLinks = () => {
       return profiles.map(profile => {
          return (
            <Typography variant="h1" component="h2">
                <a target={newPage} 
                href={profile.link}
                key={`makena-${profile.platform}`} 
                className={classes.underlineMovesBlack}> 
                    {profile.platform}
                </a>
             </Typography>
          )
       });
    }
 

    return(
        <div >
            {createProfileLinks()}
        </div>
    )
}

export default Social;