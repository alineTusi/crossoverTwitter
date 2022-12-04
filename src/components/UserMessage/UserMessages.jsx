import React from "react";
import { NewMessageButton, SelectMessageContainer, SelectMessageText, SelectMessageTitle, UserMessageContainer } from "./UserMessages.style";

const UserMessage = () => {
  return (
    <>
      <UserMessageContainer>
        <SelectMessageContainer>
          <SelectMessageTitle>Select a message</SelectMessageTitle>
          <SelectMessageText>
            Choose from your existing conversations, start a new one, or just
            keep swimming.
          </SelectMessageText>
          <NewMessageButton>New message</NewMessageButton>
        </SelectMessageContainer>
      </UserMessageContainer>
    </>
  );
};

export default UserMessage;
