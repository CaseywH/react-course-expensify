import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//setup 'expenses' with three items (description, note, amount, createdAt)

// const expenses = [
//   {
//     description: "hotel room",
//     note: "wild and free conference",
//     amount: 15000,
//     createdAt: 23453298
//   },
//   {
//     description: "rental car",
//     note: "wild and free conference",
//     amount: 4241,
//     createdAt: 23455555
//   },
//   {
//     description: "snacks and dining",
//     note: "wild and free conference",
//     amount: 7800,
//     createdAt: 23453656
//   }
// ];

// child_removed

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// expenses.forEach(element => {
//   database.ref("expenses").push(element);
// });

// database.ref("notes/-LYmZpdgzWRKRR-eT_uh").remove();

// database.ref("notes").push({
//   title: "course topics",
//   body: "React, angular, vue, python"
// });

// const firebaseNotes = {
//   notes: {
//     aaganav: {
//       title: "First note",
//       body: " is my first note"
//     },
//     adlkfgnSVGAnimatedAngle: {
//       title: "second note",
//       body: " is my second note"
//     }
//   }
// };

// const notes = [
//   {
//     id: 12,
//     title: "First note",
//     body: " is my first note"
//   },
//   {
//     id: 123,
//     title: "second note",
//     body: " is my second note"
//   }
// ];

// database.ref("notes").set(notes);

// const onValueChange = database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(
//     `${val.name} is a ${val.occupation.title} at ${val.occupation.company}.`
//   );
// });

// setTimeout(() => {
//   database.ref().update({
//     "occupation/title": "Boss"
//   });
// }, 3500);

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => {
//     console.log(`error fetching data ${err.message}`);
//   });

// database
//   .ref()
//   .set({
//     name: "Casey Heinemeyer",
//     stressLevel: 4,
//     age: 34,
//     occupation: {
//       title: "Project Manager",
//       company: "Google"
//     },
//     location: {
//       city: "Vacaville",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch(err => {
//     console.log(`this failed ${err}`);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "occupation/company": "Amazon",
//   "location/city": "Seattle"
// });
// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("data removed");
//   })
//   .catch(err => {
//     console.log(`error: ${err.message}`);
//   });
