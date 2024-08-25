// eslint-disable-next-line no-unused-vars
import React from 'react'
import './list.css'
import Userinfo from './userinfo/Userinfo'
import ChatList from './chatList/ChatList'

function List() {
  return (
    <div className='list'>
      <Userinfo />
      <ChatList />
    </div>
  )
}

export default List