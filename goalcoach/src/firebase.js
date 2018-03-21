import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBoifbg6RWOlnwoGQ5cFHdiZ5aBrxxBfCo",
  authDomain: "goalcoach-7372d.firebaseapp.com",
  databaseURL: "https://goalcoach-7372d.firebaseio.com",
  projectId: "goalcoach-7372d",
  storageBucket: "",
  messagingSenderId: "324538362367"
};

export const firebaseApp = firebase.initializeApp(config);