import React, { useEffect, useState } from 'react'
import './sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'
import { useSelector } from 'react-redux'
import { selectLogged } from './store/LoginSlice'
import { auth, db } from './firebase'
import {collection,getDocs,addDoc ,serverTimestamp } from 'firebase/firestore'


function Sidebar() {
    const Info=collection(db,"channelNames");
    const [channel,setChannel]=useState([]);
    useEffect(()=>{
          const getChats=async()=>{
            const data=await getDocs(Info);
             setChannel(data.docs.map((doc)=>({
               data:doc.data(),
               id:doc.id})))
          }
          getChats();
      },[channel])
 const user=useSelector(selectLogged);
  const logOut=()=>{
      if(user){
          auth.signOut();
      }
  }
 const Addchannel=()=>{
        const channelName=prompt('add channel name');
        if(channelName){
           addDoc(Info,{
                channelName:channelName,
                time:serverTimestamp()
            })
        }
  }
  return (
    <div className='sidebar'>
       <div className='sidebar_top'>
          <h4>Emmanuel</h4>
          <ExpandMoreIcon/>
       </div>
      <div className="sidebar_channels">
          <div className="sidebar_channelHeader">
              <div className="sidebar_header">
                  <ExpandMoreIcon/>
                  <h4>Channels</h4>
              </div>
              <AddIcon onClick={Addchannel} className='addchannel'/>
          </div>
          <div className="sidebarList">
           {
                channel.map(({id,data:{channelName}})=>(
                  <SidebarChannel
                    key={id}
                    id={id}
                    channel={channelName}
                  />
                ))
                
              }
       </div>
      </div>
       <div className="sidebar_voice">
           <SignalCellularAltIcon 
           className='voice_icon'
           fontSize="large"/>
           <div className="voice_info">
               <h3>Voice Connected</h3>
               <p>Stream</p>
           </div>
           <div className="voice_icons">
               <InfoOutlinedIcon/>
               <CallIcon/>
           </div>
       </div>
       <div className="sidebar_profile">
           <Avatar onClick={logOut} src={user.photo}/>
           <div className="sidebar_profileInfo">
               <h3>{user.Name}</h3>
               <p>{user.uid.substring(0,5)}</p>
           </div>
           <div className="profileIcons">
               <MicIcon/>
               <HeadsetIcon/>
               <SettingsIcon/>
           </div>
       </div>
    </div>
  )
}

export default Sidebar