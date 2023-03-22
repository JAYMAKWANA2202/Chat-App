import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Link, Whatsapp } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import Validation2 from "./Validation2";
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
import { async } from "@firebase/util";
import { NavLink } from "react-router-dom";

export default function Signup() {
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
        const uploadTask = await uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            alert(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL, res) => {
                await updateProfile(res.user, {
                  displayName: fullname,
                  photoURL: downloadURL,
                });

                // const userRef = doc(db, "user", res.user.uid);
                await setDoc(doc(db, "user", res.user.uid), {
                  uid: res.user.uid,
                  fullname,
                  email,
                  password,
                  photoURL: downloadURL,
                });

                alert("Image uploaded successfully!");
              }
            );
          }
        );
      } catch (error) {
        console.error(error);
        alert(error.message);
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
      alert("Your Form is Submitted");
    }
  }, [errors]);

  return (
    <>
      <Headerpart>
        <Navbar>
          <Container>
            <New>
              <Logo>
                <span>
                  <Whatsapp size={39} color="white" />
                </span>
              </Logo>
              <Navbar_Brand>Chat-App</Navbar_Brand>
            </New>
          </Container>
        </Navbar>
      </Headerpart>
      <Containers>
        <Container>
          <Center>
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
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
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
          </Center>
        </Container>
      </Containers>
    </>
  );
}

const Headerpart = styled.div`
  background-color: #00a884;
  height: 223px;
  width: 100%;
`;

const Navbar_Brand = styled.div`
  margin: 12px 0 0 0;
  color: white;
  font-size: 25px;
`;

const New = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
  min-height: 39px;
  margin: 0 54px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
    justify-content: center;
  }
`;

const Logo = styled.span`
  margin: 18px 8px 0 0;
  margin-left: 10%;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

const Containers = styled.div`
  background-color: #111b21;
  color: white;
  font-size: 25px;
  justify-content: center;
  height: 495px;
`;

const Center = styled.h1`
  text-align: center;
  color: grey;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin: 0 152px;
  position: relative;
  top: -129px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  @media screen and (max-width: 1024px) {
    margin: 0;
    top: -60px;
  }
`;

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