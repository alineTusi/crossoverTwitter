import styled from "@emotion/styled";

export const MessageItemContainer = styled.div`
  width: 450px;
  height: 90px;
  display: flex;
  align-items: center;
  ${({ selected }) =>
    selected &&
    `
    background: blue;
  `}
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
  align-items: center;
`;

export const MessageItemContent = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 50px;
`;

export const MessageItemUserInfoName = styled.span`
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const MessageItemUserInfoUserName = styled.span`
  margin-left: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const MessageItemUserInfoDate = styled.span`
  margin-left: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const MessageItemMessage = styled.span`
  white-space: nowrap;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
