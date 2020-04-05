import React, { useContext } from 'react';
import styled from 'styled-components';
import { arrowLeft } from 'react-icons-kit/feather/arrowLeft'
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { CurrentUserContext } from '../contexts/CurrentUser.context';
import FollowSmallBox from './FollowSmallBox';
import { useParams } from 'react-router-dom';


const Followers = () => {

  const { profileId } = useParams();
  const { currentUserState } = useContext(CurrentUserContext);
  const followers = currentUserState.userFollowers;
  // const name = currentUserState.currentUser.profile.displayName;
  // if (currentUserState.currentUser.profile.displayName) {
  //   console.log(currentUserState.currentUser.profile.displayName)
  // }

  return (
    <>
      {currentUserState.userFollowers.followers &&
        <Wrapper>
          <Title>
            <Link to={`/${profileId}`}><IconArrow size={20} icon={arrowLeft} /></Link>
            <h1 style={{ lineHeight: '20px' }}> @{profileId}<br />
              <TweetCount>texte Lorem</TweetCount>
            </h1>
          </Title>
          <div>
            <div>
              Followers
            </div>
            <div>
              Following
            </div>
          </div>
          <div>
          {currentUserState.userFollowers.followers.map(follower => (
            <FollowSmallBox 
                follower={follower}
                key={followers.handle}
                iFollow={follower.isBeingFollowedByYou}
                theyFollow={follower.isFollowingYou}
                
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
const Title = styled.div`
  padding: 15px;
  border-left: 1px solid #F4F7F6;
  border-right: 1px solid #F4F7F6;
  border-bottom: 2px solid #F4F7F6;
  display: flex;
  align-items: center;
`
const IconArrow = styled(Icon)`
margin-right: 20px;
background-color: #fff;
border-radius: 50%;
padding: 7px;
color: #2aa9e0;
transition: all .2s ease-in;
  &:hover{
    background-color: #E8F5FE;
  }
`

const TweetCount = styled.span`
font-size: .5em;
font-weight: 400;
color: gray;
`

export default Followers