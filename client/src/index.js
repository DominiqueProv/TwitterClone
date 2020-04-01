import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurrentUserProvider } from './contexts/CurrentUser.context';
import {CurrentFeedProvider} from './contexts/CurrentFeed.context';
import { OtherUserProvider } from './contexts/OtherUser.context';



ReactDOM.render(
  <React.StrictMode>
    <OtherUserProvider>
    <CurrentUserProvider>
      <CurrentFeedProvider>
    <App />
    </CurrentFeedProvider>
    </CurrentUserProvider>
    </OtherUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
