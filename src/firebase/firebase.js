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

const database = firebase.database();

database.ref().set({
  name: "Tanisha Negi",
  age: 21,
  isSingle: true,
  location: {
    city: "kota",
    country: "India"
  }
});

// database.ref().set("this is my day");

database.ref("age").set(24);
database.ref("location/city").set("jaipur");
database.ref("attribute").set({
  height: 123,
  weight: 58
});
// database.ref("attribute/weight").set(50);
