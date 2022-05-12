import { Avatar } from '@material-ui/core'
import React from 'react'
import './message.css'

function Message() {
  return (
    <div className='message'>
      <Avatar/>
      <div className="messageInfo">
          <h3>
              emmanuel
              <span className='M_time'>timestamp</span>
          </h3>
          <p>this is a message</p>
      </div>
    </div>
  )
}

export default Message