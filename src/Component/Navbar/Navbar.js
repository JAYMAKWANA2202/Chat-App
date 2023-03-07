import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00a884;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  &:hover {
    color: black;
    font-size: bold;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 23px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
