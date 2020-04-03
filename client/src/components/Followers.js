import React from 'react';
import styled from 'styled-components';
import { arrowLeft } from 'react-icons-kit/feather/arrowLeft'
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';



const Followers = () => {
  return(
    <Wrapper>
    <Title>
      <Link to={'/'}><IconArrow size={20} icon={arrowLeft} /></Link>
      <h1 style={{lineHeight: '20px'}}>{profileData.profile.displayName}<br/> 
      <TweetCount>{Object.keys(profileTweet.tweetsById).length} Tweets</TweetCount>
      </h1>
    </Title>
    </Wrapper>
  );
}



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

export default Followers