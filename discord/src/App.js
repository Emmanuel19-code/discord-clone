import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { LogIn, LogOut, selectLogged } from './store/LoginSlice';
import {useDispatch, useSelector} from 'react-redux';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user=useSelector(selectLogged)
  const dispatch=useDispatch();
  useEffect(()=>{
        auth.onAuthStateChanged((authUser)=>{
          if(authUser){
             dispatch(LogIn({
               uid:authUser.uid,
               photo:authUser.photoURL,
               Name:authUser.displayName,
               email:authUser.email
             }))
          }else{
            dispatch(LogOut())
          }
        })
  },[])
  return (
    <div className="app">
      
        {user ?
        <>
     <Sidebar/>
      <Chat/>
        </>
        :
        <Login/>
     }
    </div>
  );
}

export default App;
