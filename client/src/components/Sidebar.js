import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { home } from 'react-icons-kit/feather/home';
import { user } from 'react-icons-kit/feather/user';
import { bell } from 'react-icons-kit/feather/bell';
import { bookmark } from 'react-icons-kit/feather/bookmark';
import { Icon } from 'react-icons-kit';
import { CurrentUserContext } from '../contexts/CurrentUser.context';
import {plus} from 'react-icons-kit/feather/plus'



const Sidebar = () => {

  const { currentUserState } = useContext(CurrentUserContext);
  let handle = '';

  if (currentUserState.currentUser) {
    handle = currentUserState.currentUser.profile.handle;
  }

  return (
    <Wrapper>
      <LogoTwitter/>
      <ul>
        <li> <NavLink exact to="/"><IconMenu icon={home} size={23} /><span>Home</span></NavLink></li>
        <li> <NavLink exact to={`/${handle}`}><IconMenu  icon={user} size={23} /><span>Profile</span></NavLink> </li>
        <li> <NavLink exact to="/Notifications"><IconMenu icon={bell} size={23} /><span>Notifications</span></NavLink> </li>
        <li> <NavLink exact to="/Bookmarks"><IconMenu icon={bookmark} size={23} /><span>Bookmarks</span></NavLink> </li>
        <li> <Button><Icon icon={plus} size={22} /><span style={{ paddingLeft: '10px' }}>Meow</span></Button></li>
      </ul>
    </Wrapper>
  );
}

const LogoTwitter = styled(Logo)`
width: 50px;
margin-left: 10px;
@media (max-width: 850px) {
  margin-left: 6px;
}
`

const Wrapper = styled.div`
width: 200px;
@media (max-width: 850px) {
  width: 65px;
  span{
    display: none;
  }
  }
  ul{
    list-style: none;
    font-weight: 700;
    @media (max-width: 850px) {
      text-align: center;
    }
  }
  a{
    text-decoration: none;
    margin-bottom: 7px;
    color: black;
    display: inline-block;
    padding: 12px 20px;
    
    &:hover{
      color: #2aa9e0;
      background-color: #E8F5FE;
      /* padding: 10px 20px; */
      border-radius: 30px;
      @media (max-width: 850px) {
        border-radius: 50%;
        padding: 12px;
      }
    }
    &.active{
      color: #2aa9e0;
      /* background-color: #E8F5FE; */
      /* padding: 10px 20px; */
      border-radius: 25px;
    }
  }
`
const Button = styled.button`
  color: white;
  background-color: #2aa9e0;
  padding: 10px 50px 10px 40px;
  border-radius: 30px;
  border: none;
  margin-top: 10px;
  font-size: 1em;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: background-color .2s ease-in;
  &:hover{
    background-color: #2593d8;
  }
  @media (max-width: 850px) {
    padding: 10px;
    border-radius: 50%;
    margin: 10px 6px 0 8px ;

  }
`
const IconMenu = styled(Icon)`
padding-right: 10px;
@media (max-width: 850px) {
  padding-right: 0px;
  }
`

export default Sidebar