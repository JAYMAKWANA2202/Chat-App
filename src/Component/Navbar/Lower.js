import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Gear, ThreeDotsVertical } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup2 from "../Signup2";
import {
    Containers,
    Center,
    FormContainer,
    Left,
    List,
    Right,
    SideRight,
    SideLogin,
    Code,
} from "../../style/lower-styled";

export default function Lower() {
    const [click, setClick] = useState(true);

    const handleLogin = () => {
        setClick(false);
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
                                            style={{
                                                width: "250px",
                                                marginRight: "58px",
                                            }}
                                        >
                      Back to Home Page
                                        </Button>
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
