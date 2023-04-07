import React, { useContext } from "react";
import styled from "styled-components";
import MyProfile from "../../src/images/5.png";
import { AuthContext } from "../Context/AuthContext";

export default function ProfilePhoto() {
  const { currentuser } = useContext(AuthContext);
  return (
    <>
      <Container>
        <Profile>
          <Photo>
            <img src={MyProfile} alt="" />
          </Photo>
        </Profile>

        <Status>
          <label>Your Name</label>
          <br />
          <br />
          <span>{currentuser?.displaNmae}</span>
          <br />
          <br />
          <label>Your Email</label>
          <br />
          <br />
          <span>{currentuser?.email}</span>
        </Status>
      </Container>
    </>
  );
}

const Container = styled.div``;

const Profile = styled.div``;
const Photo = styled.div`
  margin: 30px 145px;

  :hover {
    opacity: 0.5;
  }
`;

const Status = styled.div`
  label {
    color: green;
    font-size: 15x;
    margin-left: 50px;
  }

  span {
    margin: 52px 52px;
    /* margin-left: 52px; */
    font-size: 17px;
    font-weight: 300;
  }
`;
