import React, { useState } from "react";
import {
  MessageItemContainer,
  MessageItemImageContainer,
  MessageItemImage,
  MessageItemUserInfo,
  MessageItemUserInfoName,
  MessageItemUserInfoUserName,
  MessageItemContent,
  MessageItemUserInfoDate,
  MessageItemUserInfoUserMessage,
} from "./MessageItem.style";
import dateformat from "dateformat"

const MessageItem = ({ name, username, date, message, selected }) => {
  return (
    <>
      <MessageItemContainer selected={selected}>
        <MessageItemImageContainer>
          <MessageItemImage
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            }
          ></MessageItemImage>
        </MessageItemImageContainer>
        <MessageItemContent>
          <MessageItemUserInfo>
            <div>
              <MessageItemUserInfoName>{name}</MessageItemUserInfoName>
              <MessageItemUserInfoUserName>
                {username}
              </MessageItemUserInfoUserName>
            </div>
            <MessageItemUserInfoDate>{dateformat(new Date(date), "mmm dd, yyyy")}</MessageItemUserInfoDate>
          </MessageItemUserInfo>
          <MessageItemUserInfoUserMessage>{message}</MessageItemUserInfoUserMessage>
        </MessageItemContent>
      </MessageItemContainer>
    </>
  );
};

export default MessageItem;
