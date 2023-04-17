import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    flex-direction: row;
    color: #d9dee0;
    font-size: 25px;
  }
`;

export const Profile = styled.div`
  margin-bottom: 20px;
`;

export const Photo = styled.div`
  margin: 30px 0;

  img {
    width: 175px;
    height: 175px;
    object-fit: cover;
    border-radius: 50%;
  }

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const Back = styled.div`
  background-color: #081116;
  font-size: 30px;
  margin-right: 380px;
  cursor: pointer;
  margin-top: 15px;

  svg {
    display: flex;
    color: #fff;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: green;
    font-size: 19px;
    margin-left: 20px;
  }

  span {
    margin: 10px 20px;
    font-size: 22px;
    font-weight: 300;
    color: whitesmoke;
  }

  @media (max-width: 768px) {
    label {
      font-size: 12px;
      margin-left: 0;
      text-align: center;
    }

    span {
      margin: 10px 0;
      font-size: 15px;
      text-align: center;
    }
  }
`;
