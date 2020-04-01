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
        console.log(data)
        // handleUserLogIn(data)
      });
  }, []);


  useEffect(() => {
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
          <Sidebar />
        </div>
        <div>
          <Switch>
            <Route exact path='/'>
              {currentFeedState.isLoaded && <HomeFeed />}
            </Route>
            <Route exact path='/notifications'>
              <Notifications />
            </Route>
            <Route exact path='/bookmarks'>
              <Bookmarks />
            </Route>
            <Route exact path='/tweet/:tweetId'>
              <TweetDetails />
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
  width: 70vw;
  margin: 0 auto;
`

export default App;
