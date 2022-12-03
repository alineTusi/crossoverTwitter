import styled from "@emotion/styled";

export const MessageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const MessageHeaderDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const MessageHeaderTitle = styled.span`
  font-weight: bold;
  font-size: 30px;
  font-family: 'sans-serif';
`

export const MessageHeaderIcons = styled.div`
  justify-content: space-between;
  display: flex;
  width: 80px;
`

export const MessageSearchDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;



export const MessageIcon = styled.img`
  width: 30px;
  height: 30px;
`;
