import { getAuth } from "firebase/auth";
import { firebaseConfig, app } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

import { writeUserInfo, readUserInfo } from "./UserInfo";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore();

function createAcountWithEmailAndPassword(
  auth,
  email,
  pass,
  navigation,
  setError
) {
  if (email.length === 0) {
    setError("Email không được để trống");
  } else if (pass.length === 0) {
    setError("Mật khẩu không được để trống");
  } else {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Tạo tài khoản " + user.email);
        // navigation.navigate("Home", { email: email });
        navigation.navigate("LoginScreen");
        return writeUserInfo(email, {
          firstName: "",
          lastName: "",
          avatar:
            "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/user-avatar.jpg",
          phone: "",
          email: email,
        });
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message.includes("email-already-in-use")) {
          setError("Tài khoản đã tồn tại");
        } else if (
          err.message.includes("Password should be at least 6 characters")
        ) {
          setError("Mật khẩu chứa ít nhất 6 ký tự");
        } else if (err.message.includes("invalid-email")) {
          setError("Định dạng email không phù hợp");
        } else {
          setError(err.message);
        }
      });
  }
}

function signInAcountWithEmailAndPassword(
  auth,
  email,
  pass,
  navigaton,
  setError,
  setPassword
) {
  signInWithEmailAndPassword(auth, email, pass)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Đăng nhập tài khoản " + user.email);
      // alert("Đăng nhập thành công");

      let userInfo = {};
      const myInfo = doc(firestore, "userInfo/" + email);
      const mySnapshot = await getDoc(myInfo);
      if (mySnapshot.exists()) {
        const docData = mySnapshot.data();
        console.log(`My data is ${JSON.stringify(docData)}`);
        userInfo = { ...docData };
        console.log("Up user: " + JSON.stringify(docData));
      }

      navigaton.navigate("HomeNavigator", { email: email, userInfo: userInfo });
      console.log(userInfo);
      setError();
      // ...
    })
    .catch((error) => {
      console.log(error.message);
      if (error.message.includes("invalid-email")) {
        setError("Định dạng email không phù hợp");
      } else if (error.message.includes("user-not-found")) {
        setError("Người dùng không tồn tại");
      } else if (error.message.includes("wrong-password)")) {
        setError("Mật khẩu không chính xác");
      } else {
        setError(error.message + " email: " + email + " pass: " + pass);
      }
    });
}

export {
  auth,
  createAcountWithEmailAndPassword,
  signInAcountWithEmailAndPassword,
};
