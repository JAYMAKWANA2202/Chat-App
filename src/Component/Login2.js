import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { app } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    signInWithEmailAndPassword(
      auth,
      values.email,
      values.password,
      values.displayName
    )
      .then(async () => {
        if (signInWithEmailAndPassword) {
          navigate("/chat");
          toast.success("welcome to chat app");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
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
