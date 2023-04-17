import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  padding: 10px;
  color: black;
  background-color: #202c33;
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: whitesmoke;
    background-color: #182229;
    border-radius: 8px;
    padding: 9px 12px;

    ::placeholder {
      color: #8696a0;
    }
  }
`;

export const Share = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    border-radius: 5px;
    border: none;
    outline: none;
  }
`;
