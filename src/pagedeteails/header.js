import { Button, Grid } from "@mui/material"
import {useNavigate } from "react-router-dom"


const Header = ({onClick}) => {
const navigate=useNavigate()

      


    return (
        <Grid container xs={12} sx={{ backgroundColor: "#E1E1E1", height: "110px", marginTop: "10px" }}>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", backgroundColor: "white" }} >
                <img src="https://yt3.googleusercontent.com/vTKAaPQn8kcC7AkUCh87v_8_BIYE_I6Ue3JWUQnzF1vV8eJJGBGq5lYCJyLGyyJ26jNBpbhvkp8=s900-c-k-c0x00ffffff-no-rj" alt="makaledinle" style={{ height: '130px' }} />
            </Grid>
            <Grid item xs={2} sx={{backgroundColor:"white"}} >
                

            </Grid>
           
            <Grid item xs={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,gap:"30px"}}  >

            <Button variant="contained" color="success" onClick={onClick}  sx={{ height: "50px", backgroundColor: "yellowgreen",position:"absolute",marginRight:"500px", }} >Bize Ulaşın</Button>

                {/* <Button variant="contained" color="success" onClick={()=>navigate("/Login")} sx={{ height: "50px", backgroundColor: "purple" }} >Giriş Yap</Button> */}
                <Button variant="contained" color="success" onClick={()=>navigate("/Register")}  sx={{ height: "50px",backgroundColor: "red" }} >Kaydol</Button>


            </Grid>
            <Grid item xs={1    } sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}  >


            </Grid>
        </Grid>
    )
}
export default Header