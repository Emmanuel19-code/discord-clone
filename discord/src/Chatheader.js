import React from 'react'
import './chatheader.css'
import NotificationsIcon from '@material-ui/icons/Notifications'
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded'
import PeopleALtRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'
import { useSelector } from 'react-redux'
import { selectChannelName } from './store/appSlice'

function Chatheader() {
  const channelName=useSelector(selectChannelName)
  return (
    <div className='chatheader'>
        <div className="chleft">
            <h3>{channelName}</h3>
        </div>
        <div className="chRight">
         <NotificationsIcon/>
         <EditLocationRoundedIcon/>
         <PeopleALtRoundedIcon/>
         <div className="ch_search">
             <input type="text" placeholder='search'/>
             <SearchRoundedIcon/>
         </div>
         <SendRoundedIcon/>
         <HelpRoundedIcon/>
        </div>
    </div>
  )
}

export default Chatheader