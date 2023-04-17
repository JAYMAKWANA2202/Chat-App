import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import Validation2 from "../pages/Validation2";
import { logInWithEmailAndPassword } from "../utilities/firebase";
import "react-toastify/dist/ReactToastify.css";
import Login2 from "./Login2";
import { FormContainer } from "../style/login2-styled";

export default function Signup() {
  const [login, setLogin] = useState(true);

  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
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

    if (Object.keys(errors).length === 0) {
      logInWithEmailAndPassword(
        values.email,
        values.password,
        values.displayName
      );
    }
  };

  const handleLogin = () => {
    setLogin(false);
  };

  useEffect(() => {
    if (
      Object.keys(errors)?.length === 0 &&
      values.displayName !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.file !== ""
    ) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {login ? (
        <FormContainer>
          <Form method="POST" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="my-2 label ">Name:</Form.Label>
              <Form.Control
                type="text"
                name="displayName"
                onChange={handleChange}
                placeholder="Enter Name"
                value={values.displayName}
                autoComplete="off"
              />
              {errors.displayName && (
                <p style={{ color: "red" }}>{errors.displayName}</p>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="my-2 label">Email:</Form.Label>
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
              <Form.Label className="my-2 label">Password:</Form.Label>
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

            <Button
              variant="success"
              type="submit"
              className="btn mt-3"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Button
              variant="success"
              type="submit"
              className="btn mt-3 mx-2"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form>
        </FormContainer>
      ) : (
        <Login2 />
      )}
    </>
  );
}
