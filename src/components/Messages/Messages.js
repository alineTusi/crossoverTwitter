import React from "react";
import MessagesList from "../MessagesList/MessagesList";
import UserMessage from "../UserMessage/UserMessages";
import { MessagesContainer } from "./Messages.style";

const Messages = () => {
  return (
    <>
      <MessagesContainer>
        <MessagesList/>
        <UserMessage/>

      </MessagesContainer>
    </>
  );
};

export default Messages;
