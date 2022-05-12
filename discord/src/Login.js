import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import './login.css'
import { auth, provider } from './firebase'
import { signInWithPopup } from 'firebase/auth'



function Login() {
    const [error,setError]=useState();
    const dispatch=useDispatch();
    const signIn=()=>{
         signInWithPopup(auth,provider)
    .then(({user})=>{
            alert(user) 
    }).catch((err)=>{
        alert(err)
    })
    }
  return (
    <div className='login'>
       <div className="logo">
            <img src='https://brandmentions.com/wiki/images/5/50/discord.png'></img>
       </div>
       <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login