import React from 'react';
import { Icon } from 'react-icons-kit';
import {messageCircle} from 'react-icons-kit/feather/messageCircle';
import { repeat } from 'react-icons-kit/feather/repeat';
import {heart} from 'react-icons-kit/feather/heart';
import {share} from 'react-icons-kit/feather/share';
import styled from 'styled-components';
const ActionBox =() => {

  return(
    <Wrapper>
      <div><Icon size={15} icon={messageCircle}/></div>
      <div><Icon size={15} icon={repeat}/></div>
      <div><Icon size={15} icon={heart}/></div>
      <div><Icon size={15} icon={share}/></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 30px 0 0;
  color: gray;
`

export default ActionBox