import React, { createContext, useReducer } from 'react';
export const CurrentFeedContext = createContext();

const initialState = {
  currentUser: null,
  currentFeed: null,
<<<<<<< Updated upstream
  isLoaded: false,
  status: 'idle',
  feedLoaded: false,
  userFollowing: [],
  userFollowers: [],
  avatarNewTweet: null
=======
  status: 'idle',
  feedLoaded: false,
>>>>>>> Stashed changes
};


function currentFeedReducer(state, action) {

  switch (action.type) {

    case 'received-my-profile':
      return { ...state, currentUser: action.payload.data, isLoaded: true, status: 'logged In' }
    case 'received-feed-update':
<<<<<<< Updated upstream
      return { ...state, currentFeed: action.payload.data, feedLoaded: true, status: 'logged In' }
    case 'post-new-tweet':
      const newTweet = {
        ...action.payload.data.tweet,
        author: state.currentUser.profile,
        isLiked: false,
        isRetweeted: false,
        numLikes:0,
        numRetweets: 0,
      };

      // state.currentFeed.tweetIds.push(action.payload.data.tweet.id);
      state.currentFeed.tweetsById[action.payload.data.tweet.id] = newTweet;
      console.table('Hell',newTweet)
      // return newTweet
      return { ...state}
      // return { ...state, 
      //   currentFeed: { ...state.currentFeed, tweetsById: { ...state.currentFeed.tweetById, 
      //     [action.payload.data.tweet.id]: action.payload.data.tweet }}}
    case 'new-tweet-request':
      return { ...state, status: 'awaiting-response' }
    case 'new-tweet-success':
      return { ...state, status: 'sucess' }
    case 'following':
      return { ...state, userFollowing: action.payload.data, status: 'following' }
    case 'followers':
      return { ...state, userFollowers: action.payload.data, status: 'followers' }
=======
      return { ...state, currentFeed: action.payload.data, status: 'default', feedLoaded: true }
    case 'post-new-tweet':
    return { ...state, cureentFeed: action.data.newTweet, status: 'update'}
    case 'new-tweet-request':
      return {...state, status: 'awaiting-response'}
    case 'new-tweet-success':
      return {...state, status: 'sucess'}
>>>>>>> Stashed changes
    default:
      throw new Error('Should not get there!');
  }
}

export function CurrentFeedProvider({ children }) {

  const [currentFeedState, dispatch] = useReducer(currentFeedReducer, initialState);

  const handleUserLogIn = (data) => {
    dispatch({
      type: 'received-my-profile',
      payload: { data }
    });
  };

  const handleFollowing = (profileId) => {
    fetch(`/api/${profileId}/following`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'following',
          payload: { data }
        });
      });
  }

  const handleFollowers = (profileId) => {
    fetch(`/api/${profileId}/followers`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'followers',
          payload: { data },
        });
      });
  }

  const handleFeed = (data) => {
    dispatch({
      type: 'received-feed-update',
      payload: { data }
    });
  };

  const handleSubmitTweet = (tweetContent) => {
    fetch("/api/tweet", {
      "method": "POST",
      body: JSON.stringify({ status: tweetContent }),
      "headers": { "content-type": "application/json" },
    }).then(res => res.json())
      .then(data => {
        dispatch({
          type: 'post-new-tweet',
          payload: { data }
        });
      });

<<<<<<< Updated upstream
  };
=======
const newTweetRequest = () => {
  dispatch({
    type: 'new-tweet-request'
  })
}

const newTweetSuccess = () => {
  dispatch ({
    type: 'new-tweet-success'
  })
}

>>>>>>> Stashed changes

  return (
    <CurrentFeedContext.Provider value={{
      currentFeedState,
      actions: {
        handleFeed,
        handleSubmitTweet,
        handleUserLogIn,
        handleFollowing,
        handleFollowers
      }
    }}>
      {children}
    </CurrentFeedContext.Provider>
  );
}