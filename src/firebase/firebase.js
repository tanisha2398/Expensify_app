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
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("data removed");
//   })
//   .catch(e => {
//     console.log("did not remove data", e);
//   });
database
  .ref()
  .set({
    name: "Tanisha Negi",
    age: 21,
    isSingle: true,
    location: {
      city: "kota",
      country: "India"
    }
  })
  .then(() => {
    console.log("data is saved!");
  })
  .catch(error => {
    console.log("this failed:", error);
  });
database.ref("isSingle").set(null);
// database.ref().set("this is my day");

// database.ref("age").set(24);
// database.ref("location/city").set("jaipur");
// database
//   .ref("attribute")
//   .set({
//     height: 123,
//     weight: 58
//   })
//   .then(() => {
//     console.log("attribute is saved!");
//   })
//   .catch(e => {
//     console.log("error:", e);
//   });
// database.ref("attribute/weight").set(50);
