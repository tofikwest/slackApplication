import styled from 'styled-components';

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      {console.log(userImage + ' 12312')}
      <MessageInfo>
        <h4>{user}</h4>{' '}
        <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;
const MessageContainer = styled.div`
  color: black;
`;
const MessageInfo = styled.div`
  color: black;
`;
