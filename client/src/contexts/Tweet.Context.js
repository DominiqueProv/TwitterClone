import React, { createContext, useReducer } from 'react';

export const TweetContext = createContext();

const initialState = {
  open: false
}


function reducer(state, action) {
  switch (action.type) {
    case 'OPEN':
      return {
        ...state,
        open: true
      };
    case 'CLOSE':
      return {
        ...state,
        open: false
      };
    default:
      return {
        ...state,
        open: false
      }
  }
}

export const TweetProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpen = () => {
    dispatch({
      type: 'OPEN',
    });
  };

 const handleClose = () => {
    dispatch({
      type: 'CLOSE',
    });
  };


  return (
    <TweetContext.Provider value={{
        state,
        actions: {
          handleOpen,
          handleClose
        },
    }}
    >
      {children}
    </TweetContext.Provider>
  );
};
