import styled from 'styled-components';

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="тут ваша аватарка" />
      <MessageInfo>
        <h4>{user}</h4>{' '}
        <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: black;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
  color: black;
`;
