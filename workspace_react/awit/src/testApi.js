import axios from "axios";

export const getList =  async () => { 
  try{
    const res = await axios.get('/');
    return res.data;
  }catch(error){
    console.log(error)
  }
}