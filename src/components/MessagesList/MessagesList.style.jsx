import styled from "@emotion/styled";

export const MessagesListContainer = styled.div`
  width: 650px;
  height: 100vh;
  border-right: 0.5px solid;
  border-left: 0.5px solid;
  border-color: lightgray;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const MessagesListHeaderDiv = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const MessagesListHeaderTitle = styled.span`
  font-weight: 800;
  font-size: 25px;
`;

export const MessagesListHeaderIcons = styled.div`
  justify-content: space-between;
  display: flex;
  width: 65px;
`;

export const MessagesListSearchDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 45px;
  padding-bottom: 45px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const MessagesListIcon = styled.img`
  width: 22px;
  height: 22px;
`;
