// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRdqZfYI7JDffvUyzQ57O238k94klwh6Y",
  authDomain: "recipe-cloud-3e6e2.firebaseapp.com",
  projectId: "recipe-cloud-3e6e2",
  storageBucket: "recipe-cloud-3e6e2.appspot.com",
  messagingSenderId: "768029857249",
  appId: "1:768029857249:web:5963473b2a0fc3bc3beea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBRdqZfYI7JDffvUyzQ57O238k94klwh6Y",
//   authDomain: "recipe-cloud-3e6e2.firebaseapp.com",
//   projectId: "recipe-cloud-3e6e2",
//   storageBucket: "recipe-cloud-3e6e2.appspot.com",
//   messagingSenderId: "768029857249",
//   appId: "1:768029857249:web:5963473b2a0fc3bc3beea0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);