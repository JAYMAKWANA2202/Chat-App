import React from "react";
import styled from "styled-components";

const FooterStyle = styled.p`
  text-align: center;
  background-color: #00a884;
  color: #fff;
  height: 25px;
`;

export default function Footer() {
  return (
    <FooterStyle>
      &copy; {new Date().getFullYear()} All Rights Reserved By Chat-App
    </FooterStyle>
  );
}
