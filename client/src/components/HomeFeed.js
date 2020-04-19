import React, { useContext, useEffect } from 'react';
import { CurrentFeedContext } from '../contexts/CurrentFeed.context';
import TweetCard from './TweetCard';
import styled from 'styled-components';
import TweetBox from './TweetBox'

const HomeFeed = () => {

  const { currentFeedState } = useContext(CurrentFeedContext);
  const tweetFeed = currentFeedState.currentFeed.tweetsById;
  const feedList = Object.values(tweetFeed);

  return (
    <>
      <Wrapper>
        <Title>
          <h1>Home</h1>
        </Title>

        <TweetBox />
        <div>
          {feedList.map(tweet => (
            <TweetCard tweet={tweet}
              key={tweet.id} />
          )).reverse()}

        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
border-left: 1px solid #e6ecf0;
border-right: 1px solid #e6ecf0;
`
const Title = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e6ecf0; 
`

export default HomeFeed;