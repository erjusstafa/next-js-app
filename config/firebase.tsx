import { initializeApp } from "firebase/app";
import { env } from "process";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||  "AIzaSyBBHaBUZu_aZ3pJ7mBHws4DeVotkPlLVBk",
  authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||  "next-js-auth-45d4e.firebaseapp.com",
  projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "next-js-auth-45d4e",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCCKET ||  "next-js-auth-45d4e.appspot.com",
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||  "780311128737",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||  "1:780311128737:web:9d37b2604ec63f08151ee0",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT ||  "G-Y1QTHJLWRC",

};

export const firebaseApp = initializeApp(firebaseConfig);
