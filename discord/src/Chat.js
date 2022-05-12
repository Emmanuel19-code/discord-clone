import React,{useEffect, useState} from 'react'
import './chat.css'
import Chatheader from './Chatheader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectChannelId } from './store/appSlice'
import {collection, getDoc, serverTimestamp} from 'firebase/firestore'
import { db } from './firebase'
import { selectLogged } from './store/LoginSlice'

function Chat() {
  const [input,setInput]=useState("");
  const [messages,setMessages]=useState([]);
  const channelId=useSelector(selectChannelId);
  const user=useSelector(selectLogged)

    const Mes=collection(db,"messages")
   const Info=collection(db,"channelNames");
     
    useEffect(()=>{
         
    },[])

 const sendMessage=(e)=>{
      e.preventDefault();
     /* Info.doc(channelId).addDoc(Mes,{
        message:input,
        user:user,
        time:serverTimestamp()
      })
      */
      setInput("");
      alert("hello")
 }



  return (
    <div className='chat'>
        <Chatheader/>
       <div className="chatMessages">
             <Message/>
       </div>
       <div className="chat_Input">
           <AddCircleIcon fontSize="large"/>
           <form action="">
               <input value={input} onChange={e=>setInput(e.target.value)}type="text" placeholder='send message'/>
               <button  onClick={sendMessage} className="chat_button" type="submit">send message</button>
           </form>
           <div className="chatIcons">
               <CardGiftcardIcon/>
               <GifIcon/>
               <EmojiEmotionsIcon/>
           </div>
       </div>
    </div>
  )
}

export default Chat