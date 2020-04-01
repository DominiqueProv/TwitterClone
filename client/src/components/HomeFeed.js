import React, { useContext } from 'react';
import { CurrentFeedContext } from '../contexts/CurrentFeed.context';
import TweetCard from './TweetCard';

function HomeFeed() {

  const { currentFeedState } = useContext(CurrentFeedContext);
  const tweetFeed = currentFeedState.currentFeed.tweetsById;
  
  return (
    <>
      <h1>Home</h1>
      <div>
        <TweetCard feedList={Object.values(tweetFeed)} />
      </div>
    </>
  );
}

export default HomeFeed;