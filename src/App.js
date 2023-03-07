import React from "react";
import styled from "styled-components";
import Navbar from "./Component/Navbar/Navbar";
import Router from "./Utilities/Router";
import Footer from "./Component/Footer/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  height: 80px;
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  height: 42px;
`;

function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
      <MainContainer>
        <Router />
      </MainContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </AppContainer>
  );
}

export default App;
