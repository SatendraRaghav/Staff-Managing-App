import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  loginObj:{
    email: "",
    password: "",
  }, 
  loginError:{},
  loginEntries:[],
  loginBoolean:false,
  isProfileAvailable:false,
  admin:false,
    
}
const LoginSlice = createSlice({
 name:"LoginReducer",
 initialState:initialValue,
 reducers:{
  setLoginObj:(state,action)=>{state.loginObj= action.payload},
  setLoginError:(state,action)=>{state.loginError= action.payload},
   setLoginEntries:(state,action)=>{state.loginEntries = action.payload},
   setLoginBoolean:(state,action)=>{state.loginBoolean = action.payload},
   setIsProfileAvailable:(state,action)=>{state.isProfileAvailable = action.payload},
   setAdmin:(state,action)=>{state.admin = action.payload},
  },
})


export default LoginSlice.reducer;
export const{setLoginObj,setLoginError,setLoginEntries,setLoginBoolean, setIsProfileAvailable,setAdmin}= LoginSlice.actions;