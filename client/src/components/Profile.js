import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { mapPin } from 'react-icons-kit/feather/mapPin';
import { calendar } from 'react-icons-kit/feather/calendar';
import { useParams } from 'react-router-dom';
import TweetCard from './TweetCard';
import { arrowLeft } from 'react-icons-kit/feather/arrowLeft'
import { Link } from 'react-router-dom';
import {CurrentUserContext} from '../contexts/CurrentUser.context';


function Profile() {
  const { actions: {handleFollowing, handleFollowers} } = useContext(CurrentUserContext);
  const { profileId } = useParams();
  const [profileData, setProfileData] = useState({});
  const [profileTweet, setProfileTweetData] = useState({});

  // const [follow, setFollow] = useState({})

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then(res => res.json())
      .then(data => {
        setProfileData(data);
      }).catch(function () {
        console.log("error");
      });

    fetch(`/api/${profileId}/feed`)
      .then(res => res.json())
      .then(data => {
        setProfileTweetData(data);
      }).catch(function () {
        console.log("error");
      });
  }, [profileId]);


  // isBeingFollowedByYou

  // let followedByMe = {};
  // if (!follow === false) {
  //   followedByMe = { color: '#17bf63' };
  // }
  return (
    <>
      {profileData.profile && profileTweet.tweetsById ? (
        <Wrapper>
          <Title>
            <Link to={'/'}><IconArrow size={20} icon={arrowLeft} /></Link>
            <h1 style={{lineHeight: '20px'}}>{profileData.profile.displayName}<br/> 
            <TweetCount>{Object.keys(profileTweet.tweetsById).length} Tweets</TweetCount>
            </h1>
          </Title>
          <div>
            <HeroBanner src={profileData.profile.bannerSrc} alt='hero banner' />
            <Avatar src={profileData.profile.avatarSrc} alt='avatar' />
          </div>
          <div style={{ textAlign: "right", height:"70px" }}>
            {profileData.profile.isBeingFollowedByYou &&
            <FollowingIcon>Following</FollowingIcon>
            }
          </div>
          <div style={{ margin: '0 0 0 15px' }}>
            <h2>{profileData.profile.displayName}</h2>
            <p style={{ paddingBottom: '10px' }}>@{profileData.profile.handle}</p>
            {/* <FollowYou>Follows you</FollowYou> */}
            {/* <p style={{ paddingBottom: '10px' }}>Best friend with @{profileData.profile.handle}</p> */}
            <InfoIcon>
              <div>
                <Icon size={15} icon={mapPin} /> {profileData.profile.location}
              </div>
              <div>
                <Icon style={{ paddingLeft: '30px' }} size={15} icon={calendar} /> Joined {profileData.profile.joined}
              </div>
            </InfoIcon>
            <div style={{ display: 'flex', margin: '20px 0 0 0' }}>
              <div style={{ marginRight: '30px' }}>
                <p onClick={() => handleFollowing(profileId)}>
                 <LinkFollow to ={`/${profileId}/Following`}> <span style={{ fontWeight: '700' }}>{profileData.profile.numFollowing} </span>
                  Following </LinkFollow>
                  </p>
              </div>
              <div>
                <p onClick={() => handleFollowers(profileId)}>
                <LinkFollow to ={`/${profileId}/Followers`}>
                  <span style={{ fontWeight: '700' }}>{profileData.profile.numFollowers} </span>
                Followers
                </LinkFollow>
                </p>
              </div>
            </div>
          </div>

        </Wrapper>
      ) : 
      (
          <div></div>
        )
        }
      {profileTweet.tweetsById ? (
        <>
        <div style={{ borderLeft: '1px solid #e6ecf0', borderRight: '1px solid #e6ecf0' }}>
          <Menu>
            <MenuItem style={{ borderBottom: '3px solid #2aa9e0 ' }}><span style={{ color: '#2aa9e0' }}>Tweets</span></MenuItem>
            <MenuItem>Media</MenuItem>
            <MenuItem >Likes</MenuItem>
          </Menu>
          
            {
              Object.values(profileTweet.tweetsById).map(tweet => (
                <TweetCard tweet={tweet}
                  key={tweet.id}
                />
              )).reverse()}
          </div>
        </>
      ) : (
          <div></div>
        )}
    </>
  );
}

const Menu = styled.div`
display: flex;
align-items: center;
height: 60px;
/* border-left: 1px solid #e6ecf0;
border-right: 1px solid #e6ecf0; */

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
width: 600px;
`
const Avatar = styled.img`
width: 142px;
border-radius: 50%;
border: 4px solid white;
position: absolute;
bottom: -55px;
left: 10px;
`

// const FollowYou = styled.span`
// color: gray;
// font-size: .7em;
// background-color: #eaeaea;
// padding: 2px 4px;
// border-radius: 3px;
// `
const InfoIcon = styled.div`
display: flex;
align-items: center;
`
const TweetCount = styled.span`
font-size: .5em;
font-weight: 400;
color: gray;
`


const FollowingIcon = styled.button`
color: white;
background-color: #2aa9e0;
padding: 10px 30px;
border-radius: 25px;
border: none;
margin: 30px 20px 0 0 ;
font-size: 1em;
font-weight: 700;
outline: none;
/* cursor: pointer; */
`
const Title = styled.div`
  padding: 10px;
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
const LinkFollow = styled(Link)`
  color: black;
    &:hover{
      text-decoration: underline;
    }
`

export default Profile;