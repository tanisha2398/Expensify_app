import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expense").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expense").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expense").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// const valueChange = database.ref("expense").on("value", snapshot => {
//   const expense = [];
//   snapshot.forEach(childSnapshot => {
//     expense.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expense);
// });

// database
//   .ref("expense")
//   .once("value")
//   .then(snapshot => {
//     const expense = [];
//     snapshot.forEach(childSnapshot => {
//       expense.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expense);
//   });

// database.ref("expense").push({
//   description: "gas",
//   note: "for may month",
//   amount: 12345,
//   createdAt: 2345
// });

// database.ref("notes/-LkFhICQOmRnxJO3CeTS").remove();

// database.ref("notes").push({
//   title: "to do course",
//   body: "react ,node"
// });

// const firebaseNotes={
//     notes:{
//         asdf:{
//             title: "1st note",
//             body: "this is my 1st note"
//         },
//         zxcv:{
//             title: "another note",
//     body: "this is my 2nd  note"
//         }
//     }
// }

// const notes = [
//   {
//     id: "12",
//     title: "1st note",
//     body: "this is my 1st note"
//   },
//   {
//     id: "1fcgh2",
//     title: "another note",
//     body: "this is my 2nd  note"
//   }
// ];

// database.ref("notes").set(notes);

// const valueChange = database.ref().on("value", snapshot => {
//   console.log(
//     snapshot.val().name +
//       " is a " +
//       snapshot.val().job.title +
//       " at " +
//       snapshot.val().job.company
//   );
// });

// setTimeout(() => {
//   database.ref("name").set("himmu");
// }, 3500);

// setTimeout(() => {
//   database.ref("job/title").set("manager");
// }, 7500);

// const valueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);
// setTimeout(() => {
//   database.ref().off(onvolumechange);
// }, 7500);
// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// database
//   .ref("location/city ")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("error fetching data:", e);
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("data removed");
//   })
//   .catch(e => {
//     console.log("did not remove data", e);
//   });
// database
//   .ref()
//   .set({
//     name: "Tanisha Negi",
//     age: 21,
//     stressLevel: 6,
//     job: {
//       title: "software developer",
//       company: "Google"
//     },
//     isSingle: true,
//     location: {
//       city: "kota",
//       country: "India"
//     }
//   })
//   .then(() => {
//     console.log("data is saved!");
//   })
//   .catch(error => {
//     console.log("this failed:", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Udaipur"
// });

// database.ref("isSingle").set(null);
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
