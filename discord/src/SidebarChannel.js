import React from 'react'
import { useDispatch } from 'react-redux'
import './sidebarchannel.css'
import { setChannelId} from './store/appSlice'

function SidebarChannel({id,channel}) {
  const dispatch=useDispatch()
  const setDetails=()=>{
    dispatch(setChannelId({
      channelId:id,
      channelName:channel
    })
    )
  }
  return (
    <div className='sidebarchannel' onClick={setDetails}>
         <h4>{channel}</h4>
    </div>
  )
}

export default SidebarChannel