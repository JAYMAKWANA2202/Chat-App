import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  Firestore,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGGycRDcx7VfKykBSekJDNJhNKmqpsBJM",
  authDomain: "react-chat-app-1a6aa.firebaseapp.com",
  projectId: "react-chat-app-1a6aa",
  storageBucket: "react-chat-app-1a6aa.appspot.com",
  messagingSenderId: "933385356933",
  appId: "1:933385356933:web:23f4737e049a851b358bec",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

//signin with google
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      console.log("result:dddddddd ", result);
      const { displayName, email, uid } = result.user;
      const userRef = doc(db, "user", uid);
      await setDoc(userRef, { displayName, email, uid });
      console.log("User data saved successfully!");
    })
    .catch((error) => console.logO(error));
};
