import React, { createContext, useReducer } from 'react';

export const CurrentFeedContext = createContext();

const initialState = {
  currentFeed: null,
  status: 'idle',
  isLoaded: false
};

function currentFeedReducer(state, action) {
  switch (action.type) {
    case 'received-feed-update':
      return { ...state, currentFeed: action.payload.data, status: 'active', isLoaded: true }
    default:
      throw new Error('Should not get there!');
  }
}

export function CurrentFeedProvider({ children }) {

  const [currentFeedState, dispatch] = useReducer(currentFeedReducer, initialState);

  const handleFeed = (data) => {
    dispatch({
      type: 'received-feed-update',
      payload:{data}
    });
  };

  return (
    <CurrentFeedContext.Provider value={{
      currentFeedState,
      actions: {
        handleFeed
      }
    }}>
      {children}
    </CurrentFeedContext.Provider>
  );
}