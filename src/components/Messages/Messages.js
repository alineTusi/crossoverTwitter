import React, { useEffect, useState } from "react";
import {
  MessageHeaderDiv,
  MessageIcon,
  MessageSearchDiv,
  MessageContainer,
  MessageHeaderIcons,
  MessageHeaderTitle,
} from "./Messages.style";
import settings from "../../assets/icons/settings.png";
import newMessage from "../../assets/icons/new-message.png";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import "./Messages.css";
import MessageItem from "../MessageItem/MessageItem";
import axios from "axios";

const MessageHeader = () => {
  return (
    <>
      <MessageHeaderDiv>
        <MessageHeaderTitle>Messages</MessageHeaderTitle>
        <MessageHeaderIcons>
          <MessageIcon src={settings} />
          <MessageIcon src={newMessage} />
        </MessageHeaderIcons>
      </MessageHeaderDiv>
    </>
  );
};

const MessageSearch = ({ searchText, onChange }) => {
  return (
    <>
      <MessageSearchDiv>
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search Direct Messages"
          className="searchTextField"
          size="small"
          fullWidth={true}
          value={searchText}
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </MessageSearchDiv>
    </>
  );
};

const Messages = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [searchText, setSearchText] = useState("");

  const setSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://twittercrossover.herokuapp.com/users/list")
      .then((data) => {
        const filteredUsers = data.data.users.filter((u) =>
          u.firstName.toLowerCase().includes(searchText.toLowerCase())
        );
        setUsers(filteredUsers);
        console.log("filtered users", filteredUsers);
      });
    console.log("searchText", searchText);
  }, [searchText]);

  useEffect(() => {
    axios
      .get("https://twittercrossover.herokuapp.com/messages/list")
      .then((data) => {
        console.log(setMessages(data.data.messages));
      });
  }, [users]);

  useEffect(() => {
    const uMessages = [...users];
    uMessages.map((user) => {
      user.messages = messages.filter((m) => m.userId === user._id);
    });

    setUserMessages(uMessages.filter((um) => um.messages.length));
    console.log(
      "uMessages",
      uMessages.filter((um) => um.messages.length)
    );
  }, [messages]);

  return (
    <MessageContainer>
      <MessageHeader />
      <MessageSearch value={searchText} onChange={setSearch} />

      {userMessages.map((user) => (
        <MessageItem
          name={user.firstName}
          username={user.username}
          date={user.createdAt}
          message={user.messages.at(-1).text}
        />
      ))}
    </MessageContainer>
  );
};

export default Messages;
