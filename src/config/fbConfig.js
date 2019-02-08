import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBPyJf1shjdLMHVgf8OiXQz0TjxMu8ekk8",
    authDomain: "marioplan-c6884.firebaseapp.com",
    databaseURL: "https://marioplan-c6884.firebaseio.com",
    projectId: "marioplan-c6884",
    storageBucket: "",
    messagingSenderId: "829575639475"
  };

  firebase.initializeApp(config);
  // firebase.firestore().settings({timestampsInSnapshots: true})
export default firebase