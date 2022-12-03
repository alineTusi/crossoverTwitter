import React, { useState } from "react";
import { MessageHeaderDiv, MessageIcon, MessageSearchDiv, MessageContainer } from "./Messages.style";
import settings from "../../../assets/icons/settings.png";
import newMessage from "../../../assets/icons/new-message.png";

const MessageHeader = () => {
  return (
    <>
      <MessageHeaderDiv>
        <span>Messages</span>
        <MessageIcon src={settings} />
        <MessageIcon src={newMessage} />
      </MessageHeaderDiv>
    </>
  );
};

const MessageSearch = () => {
  return (
    <>
      <MessageSearchDiv>
      </MessageSearchDiv>
    </>
  );
};


const Messages = () => {
  return (
    <MessageContainer>
      <MessageHeader />
      <MessageSearch />
    </MessageContainer>
  );
};

export default Messages;
