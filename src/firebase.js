import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDSiiXifOVtENYv86X6hRhucLZdASKlI_E",
    authDomain: "crud-udemy-react-29db5.firebaseapp.com",
    databaseURL: "https://crud-udemy-react-29db5.firebaseio.com",
    projectId: "crud-udemy-react-29db5",
    storageBucket: "crud-udemy-react-29db5.appspot.com",
    messagingSenderId: "162787955192",
    appId: "1:162787955192:web:9b4aa870f22506f6c7060d"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();

  export {db,auth}