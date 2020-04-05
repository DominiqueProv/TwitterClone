import React, { useContext } from 'react';
import { useParams } from "react-router";
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import TweetCard from './TweetCard';
import { arrowLeft } from 'react-icons-kit/feather/arrowLeft'
import { CurrentFeedContext } from '../contexts/CurrentFeed.context';
import { Link } from "react-router-dom";
import TweetDetailCard from "./TweetDetailCard";

function TweetDetails() {

  let { tweetId } = useParams();

  const { currentFeedState } = useContext(CurrentFeedContext);
  // console.log(currentFeedState.currentFeed.tweetsById)
  const tweetFeed = currentFeedState.currentFeed;
  // const feedList = Object.values(tweetFeed);
  // console.log(tweetFeed)
  // if(tweetFeed.tweetsById){
    const tweetDetail = tweetFeed.tweetsById[tweetId]
    // console.log(tweetDetail)
// }


  return (
    <Wrapper>
      <Title>
        <Link to={'/'}><IconArrow size={20} icon={arrowLeft} /></Link>
        <h1>Tweet</h1>
      </Title>
      <div>
          <TweetDetailCard tweet={tweetDetail}/>
      </div>

    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 600px;
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  div{
    position: relative;
  }
  p{
    font-size: .9em;
  }
`

const Title = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  align-items: center;
`
const IconArrow = styled(Icon)`
margin-right: 20px;
background-color: #fff;
border-radius: 50%;
padding: 7px;
color: #2aa9e0;
transition: all .2s ease-in;
  &:hover{
    background-color: #E8F5FE;
  }
`


export default TweetDetails;