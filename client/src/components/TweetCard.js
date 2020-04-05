import React from 'react';
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { repeat } from 'react-icons-kit/feather/repeat'
import ActionBox from './ActionBox';
import { useHistory } from "react-router-dom";

const TweetCard = ({ tweet }) => {
  // console.log(tweet)
  let history = useHistory();

  function handleClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    history.push(`/${tweet.author.handle}`);
  }

  function handleDetailTweet(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    history.push(`/tweet/${tweet.id}`);
  }

  return (
    <Wrapper onClick={ev => { handleDetailTweet(ev) }} data-name='wrapper'
      //  tabIndex="0" 
      aria-label='View tweet'>
      <div data-name='box'
        key={tweet.id}
        style={{ borderBottom: "1px solid #e6ecf0", padding: '12px 0' }}
      >
        {tweet.retweetFrom &&
          <p style={{ color: 'gray', fontSize: ".8em" }}>
            <Icon style={{ padding: '0 15px 0 30px' }}
              size={15}
              icon={repeat}
            />{tweet.retweetFrom.handle} Remeowed
          </p>}
        <Content>
          <div>
            <Avatar src={tweet.author.avatarSrc} alt="avatar" />
          </div>
          <div>
            <p style={{ padding: '0 0 7px 0' }}>
              <a onClick={ev => { handleClick(ev) }}
                style={{ fontWeight: '700' }}>{tweet.author.displayName}</a>
              <span style={{ color: 'gray', paddingLeft: '10px' }}>@{tweet.author.handle} • {tweet.timestamp}</span>
            </p>
            <p style={{ width: '480px' }}>{tweet.status}</p>
            {tweet.media.length > 0 &&
              <ImageWrapper>
                <MainPic src={tweet.media[0].url}
                  alt='img' />
              </ImageWrapper>
            }
            <ActionBox tweetId={tweet.id}
                       tweetLiked={tweet.isLiked}
                       tweetReweet={tweet.isRetweeted} />
          </div>
        </Content>
      </div>
    </Wrapper>
  )
}
const Content = styled.div`
  display: flex;
  width: 480px;
  margin: 10px 20px;
  z-index: 2;
  p{
    font-size: .9em;
  }
  a{
    &:hover{
      text-decoration: underline;
    }
  }
`

const ImageWrapper = styled.div`
    height: 300px;
    overflow: hidden;
    border-radius: 12px;
`

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  transition: all .3s ease-in;
  cursor: pointer;
  color: grey;
    &:hover{
      background-color:#F5F8FA;
    }
    
`
const MainPic = styled.img`
    width: 480px;
    margin: 15px 0px 10px 0;
    border-radius: 18px;
`

const Avatar = styled.img`
 width: 50px;
 border-radius: 50%;
 margin-right: 20px;
`
export default TweetCard
