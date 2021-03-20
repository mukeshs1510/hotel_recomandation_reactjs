import firebase from "firebase/app";
import "firebase/auth";
// import firebase from "firebase/app";
// import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC_9MPCVnTreuUmSTIlwlxCRK_Ii0aA1Ow",
  authDomain: "hotelmanagementsystemreact.firebaseapp.com",
  projectId: "hotelmanagementsystemreact",
  storageBucket: "hotelmanagementsystemreact.appspot.com",
  messagingSenderId: "775026232239",
  appId: "1:775026232239:web:75853dfc382ece4ecefd5a",
  measurementId: "G-PZ4FX13VSZ",
});

export const auth = app.auth();
export default app;
