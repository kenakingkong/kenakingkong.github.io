import React, {useState, useEffect} from 'react';
import firebase from '../Firebase.js';
import Typography from '@material-ui/core/Typography';
import {socialBoxStyles, sharedStyles} from "../Styles";
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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
       
       links[0].icon = <LinkedInIcon />;
       links[1].icon = <GitHubIcon  />
       links[2].icon = <LinkedInIcon  />
       links[3].icon = <LinkedInIcon />
       return links;
   })
}

const SocialBox = () => {

   const classes = socialBoxStyles();
   const links = sharedStyles();
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
      return profiles.map((profile,index) => {
         return (
            <a target={newPage} 
            href={profile.link}
            key={`makena-${profile.platform}`} 
            className={links.itemLink}> 
            {profile.platform}
            </a>
            /*<IconButton 
               key={`makena-${profile.platform}`} 
               target={newPage} 
               href={profile.link}
               size="medium" >
                  {profile.icon}
            </IconButton>*/
            
         )
      });
   }

   return (
      <div id="socialbox" className={classes.root}>
         <Typography variant="h4" gutterBottom>
            Let's be friends!
         </Typography>

         {createProfileLinks()}

      </div>
   );
};

export default SocialBox;