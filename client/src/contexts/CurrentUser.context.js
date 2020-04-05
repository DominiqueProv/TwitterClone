import React, { createContext, useReducer } from 'react';

export const CurrentUserContext = createContext();

const initialState = {
  currentUser: null,
  status: 'idle',
  isLoaded: false
};


function currentUserReducer(state, action) {
  switch (action.type) {
    case 'received-my-profile':
      return { ...state, currentUser: action.payload.data, status: 'logged In', isLoaded: true }
    case 'following':
      return { ...state, userFollowing: action.payload.data, isLoaded: true }
    case 'followers':
      return { ...state, userFollowers: action.payload.data, isLoaded: true }
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

  return (
    <CurrentUserContext.Provider value={{
      currentUserState,
      actions: {
        handleUserLogIn,
      }
    }}>
      {children}
    </CurrentUserContext.Provider>
  );
}