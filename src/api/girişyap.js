import axios from "axios";

 const Girişyap=async(email,meslek)=>{
  return await axios.post ( 
    `${process.env.REACT_APP_API_URL}/Login`,
    {
        email,
        meslek
    },
    {
        headers:{
            "content-type":"application/json"
        }
    }

)
}

export default Girişyap