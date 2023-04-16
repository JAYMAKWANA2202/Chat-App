import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEINGSENDERID,
  appId: process.env.REACT_APP_MESSAGEINGSENDERID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();
export const storage = getStorage();

export const logInWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    ).then(async (res) => {
      const uid = res.user.uid;
      const ref = doc(db, "user", uid);
      const docref = await setDoc(ref, { email, password, displayName, uid });
      await setDoc(doc(db, "userChat", uid), {});
    });

    toast.success("Form is submmited  ");
  } catch (err) {
    toast.error(err.message);
  }
};
