import React from 'react'

function FriendCard(props:any) {
    const {name, location, treeCount} = props;
  return (
    <div className="card w-48  shadow-xl m-3 bg-[#f0f1f1]">
    <figure className="px-5 pt-5">
      <img src="https://loremflickr.com/320/240" alt="profile pic" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{location}</p>
      <p>Trees:{treeCount}</p>

    </div>
  </div>
  )
}

export default FriendCard