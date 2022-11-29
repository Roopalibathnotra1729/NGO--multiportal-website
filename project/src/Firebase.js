import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClAtPqBKSQ9u1N_XSH_piFyycC9YoUaOA",
    authDomain: "ourngo-c710e.firebaseapp.com",
    projectId: "ourngo-c710e",
    storageBucket: "ourngo-c710e.appspot.com",
    messagingSenderId: "510060012841",
    appId: "1:510060012841:web:87279e3abf230457a70338"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();

export { db, auth, storage };

