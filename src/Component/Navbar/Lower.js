import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Gear, ThreeDotsVertical } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup2 from "../Signup2";
import QRCode from "react-qr-code";

export default function Lower() {
  const [click, setClick] = useState(true);
  const [page, setpage] = useState("menu");

  const handleLogin = () => {
    setClick(false);
    setpage("login");
  };

  const handleBack = () => {
    setClick(true);
  };

  return (
    <>
      <Containers>
        <Container>
          <Center>
            <FormContainer>
              <Left>
                <h3>Use ChatApp on your computer</h3>
                <List>
                  <ol>
                    <li>Open ChatApp on your computer </li>
                    <li>
                      Tap <strong>Menu</strong>
                      <ThreeDotsVertical
                        style={{ backgroundColor: "#fff", color: "gray  " }}
                      />
                      or <strong>Setting </strong>
                      <Gear
                        style={{ backgroundColor: "#fff", color: "gray" }}
                      />
                      and <strong>Linked Devices</strong>
                    </li>
                    <li>
                      Tap on <strong>Link a Device</strong>
                    </li>
                    <li>Point your phone to this screen to capture the code</li>
                  </ol>
                </List>
              </Left>
              {click ? (
                <Right>
                  <Code>
                    <Button
                      className="fade-in frequency-mode-animation"
                      onClick={handleLogin}
                      style={{
                        width: "250px",
                        marginTop: "50px",
                      }}
                    >
                      SignIn With Email password
                    </Button>
                  </Code>
                </Right>
              ) : (
                <>
                  <SideRight>
                    <Button
                      onClick={handleBack}
                      // className="fade-in frequency-mode-animation"
                      style={{
                        width: "250px",
                        marginRight: "58px",
                      }}
                    >
                      Sign In With Email password
                    </Button>
                    {/* {page === "signup" && <Signup2 />} */}
                    <SideLogin>
                      <Signup2 />
                    </SideLogin>
                  </SideRight>
                </>
              )}
            </FormContainer>
          </Center>
        </Container>
      </Containers>
      <ToastContainer />
    </>
  );
}

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
  justify-content: space-between;
  height: 450px;
  width: 100%;
  margin-top: 15px;
  padding: 34px 34px 34px;

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

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(12px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Apply the animation to the <p> tag */
  h3 {
    animation: fadeIn 1s ease-in-out;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    /* background-image: linear-gradient(to right, gray, #111b21); */
    color: gray;
  }

  ol {
    animation: fadeIn 1s ease-in-out;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    /* background-image: linear-gradient(to right, gray, #111b21); */
    color: gray;
    strong {
      animation: fadeIn 1s ease-in-out;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      /* background-image: linear-gradient(to right, gray, #111b21); */
      color: gray;
    }
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

  .fade-in {
    animation: fadeIn 1s ease-in-out;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    /* background-image: linear-gradient(to bottom, gray 0%, black 100%); */
    color: gray;
  }

  button {
    border: 0;
    border-radius: 0;
  }
  button:hover {
    border: 1px solid black;
    font-weight: 600;
    border-radius: 25px;
    color: black;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const SideRight = styled.div`
  margin-right: 50px;
  margin-top: -24px;

  .fade-in {
    animation: fadeIn 1s ease-in-out;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, darkgray, black);
  }
`;

const SideLogin = styled.div`
  margin-right: 70px;
  margin-top: 5px;
`;

const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;

  span {
    font-size: 40px;
  }

  Button {
    width: 167.6px;
    /* margin-right: 25px; */
  }

  svg {
    margin-bottom: 20px;
  }
  /* Define the animation */
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(12px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Apply the animation to the <p> tag */
  p {
    animation: fadeIn 1s ease-in-out;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, gray, #111b21);
  }

  span {
    animation: fadeIn 1s ease-in-out;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, gray, #111b21);
  }
`;
