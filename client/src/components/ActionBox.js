import React, { useState, useContext } from 'react';
import { Icon } from 'react-icons-kit';
import { messageCircle } from 'react-icons-kit/feather/messageCircle';
import { repeat } from 'react-icons-kit/feather/repeat';
import { heart } from 'react-icons-kit/feather/heart';
import { share } from 'react-icons-kit/feather/share';
import styled from 'styled-components';


const ActionBox = ({ tweetId, tweetLiked, tweetRetweeted }) => {

  const [like, setLike] = useState(tweetLiked)
  const [retweet, setRetweet] = useState(tweetRetweeted)

  const handleLike = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    let likeReq = { like: !like }
    fetch(`/api/tweet/${tweetId}/like`, {
      "method": "PUT",
      body: JSON.stringify(likeReq),
      "headers": { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setLike(!like)
        }
      });
  }

  const handleRetweet = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    let retweetReq = { retweet: !retweet }
    fetch(`/api/tweet/${tweetId}/retweet`, {
      "method": "PUT",
      body: JSON.stringify(retweetReq),
      "headers": { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setRetweet(!retweet)
        }
      });
  }

  let liked = {};
  if (!like === false) {
    liked = { color: '#e0245e' };
  }

  let retweeted = {};
  if (!retweet === false) {
    retweeted = { color: '#17bf63' };
  }

  return (
    <>
      <Wrapper>
        <div><IconDialog
          size={20}
          icon={messageCircle} /></div>
        <div style={{ position: 'relative' }}>
          <IconRetweet onClick={ev => handleRetweet(ev)}
            style={retweeted}
            size={20}
            icon={repeat}
            toggle={!retweet} />
          {!retweet === false &&
            <LikeCount>
              1
        </LikeCount>
          }
        </div>
        <div style={{ position: 'relative' }}>
          <IconLike onClick={ev => handleLike(ev)}
            style={liked}
            size={20}
            icon={heart}
            toggle={!like} />
          {!like === false &&
            <LikeCount>
              1
        </LikeCount>
          }
        </div>
        <div><IconShare size={20} icon={share} /></div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 0 0;
  
`;

const IconDialog = styled(Icon)`
margin-right: 20px;
border-radius: 50%;
padding: 7px;
color: gray;
cursor: pointer;
transition: all .2s ease-in;
  &:hover{
    background-color: #E8F5FE;
    color: #2aa9e0;
  }
`;

const IconRetweet = styled(Icon)`
margin-right: 20px;
border-radius: 50%;
padding: 7px;
color: gray;
cursor: pointer;
transition: all .2s ease-in;
  &:hover{
    background-color: #e7f8ef;
    color: #17bf63;
  }
`;
const IconLike = styled(Icon)`
margin-right: 20px;
border-radius: 50%;
padding: 7px;
color: gray;
cursor: pointer;
position: relative;
z-index: 5;
transition: all .2s ease-in;
  &:hover{
    background-color: #fce9ef;
    color: #e0245e;
  }
`;
const IconShare = styled(Icon)`
margin-right: 20px;
color: gray;
border-radius: 50%;
padding: 7px;
cursor: pointer;
transition: all .2s ease-in;
  &:hover{
    background-color: #E8F5FE;
    color: #2aa9e0;
  }
`;
const LikeCount = styled.p`
position: absolute;
top:10px;
left:45px;
color: grey;
`;

export default ActionBox



