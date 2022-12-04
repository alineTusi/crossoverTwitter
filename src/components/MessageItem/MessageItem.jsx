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
  MessageItemMessage,
} from "./MessageItem.css.styled";
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
          <MessageItemMessage>{message}</MessageItemMessage>
        </MessageItemContent>
      </MessageItemContainer>
    </>
  );
};

export default MessageItem;
