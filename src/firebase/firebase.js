import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCqXKY1DcYVIzbcYqNfXztqTnGksNIajg",
  authDomain: "expensify-1fac4.firebaseapp.com",
  databaseURL: "https://expensify-1fac4.firebaseio.com",
  projectId: "expensify-1fac4",
  storageBucket: "expensify-1fac4.appspot.com",
  messagingSenderId: "910808797410",
  appId: "1:910808797410:web:174a6ad1e0e439c9"
};

firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref()
  .set({
    name: "Tanisha Negi"
  });
