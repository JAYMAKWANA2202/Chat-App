import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

// Sigin with Email and password
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (res) => {
        // await addDoc(collection(db, "user"), { email, password });
        const ref = doc(db, "user", res.user.uid);
        const docref = await setDoc(ref, { email, password });
      }
    );
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//signin with google
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      console.log("result:dddddddd ", result);
      const { displayName, email, uid } = result.user;
      const userRef = doc(db, "user", result.user.uid);
      await setDoc(userRef, { displayName, email, uid });
      console.log("User data saved successfully!");
    })
    .catch((error) => console.logO(error));
};
