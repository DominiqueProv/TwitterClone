import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Bookmarks from './components/Bookmarks';
import TweetDetails from './components/TweetDetails';
import HomeFeed from './components/HomeFeed';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import GlobalStyles from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import { CurrentUserContext } from './contexts/CurrentUser.context';
import { CurrentFeedContext } from './contexts/CurrentFeed.context';
import Following from './components/Following';
import Followers from './components/Followers';


function App() {

  const {
    currentUserState,
    actions: { handleUserLogIn },
  } = useContext(CurrentUserContext);

  const {
    currentFeedState,
    actions: { handleFeed },
  } = useContext(CurrentFeedContext);


  useEffect(() => {
    fetch(`/api/me/profile`)
      .then(res => res.json())
      .then(data => {
        handleUserLogIn(data)
      });
  
    fetch("/api/me/home-feed")
      .then(res => res.json())
      .then(data => {
        handleFeed(data)
      });
  }, []);



  return (
    <Router>
      <Wrapper>
        <div>
          <Sidebar/>
        </div>
        <div>
          <Switch>
            <Route exact path='/'>
              {currentFeedState.isLoaded && <HomeFeed />}
            </Route>
            <Route exact path='/notifications'>
              <Notifications />
            </Route>
            <Route exact path='/:profileId/Following'>
              <Following />
            </Route>
            <Route exact path='/:profileId/Followers'>
              <Followers />
            </Route>
            <Route exact path='/bookmarks'>
              <Bookmarks />
            </Route>
            <Route exact path='/tweet/:tweetId'>
              {currentFeedState.isLoaded && <TweetDetails />}
            </Route>
            <Route exact path='/:profileId'>
              {currentUserState.isLoaded && <Profile />}
            </Route>
          </Switch>
        </div>
      </Wrapper>
      <GlobalStyles />
    </Router>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  @media (max-width: 850px) {
  width: 665px;
  }
`

export default App;
