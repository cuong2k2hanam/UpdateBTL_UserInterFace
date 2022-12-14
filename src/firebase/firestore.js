import { app } from "./firebaseConfig";
import {
  getFirestore,
  initializeFirestore,
  CACHE_SIZE_UNLIMITED,
  setDoc,
  collection,
  addDoc,
  getDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";

const firestore = getFirestore();
// const firestore = initializeFirestore(app, {
//   cacheSizeBytes: CACHE_SIZE_UNLIMITED,
// });

// tạo bản ghi
const specialOfTheDay = doc(firestore, "dailySpecial/2022-12-14");
function writeDailySpecial() {
  const docData = {
    description: "A delicious vanille latte",
    price: 3.99,
    milk: "Whole",
    vegan: false,
  };
  setDoc(specialOfTheDay, docData, { merge: true })
    .then(() => {
      console.log("This value has been written to the database");
    })
    .catch((error) => {
      console.log(`I got an error! ${error}`);
    });
}

const ordersColection = collection(firestore, "orders");

// Thêm bản ghi
async function addANewDocument() {
  const newDoc = await addDoc(ordersColection, {
    customer: "Cường",
    drink: "Latte",
    total_const: (100 + Math.floor(Math.random() * 400)) / 100,
  });
  console.log(`Your doc was create at ${newDoc.path}`);
}

// đọc bản ghi
async function readASingleDocument() {
  const mySnapshot = await getDoc(specialOfTheDay);
  if (mySnapshot.exists()) {
    const docData = mySnapshot.data();
    console.log(`My data is ${JSON.stringify(docData)}`);
  }
}

let dailySpecialUnsubcribe;

// Theo dõi bản ghi
function listenToADocument() {
  dailySpecialUnsubcribe = onSnapshot(specialOfTheDay, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();
      console.log(`In realtime, docData is ${JSON.stringify(docData)}`);
    }
  });
}

function cancelMyListenerAtTheAppropriateTime() {
  dailySpecialUnsubcribe();
}

// đọc nhiều bản ghi
async function queryForDocuments() {
  const customerOrdersQuery = query(
    collection(firestore, "orders"),
    where("drink", "==", "Latte"),
    // orderBy("price")
    limit(10)
    // orderBy("total_const")
  );

  // console.log("queryForDocuments");

  const querySnapshot = await getDocs(customerOrdersQuery);
  unsubscribeCustomerOrders = onSnapshot(
    customerOrdersQuery,
    (querySnapshot) => {
      // console.log("Hi a");
      console.log(
        JSON.stringify(querySnapshot.docs.map((e) => e.data())) + "\n"
      );
    }
  );

  // const allDocs = querySnapshot.forEach((snap) => {
  //   console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
  // });
}

console.log("Hello there, Firestore");

function run() {
  writeDailySpecial();
  addANewDocument();
  readASingleDocument();
  listenToADocument();
  queryForDocuments();
}

export { run };
