import React, { useEffect, useState } from "react";
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
import dateformat from "dateformat";

const MessageItem = ({ name, username, date, message, selected }) => {
  const [formattedMessage, setFormattedMessage] = useState("");

  useEffect(() => {
    if (message && message.length > 40) {
      message = `${message.substring(0, 37)}...`;
    }
    setFormattedMessage(message);
  }, [message]);

  return (
    <>
      <MessageItemContainer id="MessageItemContainer" selected={selected}>
        <MessageItemImageContainer>
          <MessageItemImage
            id="MessageItemImage"
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            }
          ></MessageItemImage>
        </MessageItemImageContainer>
        <MessageItemContent id="MessageItemContent">
          <MessageItemUserInfo id="MessageItemUserInfo">
            <div>
              <MessageItemUserInfoName>{name}</MessageItemUserInfoName>
              <MessageItemUserInfoUserName>
                {username}
              </MessageItemUserInfoUserName>
            </div>

            <MessageItemUserInfoDate>
              {dateformat(new Date(date), "mmm dd, yyyy")}
            </MessageItemUserInfoDate>
          </MessageItemUserInfo>
          <div>
            <MessageItemMessage id="MessageItemMessage">
              {formattedMessage}
            </MessageItemMessage>
          </div>
        </MessageItemContent>
      </MessageItemContainer>
    </>
  );
};

export default MessageItem;
