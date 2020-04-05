import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurrentUserProvider } from './contexts/CurrentUser.context';
import { CurrentFeedProvider } from './contexts/CurrentFeed.context';
import { TweetProvider } from './contexts/Tweet.Context';



ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CurrentFeedProvider>
        <TweetProvider>
          <App />
        </TweetProvider>
      </CurrentFeedProvider>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
