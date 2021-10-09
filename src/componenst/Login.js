import styled from 'styled-components';

const Login = () => {
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="loading"
        />
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div``;
const LoginInnerContainer = styled.div`
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
`;
