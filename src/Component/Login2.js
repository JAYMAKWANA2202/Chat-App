import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormContainer } from "../style/login2-styled";

export default function Login2() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: values.displayName,
        });
        navigate("/chat");
        toast.success("Welcome to chat app");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <FormContainer>
        <Form method="POST" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="my-2 label">Name:</Form.Label>
            <Form.Control
              type="text"
              name="displayName"
              onChange={handleChange}
              placeholder="Enter Name"
              value={values.displayName}
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="my-2 label ">Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
              autoComplete="off"
              value={values.email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="my-2 label">Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              autoComplete="off"
              value={values.password}
            />
          </Form.Group>
          {isLoading ? (
            <Circles
              height="100"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              wrapperClass="Content"
              visible={true}
            />
          ) : (
            <Button
              variant="success"
              type="submit"
              className="btn mt-3"
              onClick={handleSubmit}
            >
              Login
            </Button>
          )}
        </Form>
      </FormContainer>
    </>
  );
}
