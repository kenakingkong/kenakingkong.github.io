import React from 'react';
import {brokenFaceStyle} from "../Styles";

const images = {
   Bg: {
      src: "https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/brokenface%2Fface.jpg?alt=media&token=89a96f0b-09b9-4795-b830-e98dfb5a69fe",
      alt: "Full image of my face",
      size: "classes.size40",
   },

}

const BrokenFace = () => {

   const classes = brokenFaceStyle();

   return(
      <div className={classes.cutoutGridContainer} aria-hidden>

        <div className={classes.cutoutGridContainer} >
          <div className={`${classes.gridItem} ${classes.gridItemBg}`}>
            <img 
               src={images.Bg.src} 
               alt={images.Bg.alt} 
               style={{height: '20%', width: 'auto'}}/>
         </div>
      </div>
      </div>
   )

}

export default BrokenFace;