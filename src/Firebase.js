// in production - only import the packages you need
//import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAPaGsvdoj7bijrMjOaN9e-r7HFPbLRzP8",
    authDomain: "personal-site-fcbfd.firebaseapp.com",
    databaseURL: "https://personal-site-fcbfd.firebaseio.com",
    projectId: "personal-site-fcbfd",
    storageBucket: "personal-site-fcbfd.appspot.com",
    messagingSenderId: "449122311180",
    appId: "1:449122311180:web:037e355d5a7cac0a31a229",
    measurementId: "G-N4VRYK912G"
}

firebase.initializeApp(config);

export default firebase;


/**
 * HOW TO WRITE TO DATABASE
 * const itemsRef = firebase.database().ref('field')
 * const item = { fieldname : content, fieldname: content}
 * itemsRef.push(item)
 * 
 * HOW TO READ FROM DATABASE
 * itemsRef.on('value', (snapshot) => { console.log(snapshot.val)})
 * **/