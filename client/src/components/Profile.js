import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { mapPin } from 'react-icons-kit/feather/mapPin';
import { calendar } from 'react-icons-kit/feather/calendar';
import { useParams } from 'react-router-dom';
import TweetCard from './TweetCard';
import { arrowLeft } from 'react-icons-kit/feather/arrowLeft'
import { Link } from 'react-router-dom';

function Profile() {

  const { profileId } = useParams();
  const [profileData, setProfileData] = useState({});
  const [profileTweet, setProfileTweetData] = useState({});

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then(res => res.json())
      .then(data => {
        setProfileData(data);
      }).catch(function() {
        console.log("error");
    });

    fetch(`/api/${profileId}/feed`)
      .then(res => res.json())
      .then(data => {
        setProfileTweetData(data);
      }).catch(function() {
        console.log("error");
    });
  }, [profileId]);


  return (
    <>
      {profileData.profile ? (
        <Wrapper>
          <Title>
            <Link to={'/'}><IconArrow size={20} icon={arrowLeft} /></Link>
            <h1>{profileData.profile.displayName}</h1>
          </Title>
          <div>
            <HeroBanner src={profileData.profile.bannerSrc} alt='hero banner' />
            <Avatar src={profileData.profile.avatarSrc} alt='avatar' />
          </div>
          <div style={{ textAlign: "right" }}>
            <FollowingButton>Following</FollowingButton>
          </div>
          <div style={{ margin: '15px 0 0 15px' }}>
            <h2>{profileData.profile.displayName}</h2>
            <p style={{ paddingBottom: '10px' }}>@{profileData.profile.handle}
              <FollowYou>Follows you</FollowYou></p>
            <p style={{ paddingBottom: '10px' }}>Best friend with @{profileData.profile.handle}</p>
            <InfoIcon>
              <div><Icon size={15} icon={mapPin} /> {profileData.profile.location}</div>
              <div><Icon style={{ paddingLeft: '30px' }} size={15} icon={calendar} /> Joined {profileData.profile.joined}</div>
            </InfoIcon>
            <div style={{ display: 'flex', margin: '10px 0 0 0' }}>
              <div style={{ marginRight: '30px' }}>
                <p>{profileData.profile.numFollowing} Following</p>
              </div>
              <div>
                <p>{profileData.profile.numFollowers} Followers</p>
              </div>
            </div>
          </div>

        </Wrapper>
      ) : (
          <div>Profile</div>
        )}

      {profileTweet.tweetsById ? (
        <>
          <Menu>
            <MenuItem style={{ borderBottom: '3px solid #2aa9e0 ' }}><span style={{ color: '#2aa9e0' }}>Tweets</span></MenuItem>
            <MenuItem>Media</MenuItem>
            <MenuItem >Likes</MenuItem>
          </Menu>
          <div>
            {
              Object.values(profileTweet.tweetsById).map(tweet => (
                <TweetCard tweet={tweet}
                            key={tweet.id}
                />
              ))}
          </div>
        </>
      ) : (
          <div>Profile</div>
        )}
    </>
  );
}

const Menu = styled.div`
display: flex;
align-items: center;
height: 60px;
border-left: 1px solid #e6ecf0;
border-right: 1px solid #e6ecf0;
border-bottom: 1px solid #e6ecf0;

`
const MenuItem = styled.div`
width: 33%;
text-align: center;
font-weight: 700;
color: gray;
height: 100%;
padding-top: 15px;
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
const HeroBanner = styled.img`
width: 598px;
`
const Avatar = styled.img`
width: 120px;
border-radius: 50%;
border: 4px solid white;
position: absolute;
bottom: -55px;
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
const Title = styled.div`
  padding: 20px 15px;
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

export default Profile;