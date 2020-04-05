import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CurrentUserContext } from '../contexts/CurrentUser.context';
import { CurrentFeedContext } from '../contexts/CurrentFeed.context';

const TweetBox = () => {
  const { currentUserState } = useContext(CurrentUserContext);
  const { actions: {handleSubmitTweet} } = useContext(CurrentFeedContext);

  const [input, setInput] = useState({status: ""})
  let textColor = { color: 'lightgray' };
  if (input.status.length > 100 && input.status.length < 230) {
    textColor = { color: 'grey' }
  } else if (input.status.length > 230 && input.status.length < 260) {
    textColor = { color: 'orange' }
  } else if (input.status.length > 260) {
    textColor = { color: 'red' }
  }

  return (
    <>
      {currentUserState.currentUser &&
        <Content>
          <div>
            <Avatar src={currentUserState.currentUser.profile.avatarSrc} alt="avatar" />
          </div>
          <div>
            <form>
              <Textarea 
                maxLength={280}
                onChange={(event) => { setInput({...input, status: event.target.value }) }} 
                placeholder='Got something to say...' />
              <FormFooter>
                <div>
                  <p style={textColor}>{280 - input.status.length}</p>
                </div>
                <div>
                  <Input disabled={input.status.length === 0} type="submit" value="Meow" onClick={() => handleSubmitTweet(input)} />
                </div>
              </FormFooter>
            </form>
          </div>
        </Content>
      }
    </>
  );
}

const Textarea = styled.textarea`
resize: none;
border: none;
font-size: 1em;
color: grey;
outline: none;
width: 480px;
height: 150px;
background-color:#F4F7F6;
padding: 10px;
border-radius: 10px;
  &::placeholder {
  color: lightgrey;  
}
`
const Input = styled.input`
  color: white;
  background-color: #2aa9e0;
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  margin-top: 10px;
  font-size: 1em;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: background-color .2s ease-in;
  ${({ disabled }) => disabled && `
    background: #bce5ff;
  `}
`


const FormFooter = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
  p{
    margin: 10px 20px 0 0;  

  }
`

const Content = styled.div`
  display: flex;
  width: 600px;
  padding: 15px 0;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;

  p{
    font-size: .9em;
  }
`

const Avatar = styled.img`
 width: 50px;
 border-radius: 50%;
 margin: 0 20px;
`


export default TweetBox