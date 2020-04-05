import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";


const FollowingSmallBox = ({ followingUser, theyFollow }) => {
  const handle = followingUser.handle;
  let history = useHistory();

  const [following, setFollowing] = useState(theyFollow)

  function handleBackToProfile(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    history.push(`/${followingUser.handle}`);
  }

  const handleFollowing = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (!following) {
      fetch(`/api/${handle}/follow`, {
        "method": "PUT",
        "headers": { "content-type": "application/json" },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.success) {
            setFollowing(!following);
          }
        });
    } else {
      fetch(`/api/${handle}/unfollow`, {
        "method": "PUT",
        "headers": { "content-type": "application/json" },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.success) {
            setFollowing(!following);
          };
        });
    }
  }

  return (
    <>
      <Wrapper onClick={ev => { handleBackToProfile(ev) }}>
        <div>
          <Avatar src={followingUser.avatarSrc} alt="avatar" />
        </div>
        <div>
          <InfoBox>
            <div>
              <Name>{followingUser.displayName}</Name>
              <div style={{ display: 'flex' }}>
                <p style={{ padding: '3px 0 10px 0', color: '#627483' }}>@{followingUser.handle}</p>
                {followingUser.isFollowingYou &&
                  <FollowYou>Follows you</FollowYou>
                }
              </div>
            </div>
            <div>
              <FollowingButton
                onClick={(ev) => handleFollowing(ev)} >{following ? 'Following' : 'Follow'}
              </FollowingButton>
            </div>
          </InfoBox>
          <div style={{ fontSize: '.9em' }}>
            {followingUser.bio}
          </div>

        </div>

      </Wrapper>
    </>
  )
}


const Wrapper = styled.div`
  display: flex;
  width: 600px;
  padding: 15px 0;
  transition: all .3s ease-in;
  cursor: pointer;
  color: black;
  border-bottom: 1px solid #e6ecf0;
    &:hover{
      background-color:#F5F8FA;
    }
`
const Name = styled.h3`
  font-size: 1em; 
  font-weight: 700;
  &:hover{
    text-decoration: underline;
  }
`

const Avatar = styled.img`
 width: 50px;
 border-radius: 50%;
 margin: 0 20px;
`
const InfoBox = styled.div`
display : flex;
justify-content: space-between;
width: 480px;
`
const FollowYou = styled.div`
background-color: #e6ecef;
color: #627483;
font-size: .8em;
margin-left: 5px;
border-radius: 4px;
padding: 2px 5px 5px 5px;
justify-content: center;
display: flex;
height: 20px;
`
const FollowingButton = styled.button`
color: white;
background-color: #2aa9e0;
padding: 7px 20px;
border-radius: 25px;
border: none;
/* margin: 30px 20px 0 0 ; */
font-size: .9em;
font-weight: 700;
outline: none;
cursor: pointer;
`

export default FollowingSmallBox