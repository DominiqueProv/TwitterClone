import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { mapPin } from 'react-icons-kit/feather/mapPin';
import { calendar } from 'react-icons-kit/feather/calendar';
import { CurrentUserContext } from '../contexts/CurrentUser.context';
import { useParams } from 'react-router';


function Profile() {

  const { currentUserState,
    actions: { handleUserProfile }
  } = useContext(CurrentUserContext)
  console.log(currentUserState)
  const { bannerSrc,
    avatarSrc,
    displayName,
    location,
    joined,
    bio,
    numFollowing,
    numFollowers,
    handle
  } = currentUserState.currentUser;

  

  const { profileId } = useParams();
  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then(res => res.json())
      .then(data => {
        handleUserProfile(data)
        // alert('Hello');
      });
  }, []);


  return (
    <Wrapper>
      <div>
        <HeroBanner src={bannerSrc} alt='hero banner' />
        <Avatar src={avatarSrc} alt='avatar' />
      </div>
      <div style={{ textAlign: "right" }}>
        <FollowingButton>Following</FollowingButton>
      </div>
      <div style={{ margin: '15px 0 0 15px' }}>
        <h2>{displayName}</h2>
        <p style={{ paddingBottom: '10px' }}>@{handle} <FollowYou>Follows you</FollowYou></p>
        <p style={{ paddingBottom: '10px' }}>Best friend with @{handle}</p>
        <InfoIcon>
          <div><Icon size={15} icon={mapPin} /> {location}</div>
          <div><Icon style={{ paddingLeft: '30px' }} size={15} icon={calendar} /> Joined {joined}</div>
        </InfoIcon>
        <div style={{ display: 'flex', margin: '10px 0 0 0' }}>
          <div style={{ marginRight: '30px' }}><p>{numFollowing} Following</p></div>
          <div><p>{numFollowers} Followers</p></div>
        </div>
      </div>


    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 600px;
  border-left: 1px solid #F4F7F6;
  border-right: 1px solid #F4F7F6;
  div{
    position: relative;
  }
  p{
    font-size: .9em;
  }
`
const HeroBanner = styled.img`
width: 600px;
`
const Avatar = styled.img`
width: 150px;
border-radius: 50%;
border: 4px solid white;
position: absolute;
bottom: -75px;
left: 30px;
`

const FollowYou = styled.span`
color: gray;
font-size: .7em;
background-color: #eaeaea;
padding: 2px 4px;
border-radius: 3px;
`
const InfoIcon = styled.div`
display: flex;
align-items: center;
`

const FollowingButton = styled.button`

color: white;
  background-color: #2aa9e0;
  padding: 10px 30px;
  border-radius: 25px;
  border: none;
  margin: 30px 20px 0 0 ;
  font-size: 1em;
  font-weight: 700;
  outline: none;
  cursor: pointer;

`
export default Profile;