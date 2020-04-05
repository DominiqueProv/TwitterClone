import React, { useContext } from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { CurrentUserContext } from '../contexts/CurrentUser.context';
import FollowingSmallBox from './FollowingSmallBox';
import { useParams } from 'react-router-dom';
import MenuFollow from './MenuFollow';
import FollowTitle from './FollowTitle';
import { NavLink } from 'react-router-dom';

const Following = () => {

  const { profileId } = useParams();
  const { currentUserState } = useContext(CurrentUserContext);
  const following = currentUserState.userFollowing;


  return(
    <>
    {currentUserState.userFollowers.followers && currentUserState.userFollowing.following &&
      <Wrapper>
        <FollowTitle profileId={profileId}/>
        <MenuWrapper>
      <MenuBox exact to={`/${profileId}/Followers`}>
          <TabTitle>Followers</TabTitle>
        </MenuBox>
     
      <MenuBox exact to={`/${profileId}/Following`}>
          <TabTitle>Following</TabTitle>
        </MenuBox>
    </MenuWrapper>
        {/* <MenuFollow profileId={profileId}/> */}
        <div>
        {currentUserState.userFollowing.following.map(followingUser => (
          <FollowingSmallBox 
              followingUser={followingUser}
              key={followingUser.handle}
              // iFollow={followingUser.isBeingFollowedByYou}
              theyFollow={followingUser.isFollowingYou}
              
            />
        ))}
        </div>
      </Wrapper>
    }
  </>
  );
}

const Wrapper = styled.div`
  width: 600px;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  height: 100vh;
  div{
    position: relative;
  }
  p{
    font-size: .9em;
  }
`
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


export default Following