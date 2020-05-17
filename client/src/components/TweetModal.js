import React, { useContext } from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { TweetContext } from '../contexts/Tweet.Context'
import { useStyles, Fade } from '../styles/TweetModal.css'
import styled from 'styled-components'
import TweetBox from './TweetBox'
import { x } from 'react-icons-kit/feather/x'
import { Icon } from 'react-icons-kit'

export const TweetModal = () => {
  const classes = useStyles()
  const { state, actions } = useContext(TweetContext)
  return (
    <div>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        className={classes.modal}
        open={state.open === true}
        onClose={actions.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={state.open === true}>
          <div className={classes.paper}>
            <Header>
              <CloseModal
                onClick={actions.handleClose}
                size={30}
                icon={x}
              />
            </Header>
            <TweetBox />

          </div>
        </Fade>
      </Modal>
    </div>
  )
}

const Header = styled.div`
border-bottom: 1px solid #e6ecf0;
margin-bottom: 10px;
`
const CloseModal = styled(Icon)`
  margin: 10px 0 8px 15px; 
  color: #2593d8;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  transition: all .2s ease-in-out;
  &:hover{
    background-color: #E8F5FE;
    border-radius: 50%;
  }
`
