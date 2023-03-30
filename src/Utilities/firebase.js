import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { toast } from "react-toastify";

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
export const storage = getStorage();

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (res) => {
        const ref = doc(db, "user", res.user.uid);
        const docref = await setDoc(ref, { email, password });
        await setDoc(doc(db, "userChat", res.user.uid), {});
      }
    );

    toast.success("Form is submmited  ");
  } catch (err) {
    toast.error(err.message);
  }
};
