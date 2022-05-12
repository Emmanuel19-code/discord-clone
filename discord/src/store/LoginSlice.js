import {createSlice} from '@reduxjs/toolkit'


export const LoginSlice=createSlice({
    name:'user',
    initialState:{
        Logged:false
    },
    reducers:{
          LogIn:(state,action)=>{
               state.Logged=action.payload;
          },
          LogOut:(state)=>{
               state.Logged=false;
          }
    }
})

export const {LogIn,LogOut}=LoginSlice.actions;
export const selectLogged=(state)=>state.user.Logged;
export default LoginSlice.reducer;



