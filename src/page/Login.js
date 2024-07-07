import { Button, Grid, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Girişyap from "../api/girişyap"
import cookie from "../utils/cookies"
import Swal from 'sweetalert2';

const Login = () => {

    const [email, setEmail] = useState("")
    const [meslek, setmeslek] = useState("")
    const navigate = useNavigate()


    const Handlesubmit = async () => {
        if (email.includes("@") && meslek) {
            await Girişyap(email, meslek)
                .then((res) => {
                    // İstek başarılı olduysa
                    cookie.set("name", res.data.name);
                    console.log(res.data.name)
                    Swal.fire({
                        text: "MAKALE BULUNAMADI"
                    });
                })
                .catch((err) => {
                    // Hata durumunda
                    if (err.response && err.response.data && err.response.data.message) {
                        // Hata mesajını ekrana yazdır
                        Swal.fire({
                            text: err.response.data.message
                        });
                    } else {
                        // Diğer hata durumları için genel hata mesajı
                        Swal.fire({
                            text: "Bir hata oluştu"
                        });
                    }
                });
        } else {
            alert("Bilgilerinizi doğru giriniz");
        }
    };
    

    return (
        <Grid container xs={12} sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}   >
            <Grid item xs={8} sx={{ backgroundColor: "#F6F5F6", height: "600px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                <h1 style={{ height: "0px", marginTop: "-10px" }} >MAKALE DİNLE</h1>
                <div style={{ height: "85%", width: "90%", marginTop: "35px" }}>
                    <Grid container xs={12} sx={{ height: "100%", display: "flex" }} >
                        <Grid item xs={6} sx={{ backgroundColor: "white", }} >
                            <div className="burda" style={{ height: "100%", width: "100%" }}>
                                <Grid container xs={12} sx={{ height: "100%", display: "flex", flexDirection: "column", }} >
                                    <Typography sx={{ fontSize: "50px", marginLeft: "30%", marginTop: "10%" }}>Giriş Yap</Typography>
                                    {/* <Grid item sx={{ display: "flex", gap: "10px", marginLeft: "30%" }}>
                                        <img src="https://data.pixiz.com/output/user/frame/preview/400x400/8/8/0/8/1808088_dea05.jpg" alt="yuvarlak" style={{ width: "60px", height: "60px" }} />
                                        <img src="https://data.pixiz.com/output/user/frame/preview/400x400/8/8/0/8/1808088_dea05.jpg" alt="yuvarlak" style={{ width: "60px", height: "60px" }} />
                                        <img src="https://data.pixiz.com/output/user/frame/preview/400x400/8/8/0/8/1808088_dea05.jpg" alt="yuvarlak" style={{ width: "60px", height: "60px" }} />
                                    </Grid> */}
                                    <div className="burası" >
                                        <Grid xs={12} sx={{ height: "50px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "20px" }}>
                                            <TextField onChange={(event) => setEmail(event.target.value)} variant="outlined" label="Email" type="text" placeholder="Email adresinizi giriniz" sx={{ width: "450px" }} />
                                            <TextField onChange={(e) => setmeslek(e.target.value)} variant="outlined" label="Meslek" type="Meslek" placeholder="Mesleğinizi giriniz" sx={{ width: "450px" }} />
                                        </Grid>
                                        <Grid xs={12} sx={{ height: "50px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "70px", gap: "20px" }}>
                                            {/* <Button variant="text" onMouseOver={() => (setbackcolor("pink"), setUnderline("none"))} onMouseLeave={() => (setbackcolor(" "), setUnderline("underline"))} onClick={() => navigate("/")} style={{ textDecoration: underline, cursor: "pointer", marginTop: "30px", fontSize: "15px", backgroundColor: backcolor }}>Şifremi Unuttum?</Button> */}
                                            <Button variant="contained" onClick={Handlesubmit} style={{ cursor: "pointer" }}>Giriş Yap</Button>
                                        </Grid>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={6} sx={{ backgroundColor: "#FF4268" }} >
                            <div style={{ width: "100%", height: "100%" }}>
                                <Grid xs={12} sx={{ height: "90%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white" }}>
                                    <h1>Merhaba!</h1>
                                    <Typography variant="body1" sx={{ fontSize: "20px" }}>Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın  </Typography>
                                    <Button variant="contained" onClick={() => navigate("/Register")} size="large" sx={{ marginTop: "50px", backgroundColor: "#FF4268", borderRadius: "20px", border: "1px solid white" }} >KAYIT OL</Button>
                                </Grid>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}
export default Login