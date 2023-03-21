import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Gear, ThreeDotsVertical } from "react-bootstrap-icons";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../utilities/firebase";

export default function Lower() {
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
        alert(error);
      });
  };

  const handleSignUp = () => {
    navigate("/Signup");
  };

  const handleLogin = () => {
    navigate("/Login");
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
              <Right>
                <Code>
                  {/* <QRCode value="whatsapp" /> */}
                  <Button onClick={handleGoogleSignIn}>
                    Sign In With Google
                  </Button>
                  <br />
                  <Button onClick={handleSignUp}>Signup</Button>
                  <br />
                  <Button onClick={handleLogin}>Login</Button>
                </Code>
              </Right>
            </FormContainer>
          </Center>
        </Container>
      </Containers>
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

const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 20px;
  }
`;
