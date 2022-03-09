import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBHaBUZu_aZ3pJ7mBHws4DeVotkPlLVBk",
  authDomain: "next-js-auth-45d4e.firebaseapp.com",
  projectId: "next-js-auth-45d4e",
  storageBucket: "next-js-auth-45d4e.appspot.com",
  messagingSenderId: "780311128737",
  appId: "1:780311128737:web:9d37b2604ec63f08151ee0",
  measurementId: "G-Y1QTHJLWRC",

};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
