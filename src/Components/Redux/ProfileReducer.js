import { createSlice } from "@reduxjs/toolkit";
 const emptyProfile ={
  
  fName: "",
 lName: "",
 designation: "",
 dob: "",
 gender: "",
 phoneNumber: "",
 address: "",
 city: "",
 state: "",
 zipCode: "",
 country: "",}

const initialValue = {
  profileObj:emptyProfile,
  profileError:{},
  profileEntries:[],
  profileBoolean:false,
  emptyProfile:emptyProfile,
  employe: {},
  employeImage:{}
}
const webSlice = createSlice({
 name:"ProfileReducer",
 initialState:initialValue,
 reducers:{
  setProfileObj :(state,action)=>{state.profileObj = action.payload},
  setProfileError:(state,action)=>{state.profileError = action.payload},
  setProfileEntries:(state,action)=>{state.profileEntries = action.payload},
  setProfileBoolean:(state,action)=>{state.profileBoolean = action.payload},
  setEmploye:(state,action)=>{state.employe = action.payload},
  setEmployeImage:(state,action)=>{state.employeImage = action.payload}
  
  },
})


export default webSlice.reducer;
export const{setProfileObj,setProfileError, setProfileEntries,setProfileBoolean,setEmploye,setEmployeImage}= webSlice.actions;