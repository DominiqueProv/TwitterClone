import React, {useContext} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { home } from 'react-icons-kit/feather/home';
import { user } from 'react-icons-kit/feather/user';
import { bell } from 'react-icons-kit/feather/bell';
import { bookmark } from 'react-icons-kit/feather/bookmark';
import { Icon } from 'react-icons-kit';



const Sidebar = () => {


  


  return (
    <Wrapper>
      <Logo style={{ width: "60px", marginLeft: "10px" }} />
      <ul>
        <li> <NavLink exact to="/"><Icon style={{ paddingRight: '10px' }} icon={home} size={20} />Home</NavLink></li>
        <li> <NavLink exact to="/Profile"><Icon style={{ paddingRight: '10px' }} icon={user} size={20} />Profile</NavLink> </li>
        <li> <NavLink exact to="/Notifications"><Icon style={{ paddingRight: '10px' }} icon={bell} size={20} />Notifications</NavLink> </li>
        <li> <NavLink exact to="/Bookmarks"><Icon style={{ paddingRight: '10px' }} icon={bookmark} size={20} />Bookmarks</NavLink> </li>
        <li> <Button>Meow</Button></li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 200px;
  ul{
    list-style: none;
    font-weight: 700;
  }
  a{
    text-decoration: none;
    color: black;
    display: inline-block;
    padding: 10px 20px;
    &:hover{
      color: #2aa9e0;
      background-color: #D0E8EF;
      padding: 10px 20px;
      border-radius: 20px;
    }
    &.active{
      color: #2aa9e0;
      /* background-color: #D0E8EF; */
      padding: 10px 20px;
      border-radius: 25px;
    }
  }
`
const Button = styled.button`
  color: white;
  background-color: #2aa9e0;
  padding: 10px 50px;
  border-radius: 25px;
  border: none;
  margin-top: 10px;
  font-size: 1em;
  font-weight: 700;
  outline: none;
  cursor: pointer;
`


export default Sidebar