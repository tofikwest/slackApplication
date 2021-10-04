import { Avatar } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      {/* Header Left*/}
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search User" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  background-color: var(--slack-color);
  color: white;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  text-align: center;
  padding: 0 50px;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  border: 1px gray solid;

  > input {
    outline: 0;
    min-width: 30vw;
    text-align: center;
    border: transparent;
    background-color: transparent;

    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 0.3;

  > .MuiSvgIcon-root {
    cursor: pointer;
    margin-left: auto;
    margin-right: 20px;
  }
`;
