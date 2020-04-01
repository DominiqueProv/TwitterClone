import React from 'react';
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { repeat } from 'react-icons-kit/feather/repeat'
import ActionBox from './ActionBox';
import { Link } from 'react-router-dom';

const TweetCard = ({ feedList }) => {
  
  return (
    <Wrapper data-name='wrapper'>
      {feedList.map(tweet => {

        console.log(tweet)
        return(
        <div data-name='box' 
             key={tweet.id} 
             style={{ borderBottom: "1px solid #F4F7F6", padding: '7px 0' }}
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
                
                <Link to={`/${tweet.author.handle}`}><span style={{ fontWeight: '700' }}>{tweet.author.displayName}</span></Link>
                <span style={{ color: 'gray' }}>@{tweet.author.handle} • {tweet.timestamp}</span>
              </p>
              <p style={{ width: '480px' }}>{tweet.status}</p>
              {tweet.media.length > 0 &&
                <MainPic src={tweet.media[0].url}
                  alt='img'/>
              }
              <ActionBox />
            </div>
          </Content>
        </div>
      )}
    )}
    </Wrapper>

  )
}
const Content = styled.div`
  display: flex;
  width: 600px;
  margin: 10px 20px;
  p{
    font-size: .9em;
  }
`

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #F4F7F6;
  border-right: 1px solid #F4F7F6;
`
const MainPic = styled.img`
    width: 480px;
    margin: 15px 30px 10px 0;
    border-radius: 18px;
`

const Avatar = styled.img`
 width: 50px;
 border-radius: 50%;
 margin-right: 20px;
`

export default TweetCard
