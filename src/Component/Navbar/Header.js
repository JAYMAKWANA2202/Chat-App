import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Lower from "./Lower";
import { Whatsapp } from "react-bootstrap-icons";
import { Headerpart, NavbarBrand, New, Logo } from "../../style/header-styled";

export default function Header() {
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
                            <NavbarBrand>Chat-App</NavbarBrand>
                        </New>
                    </Container>
                </Navbar>
            </Headerpart>
            <Lower />
        </>
    );
}
