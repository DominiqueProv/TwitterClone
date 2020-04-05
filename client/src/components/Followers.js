import React, {useContext} from 'react';
import styled from 'styled-components';
import { CurrentUserContext } from '../contexts/CurrentUser.context';
import FollowSmallBox from './FollowSmallBox';
import { useParams } from 'react-router-dom';
import MenuFollow from './MenuFollow';
import FollowTitle from './FollowTitle';
import { NavLink } from 'react-router-dom';


const Followers = () => {

  const { profileId } = useParams();
  const { currentUserState, actions: handleFollowers, handleFollowing } = useContext(CurrentUserContext);
  console.log(currentUserState)
  // const followers = currentUserState.userFollowers;
  // const name = currentUserState.currentUser.profile.displayName;
  // if (currentUserState.currentUser.profile.displayName) {
  //   console.log(currentUserState.currentUser.profile.displayName)
  // }

  return (
    <>
      {currentUserState.userFollowers.followers &&
        <Wrapper>
          <FollowTitle profileId={profileId} />
          <MenuWrapper>
            
            <MenuBox exact to={`/${profileId}/Followers`} >
              <TabTitle>Followers</TabTitle>
            </MenuBox>
            <MenuBox exact to={`/${profileId}/Following`}>
              <TabTitle>Following</TabTitle>
            </MenuBox>
          </MenuWrapper>
          {/* <MenuFollow
            profileId={profileId}/> */}
          <div>
          {currentUserState.userFollowers.followers.map(follower => (
            <FollowSmallBox
              follower={follower}
              key={follower.handle}
              iFollow={follower.isBeingFollowedByYou}
            />
          ))}
          </div>
        </Wrapper>
      }
    </>
  );
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


const Wrapper = styled.div`
  width: 600px;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  div{
    position: relative;
  }
  p{
    font-size: .9em;
  }
`

export default Followers