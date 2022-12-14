import { app } from "./firebaseConfig";
import {
  getFirestore,
  limit,
  query,
  collection,
  getDocs,
  onSnapshot,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

const firestore = getFirestore();

// tạo bản ghi

async function writeUserInfo(email, data) {
  const myInfo = doc(firestore, "userInfo/" + email);
  const docData = {
    ...data,
  };

  setDoc(myInfo, docData, { merge: true })
    .then(() => {
      console.log("This value has been written to the database");
    })
    .catch((error) => {
      console.log(`I got an error! ${error}`);
    });
}

async function readUserInfo(email) {
  const myInfo = doc(firestore, "userInfo/" + email);

  const mySnapshot = await getDoc(myInfo);
  if (mySnapshot.exists()) {
    const docData = mySnapshot.data();
    console.log(`My data is ${JSON.stringify(docData)}`);
  }
}

async function getUserInfo(email, setUser) {
  const myInfo = doc(firestore, "userInfo/" + email);
  const mySnapshot = await getDoc(myInfo);
  if (mySnapshot.exists()) {
    const docData = mySnapshot.data();
    console.log(`My data is ${JSON.stringify(docData)}`);
    setUser(docData);
    return console.log("Up user: " + JSON.stringify(docData));
  }
}

export { writeUserInfo, readUserInfo, getUserInfo };
