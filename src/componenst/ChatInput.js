import { useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection('rooms').doc(channelId).collection('message').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Tofik Hasanov',
      userImage: 'https://picsum.photos/200/300',
    });
    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message ${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
