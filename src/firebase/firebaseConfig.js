import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAoRMzthWWzMfZPHXzX6vQMxh5mAILPYQI",
  authDomain: "bookaudio-f05ab.firebaseapp.com",
  projectId: "bookaudio-f05ab",
  storageBucket: "bookaudio-f05ab.appspot.com",
  messagingSenderId: "228822190060",
  appId: "1:228822190060:web:d55dcf94dfdad915fba2c9",
  measurementId: "G-JKV4SBDD8B",
};

const app = initializeApp(firebaseConfig);

export { firebaseConfig, app };
