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
import CircularProgress from '@material-ui/core/CircularProgress';
import { TweetModal } from './components/TweetModal';

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

  const loaded = currentUserState.isLoaded;
  const showCircular = () => {
    if(!loaded) {
      return (
        <LoaderWrapper>
          <CircularProgress color='primary' style={{ width:"30px", height:"30px", }} />
        </LoaderWrapper>
      )
    }
  }

  return (
    <Router>
      <Wrapper>
        <TweetModal/>
        <div>
          <Sidebar/>
        </div>
        {showCircular()}
        <div>
          <Switch>
            <Route exact path='/'>
              {currentFeedState.feedLoaded && <HomeFeed />}
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
              {currentFeedState.feedLoaded && <TweetDetails />}
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
const LoaderWrapper = styled.div`
  margin: 100px auto;
  color: #FFF;
  display:flex;
  justify-content: center;
`
export default App;
