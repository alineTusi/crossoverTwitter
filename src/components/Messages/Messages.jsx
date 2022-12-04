import React from "react";
import { GlobalStyles } from "../../Global";
import MessagesList from "../MessagesList/MessagesList";
import UserMessage from "../UserMessage/UserMessages";
import { MessagesContainer } from "./Messages.style";

const Messages = () => {
  return (
    <>
      <GlobalStyles />
      <MessagesContainer>
        <MessagesList />
        <UserMessage />
      </MessagesContainer>
    </>
  );
};

export default Messages;
