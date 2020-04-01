import React, { createContext, useReducer } from 'react';

export const OtherUserContext = createContext();

const initialState = {
  otherUser: null,
  status: 'loading',
  isLoaded: false
};

function otherUserReducer(state, action) {
  switch (action.type) {
    case 'received-user-profile':
      console.log(action.payload.data)
      return { ...state, otherUser: action.payload.data, isLoaded: true }
    default:
      throw new Error('Should not get there!');
  }
}

export function OtherUserProvider({ children }) {

  const [otherUserState, dispatch] = useReducer(otherUserReducer, initialState);

  const handleUserProfile = (data) => {
    dispatch({
      type: 'received-user-profile',
      payload: { data }
    });
  };

  return (
    <OtherUserContext.Provider value={{
      otherUserState,
      actions: {
        handleUserProfile
      }
    }}>
      {children}
    </OtherUserContext.Provider>
  );
}