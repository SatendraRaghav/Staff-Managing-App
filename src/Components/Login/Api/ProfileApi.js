import axios from 'axios'

const apiProfileURL="http://127.0.0.1:3002/profile";

export const addProfile = async(data)=>{
    try{
         return await axios.post(apiProfileURL,data)
    }catch(error){
      console.log("Error in addProfile api",error.message);
    }
}
export const getProfile = async(data)=>{
  try{
       return await axios.get(apiProfileURL)
  }catch(error){
    console.log("Error in getProfile api",error.message);
  }
}
// export const deleteProfile = async(data)=>{
//   try{
//        return await axios.delete(apiProfileURL/data)
//   }catch(error){
//     console.log("Error in deleteProfile api",error.message);
//   }
// }