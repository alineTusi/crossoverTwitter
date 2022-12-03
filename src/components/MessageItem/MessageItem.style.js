import styled from "@emotion/styled";

export const MessageItemContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const MessageItemImageContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
`;

export const MessageItemImage = styled.img`
  border-radius: 50px;
`;

export const MessageItemUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const MessageItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  margin-right: 40px;
  flex-direction: column;
`;

export const MessageItemUserInfoName = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

export const MessageItemUserInfoUserName = styled.span`
  margin-left: 10px;
`;

export const MessageItemUserInfoDate = styled.span`
  margin-left: 10px
`;

export const MessageItemUserInfoUserMessage = styled.span`
  margin-left: 10px;
`;
