import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const MenuFollow = ({ profileId }) => {
  return (
    <MenuWrapper>
      <MenuBox exact to={`/${profileId}/Followers`}>
        <TabTitle>Followers</TabTitle>
      </MenuBox>

      <MenuBox exact to={`/${profileId}/Following`}>
        <TabTitle>Following</TabTitle>
      </MenuBox>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
display: flex;
height: 60px;
color: #627483;
`
const MenuBox = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
transition: all .2s ease-in-out;
  &:hover{
    background-color: #E8F5FE;
  }
  &.active{
    border-bottom: 3px solid #2aa9e0 ;
    color: #2aa9e0;
  }
`
const TabTitle = styled.p`
  font-weight: 700;
  font-size: 1em;
`

export default MenuFollow
