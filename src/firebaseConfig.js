// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIdvJ_QqqJ-XHIMAYm0LdI0kEIz5Hu75o",
  authDomain: "blog0-63587.firebaseapp.com",
  projectId: "blog0-63587",
  storageBucket: "blog0-63587.appspot.com",
  messagingSenderId: "1049486458028",
  appId: "1:1049486458028:web:b6bedf451e6d117700b309"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)