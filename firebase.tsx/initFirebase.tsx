import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/performance";

const clientCredentials = {
  apiKey: "AIzaSyBBHaBUZu_aZ3pJ7mBHws4DeVotkPlLVBk",
  authDomain: "next-js-auth-45d4e.firebaseapp.com",
  projectId: "next-js-auth-45d4e",
  storageBucket: "next-js-auth-45d4e.appspot.com",
  messagingSenderId: "780311128737",
  appId: "1:780311128737:web:9d37b2604ec63f08151ee0",
  measurementId: "G-Y1QTHJLWRC",
};

export default function initFirebase() {
  
 /*  if (firebase.apps.length) firebase.initializeApp(clientCredentials);
  if (typeof window !== undefined) {
    if ("measurementId" in clientCredentials) {
      firebase.analytics();
      firebase.performance();
    }
  }
 */
}

// Initialize Firebase
const app = initializeApp(clientCredentials);
const db = getFirestore(app);

/* const realDB = getDatabase(app);
 */
export { initFirebase, db };
