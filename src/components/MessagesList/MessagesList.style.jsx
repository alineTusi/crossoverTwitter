import styled from "@emotion/styled";

export const MessagesListContainer = styled.div`
  border-right: 0.5px solid;
  border-left: 0.5px solid;
  border-color: lightgray;
  width: 450px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
  padding-left: 25px;
  padding-right: 25px;
`;

export const MessagesListHeaderDiv = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding-top: 45px;
  padding-bottom: 45px;
`;



export const MessagesListIcon = styled.img`
  width: 22px;
  height: 22px;
`;
