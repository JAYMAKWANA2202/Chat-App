import styled from "styled-components";

export const Messagess = styled.div`
  display: flex;

  &.owner {
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 10px;

    p {
      background-color: #005c4b;
      color: whitesmoke;
      border-radius: 10px 0 10px 10px;
      gap: 10px;
      padding: 10px 20px;
      max-width: max-content;
    }
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

export const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: ${(props) => (props.isOwner ? "flex-end" : "flex-start")};

  p {
    background-color: ${(props) => (props.isOwner ? "#005c4b" : "#202c33")};
    color: whitesmoke;
    border-radius: ${(props) =>
        props.isOwner ? "10px 0 10px 10px" : "0 10px 10px 10px"};
    gap: 10px;
    padding: 10px 20px;
    max-width: max-content;
  }

  img {
    max-width: ${(props) => (props.isOwner ? "30%" : "30%")};
    max-height: ${(props) => (props.isOwner ? "60%" : "60%")};
    border-radius: ${(props) =>
        props.isOwner ? "15px 0 15px 15px" : "0 15px 15px 15px"};
  }
`;
