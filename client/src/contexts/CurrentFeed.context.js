import React, { createContext, useReducer } from 'react';

export const CurrentFeedContext = createContext();

const initialState = {
  currentFeed: null,
  status: 'idle',
  feedLoaded: false,
};

function currentFeedReducer(state, action) {
  switch (action.type) {
    case 'received-feed-update':
      return { ...state, currentFeed: action.payload.data, status: 'default', feedLoaded: true }
    case 'post-new-tweet':
    return { ...state, cureentFeed: action.data.newTweet, status: 'update'}
    case 'new-tweet-request':
      return {...state, status: 'awaiting-response'}
    case 'new-tweet-success':
      return {...state, status: 'sucess'}
    default:
      throw new Error('Should not get there!');
  }
}

export function CurrentFeedProvider({ children }) {

  const [currentFeedState, dispatch] = useReducer(currentFeedReducer, initialState);

  const handleFeed = (data) => {
    dispatch({
      type: 'received-feed-update',
      payload: { data }
    });
  };

  const handleSubmitTweet = (tweetContent) => {
    fetch("/api/tweet", {
      "method": "POST",
      body: JSON.stringify(tweetContent),
      "headers": { "content-type": "application/json" },
    }).then(res => res.json())
      .then(data => {
        dispatch({
          type: 'post-new-tweet',
          payload: { data }
        });
      });
    
};

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


return (
  <CurrentFeedContext.Provider value={{
    currentFeedState,
    actions: {
      handleFeed,
      handleSubmitTweet,
    }
  }}>
    {children}
  </CurrentFeedContext.Provider>
);
}