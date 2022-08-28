import axios from 'axios'

const apiUserURL="http://127.0.0.1:3002/users";

export const addUser = async(data)=>{
    try{
         return await axios.post(apiUserURL,data)
    }catch(error){
      console.log("Error in addUser api",error.message);
    }
}
export const getUser = async(data)=>{
  try{
       return await axios.get(apiUserURL)
  }catch(error){
    console.log("Error in getUser api",error.message);
  }
}

