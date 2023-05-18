import React from 'react'

function Message() {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img 
        src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        { /* <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}  
      </div>
    </div>
  )
}

export default Message