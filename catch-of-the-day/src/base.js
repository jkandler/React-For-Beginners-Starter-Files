import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBrVRQIowabERopc5a04kzB8UqOMc85hhg",
    authDomain: "catch-of-the-day-julia-kandler.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-julia-kandler.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base; 
