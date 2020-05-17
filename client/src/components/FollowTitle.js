import React from 'react'
import { arrowLeft } from 'react-icons-kit/feather/arrowLeft'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'

const FollowTitle = ({ profileId }) => {
  return (
    <Title>
      <Link to={`/${profileId}`}><IconArrow size={20} icon={arrowLeft} /></Link>
      <h1 style={{ lineHeight: '20px' }}> @{profileId}<br />
        <TweetCount>Life is good</TweetCount>
      </h1>
    </Title>
  )
}

const Title = styled.div`
  padding: 15px;
  border-left: 1px solid #F4F7F6;
  border-right: 1px solid #F4F7F6;
  border-bottom: 2px solid #F4F7F6;
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
const TweetCount = styled.span`
font-size: .5em;
font-weight: 400;
color: gray;
`

export default FollowTitle
