import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Link, Whatsapp } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import Validation2 from "../pages/Validation2";
// import { logInWithEmailAndPassword } from "../utilities/firebase";
import {
  uploadBytesResumable,
  getDownloadURL,
  ref,
  docref,
} from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { app } from "../utilities/firebase";
import { getFirestore } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup(props) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: files ? files : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors(Validation2(values));

    const { fullname, email, password, file } = values;

    if (Object.keys(errors).length === 0) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const storageRef = ref(storage, fullname);
        // const uploadTask = await uploadBytesResumable(storageRef, file);

        // uploadTask.on(
        //   (error) => {
        //     alert(error.message);
        //   },
        //   () => {
        //     getDownloadURL(uploadTask.snapshot.ref).then(
        //       async (downloadURL, res) => {
        //         await updateProfile(res.user, {
        //           displayName: fullname,
        //           photoURL: downloadURL,
        //         });

        //         // const userRef = doc(db, "user", res.user.uid);
        //         await setDoc(doc(db, "user", res.user.uid), {
        //           uid: res.user.uid,
        //           fullname,
        //           email,
        //           password,
        //           photoURL: downloadURL,
        //         });

        //         alert("Image uploaded successfully!");
        //       }
        //     );
        //   }
        // );
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    }
  };
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.fullname !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.file !== ""
    ) {
      toast("Your Form is Submitted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [errors]);

  return (
    <>
      <FormContainer>
        <Form method="POST" onSubmit={handleSubmit}>
          <h1>SignUp Page</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="my-2">Name</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              onChange={handleChange}
              placeholder="Enter Name"
              value={values.fullname}
              autoComplete="off"
            />
            {errors.fullname && (
              <p style={{ color: "red" }}>{errors.fullname}</p>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="my-2">Email Address:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
              value={values.email}
              autoComplete="off"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="my-2">Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              value={values.password}
              autoComplete="off"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicFile">
            <Form.Label className="my-2">Choose the Photo</Form.Label>
            <Form.Control
              type="file"
              name="file"
              autoComplete="off"
              value={values.file}
            />
            {/*   {errors.file && <p style={{ color: "red" }}>{errors.file}</p>} */}
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="btn mt-3"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Form.Group controlId="formBasicPassword" className="mt-2">
            <p>
              Do you have account? <NavLink to="/Login">Login</NavLink>
            </p>
          </Form.Group>
        </Form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled(Form)`
  display: flex;
  justify-content: center;
  font-size: small;

  h1 {
    color: #111b21;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 15px;
  }
`;

const Left = styled.div`
  font-size: 20px;
  width: 50%;
  list-style: none;

  h3 {
    font-weight: 300;
    line-height: normal;
    color: #41525d;
    margin-right: 30px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const List = styled.ul`
  margin-top: 45px;
  padding: 0;
  list-style: none;

  li {
    padding: 0 0 0 0;
    font-size: 18px;
    text-align: left;
    margin-top: 18px;
  }
`;

const Right = styled.div`
  font-size: 20px;
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 20px;
  }
`;
