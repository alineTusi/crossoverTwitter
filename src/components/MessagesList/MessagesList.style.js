import styled from "@emotion/styled";

export const MessagesListContainer = styled.div`
  width: 450px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const MessagesListHeaderDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const MessagesListHeaderTitle = styled.span`
  font-weight: bold;
  font-size: 30px;
  font-family: 'sans-serif';
`

export const MessagesListHeaderIcons = styled.div`
  justify-content: space-between;
  display: flex;
  width: 80px;
`

export const MessagesListSearchDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;



export const MessagesListIcon = styled.img`
  width: 30px;
  height: 30px;
`;
