import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyD_2cnPu6Dk690C2pc0YUXFuNHfbC5i6Ak",
  authDomain: "project3-b3725.firebaseapp.com",
  databaseURL: "https://project3-b3725.firebaseio.com",
  projectId: "project3-b3725",
  storageBucket: "project3-b3725.appspot.com",
  messagingSenderId: "465550095234"
};

const devConfig = {
  apiKey: "AIzaSyD_2cnPu6Dk690C2pc0YUXFuNHfbC5i6Ak",
  authDomain: "project3-b3725.firebaseapp.com",
  databaseURL: "https://project3-b3725.firebaseio.com",
  projectId: "project3-b3725",
  storageBucket: "project3-b3725.appspot.com",
  messagingSenderId: "465550095234"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

let db, auth;

if (typeof window !== "undefined") {
  // Gatsby build will fail otherwise
  db = firebase.database();
  auth = firebase.auth();
}

export { db, auth };
