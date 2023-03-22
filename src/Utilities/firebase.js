import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

// Sigin with Email and password
// export const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password).then(
//       async (res) => {
//         const storage = getStorage();
//         const storageRef = ref(storage, "images/rivers.jpg");

//         const uploadTask = uploadBytesResumable(storageRef);

//         uploadTask.on(
//           (error) => {
//             alert(error.message);
//           },
//           () => {
//             getDownloadURL(uploadTask.snapshot.ref).then(
//               async (downloadURL) => {
//                 await updateProfile(res.user, {
//                   fullname,
//                   photoURL: downloadURL,
//                 });
//               }
//             );
//           }
//         );
//         // await addDoc(collection(db, "user"), { email, password });
//         const ref = doc(db, "user", res.user.uid);
//         const docref = await setDoc(ref, { email, password });
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

//signin with google
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const { displayName, email, uid } = result.user;
      const userRef = doc(db, "user", result.user.uid);
      await setDoc(userRef, { displayName, email, uid });
      console.log("User data saved successfully!");
    })
    .catch((error) => console.logO(error));
};
