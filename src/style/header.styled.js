import styled from "styled-components";

export const Headerpart = styled.div`
  background-color: #00a884;
  height: 223px;
`;

export const NavbarBrand = styled.div`
  margin: 12px 0 0 0;
  color: white;
  font-size: 25px;
`;

export const New = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
  min-height: 39px;
  margin: 0 54px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
    justify-content: center;
  }
`;

export const Logo = styled.span`
  margin: 18px 8px 0 0;
  margin-left: 10%;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;
