import React, { createContext, useReducer } from 'react';

export const CurrentUserContext = createContext();

const initialState = {
  currentUser: null,
  status: 'idle',
  isLoaded: false,
  userFollowing: [],
  userFollowers: [],
};


function currentUserReducer(state, action) {
  switch (action.type) {
    case 'received-my-profile':
      return { ...state, currentUser: action.payload.data, status: 'logged In', isLoaded: true }
    case 'following':
      return { ...state, userFollowing: action.payload.data , status: 'following'}
    case 'followers':
      return { ...state, userFollowers: action.payload.data, status: 'followers' }
    default:
      throw new Error('Should not get there!');
  }
}

export function CurrentUserProvider({ children }) {

  const [currentUserState, dispatch] = useReducer(currentUserReducer, initialState);

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
  return (
    <CurrentUserContext.Provider value={{
      currentUserState,
      actions: {
        handleUserLogIn,
        handleFollowing,
        handleFollowers
      }
    }}>
      {children}
    </CurrentUserContext.Provider>
  );
}