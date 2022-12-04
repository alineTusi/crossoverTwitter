import styled from "@emotion/styled";

export const MessageItemContainer = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  ${({ selected }) => selected && `
    background: #EFF3F4;
    border-right: 2px solid #198CD8;
  `}
  &:hover {
    background-color: #F7F9F9;
  }
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MessageItemContent = styled.div`
  /* overflow: hidden; */
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const MessageItemUserInfoName = styled.span`
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const MessageItemUserInfoUserName = styled.span`
  margin-left: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const MessageItemUserInfoDate = styled.span`
  margin-left: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const MessageItemMessage = styled.span`
  width: 100%;
  white-space: nowrap;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
