 import axios from "axios";

  const Kaydol=async(name,surname,email,tel,meslek)=>{

    return await axios.post(
        `${process.env.REACT_APP_API_URL}/Register`,
        {
            name,
            surname,
            email,
            tel,
            meslek
        },
        {
            headers:{
                "content-Type":"application/json"
            }
        }
    )


 }  

 export default Kaydol