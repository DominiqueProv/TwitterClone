import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurrentUserProvider } from './contexts/CurrentUser.context';
import {CurrentFeedProvider} from './contexts/CurrentFeed.context';

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CurrentFeedProvider>
    <App />
    </CurrentFeedProvider>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
