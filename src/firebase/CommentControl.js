import { app } from "./firebaseConfig";
import {
  getFirestore,
  limit,
  query,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
  where,
} from "firebase/firestore";

const firestore = getFirestore();

// Lấy comments
async function getComments(setComments, book) {
  let comments = [];
  const customerOrdersQuery = query(
    collection(firestore, "comments"),
    where("bookId", "==", book.id),
    orderBy("time", "desc"),
    limit(10)
  );

  console.log("get comments");
  console.log(book);

  const querySnapshot = await getDocs(customerOrdersQuery);
  querySnapshot.docs.forEach((doc) => {
    // if (doc.data().bookId === book.id) {
    let comment = { id: doc.id, ...doc.data() };
    comments.unshift(comment);
    // }
  });
  // console.log(comments);
  return setComments(comments);
}

// Thêm bình luận
const commentColection = collection(firestore, "comments");

// {
//   id: 0,
//   userId: 0,
//   userAvatar:
//     "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/user-avatar.jpg",
//   useName: "Cuong",
//   userCommnent: "Truyện hay quá",
// },

async function addANewComment(content, book, email, user) {
  if (content.length === 0) {
    console.log("Empty Comment");
    return;
  } else {
    console.log(content.length);
    console.log(content);
    const newDoc = await addDoc(commentColection, {
      avatar: user.avatar,
      content: content,
      bookId: book.id,
      email: email,
      userName: user.firstName + " " + user.lastName,
      time: serverTimestamp(),
    });
    console.log(`Your doc was create at ${newDoc.path}`);
  }
}

export { getComments, addANewComment };
