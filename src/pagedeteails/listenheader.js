import { Button, Grid } from "@mui/material"
import {useNavigate } from "react-router-dom"

const Listenheader = ({name}) => {
const navigate=useNavigate()


    return (
        <Grid container xs={12} sx={{ backgroundColor: "#E1E1E1", height: "110px", marginTop: "10px" }}>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", backgroundColor: "white" }} >
                <img src="https://yt3.googleusercontent.com/vTKAaPQn8kcC7AkUCh87v_8_BIYE_I6Ue3JWUQnzF1vV8eJJGBGq5lYCJyLGyyJ26jNBpbhvkp8=s900-c-k-c0x00ffffff-no-rj" alt="makaledinle" style={{ height: '130px' }} />
            </Grid>
            <Grid item xs={2} sx={{backgroundColor:"white"}} >


            </Grid><Grid item xs={2}  >


            </Grid>
            <Grid item xs={1.2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}  >
                <Button variant="contained" color="success"  sx={{ height: "50px", backgroundColor: "purple" }} >{name}</Button>
                <Button variant="contained" color="success" onClick={()=>navigate("/")}  sx={{ height: "50px",backgroundColor: "red" }} >Çıkış yap</Button>


            </Grid>
            <Grid item xs={2.8} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}  >


            </Grid>
        </Grid>
    )
}
export default Listenheader