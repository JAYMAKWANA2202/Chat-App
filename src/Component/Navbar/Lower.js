import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Gear, ThreeDotsVertical } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../utilities/firebase";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup2 from "../Signup2";
import Login2 from "../Login2";

export default function Lower(props) {
  const [click, setClick] = useState(true);
  const [page, setpage] = useState("menu");
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then(async (res) => {
        console.log("res: ", res);
        if (auth.currentUser) {
          navigate("/chat");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleSignUp = () => {
    setClick(false);
    setpage("signup");
  };

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
                <h3>Use WhatsApp on your computer</h3>
                <List>
                  <ol>
                    <li>Open WhatsApp on your phone </li>
                    <li>
                      Tap <strong>Menu</strong> <ThreeDotsVertical />
                      or <strong>Setting </strong> <Gear />
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
                    {/* <Button onClick={handleGoogleSignIn}>
                      Sign In With Google
                    </Button>
                    <br /> */}

                    <Button
                      onClick={handleLogin}
                      style={{
                        width: "250px",
                        marginTop: "50px",
                      }}
                    >
                      SignIn With Email password
                    </Button>

                    {/* <br />
                    <Button onClick={handleLogin}>Login</Button> */}
                  </Code>
                </Right>
              ) : (
                <>
                  <SideRight>
                    <Button
                      onClick={handleBack}
                      style={{
                        width: "250px",
                        marginRight: "58px",
                      }}
                    >
                      Sign In With Email password
                    </Button>
                    {page === "signup" && <Signup2 />}
                    <SideLogin>{page === "login" && <Login2 />}</SideLogin>
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

const SideRight = styled.div`
  margin-right: 50px;
  margin-top: -24px;

  Button {
    /* width: 300px; */
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

  Button {
    width: 167.6px;
  }

  svg {
    margin-bottom: 20px;
  }
`;
