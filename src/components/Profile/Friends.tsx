import React from 'react'
import FriendCard from './FriendCard'

function Friends() {
  return (
    <div>
      <h1 className='text-[40px] font-bold'>Friends</h1>
      <div className='flex flex-wrap'>
        <FriendCard name="Tanmay" location="Delhi" treeCount="1"/>
        <FriendCard name="Tanmay" location="Delhi" treeCount="2"/>
        <FriendCard name="Tanmay" location="Delhi" treeCount="3"/>
        <FriendCard name="Tanmay" location="Delhi" treeCount="4"/>
        <FriendCard name="Tanmay" location="Delhi" treeCount="5"/>


      </div>
    </div>
  )
}

export default Friends