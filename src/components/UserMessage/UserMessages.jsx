import React from "react";
import { NewMessageButton, SelectMessageContainer, SelectMessageTitle, UserMessageContainer } from "./UserMessages.style";

const UserMessage = () => {
  return (
    <>
      <UserMessageContainer>
        <SelectMessageContainer>
          <SelectMessageTitle>Select a message</SelectMessageTitle>
          <p>
            Choose from your existing conversations, start a new one, or just
            keep swimming.
          </p>
          <NewMessageButton>New message</NewMessageButton>
        </SelectMessageContainer>
      </UserMessageContainer>
    </>
  );
};

export default UserMessage;
