import styled from "@emotion/styled";

export const MessageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 5%;
  background-color: pink;
  
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const MessageHeaderDiv = styled.div`
  background-color: red;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: space-between;

`;

export const MessageSearchDiv = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
  
`;



export const MessageIcon = styled.img`
  width: 30px;
  height: 30px;
`;
