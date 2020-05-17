import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CurrentFeedProvider } from './contexts/CurrentFeed.context'
import { TweetProvider } from './contexts/Tweet.Context'

ReactDOM.render(
  <React.StrictMode>
    <CurrentFeedProvider>
      <TweetProvider>
        <App />
      </TweetProvider>
    </CurrentFeedProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
