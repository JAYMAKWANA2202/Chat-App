import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const FormContainer = styled(Form)`
  display: flex;
  justify-content: center;
  font-size: small;
  h1 {
    color: #111b21;
  }

  label {
    margin-right: 175px;
    /* margin-top: 0px; */
    font-size: 15px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 15px;
  }
`;
