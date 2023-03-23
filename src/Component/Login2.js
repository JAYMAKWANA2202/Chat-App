import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Whatsapp } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app } from "../utilities/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login2() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [values, setValues] = useState({
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
      .then(async () => {
        console.log("welcome");

        if (signInWithEmailAndPassword) {
          navigate("/chat");
        }
      })
      .catch((error) => {
        toast.error("opps! somthing is wrong");
      });
  };
  return (
    <>
      <ToastContainer />

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h1>Login Page</h1>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="my-2 lable ">Email Address:</Form.Label>
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
            <Form.Label className="my-2 lable">Password:</Form.Label>
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

          <Form.Group controlId="formBasicPassword" className="mt-2">
            <p>
              Do you have account? <NavLink to="/signup">SignUp</NavLink>
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
