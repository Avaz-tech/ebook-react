 import firebase from 'firebase//app';
 import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyDSHNBNPp3C2HXV9C5OK7GVfn97hwiM1fM",
    authDomain: "e-book-react.firebaseapp.com",
    projectId: "e-book-react",
    storageBucket: "e-book-react.appspot.com",
    messagingSenderId: "763959395177",
    appId: "1:763959395177:web:0bdad98b1945adf01cf3f8"
  };

  // Iitialize Firebase

   firebase.initializeApp(firebaseConfig)

   //Intitilize Services

   const projectFirestore =  firebase.firestore()

   export { projectFirestore }