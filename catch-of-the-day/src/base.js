import Rebase from 're-base';
import firebase from 'firebase';

export const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCSQhntzonHiNNO4f3CjOMRILTWbe2uZhU",
	authDomain: "catch-of-the-day-kchirayus.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-kchirayus.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export default base;
