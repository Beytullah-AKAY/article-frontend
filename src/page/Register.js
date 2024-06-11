import { Grid, Button, TextField, } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Kaydol from "../api/kaydol"

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        tel: "",
        meslek: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name && user.surname && user.email && user.tel && user.meslek) {
            if (user.email.includes("@gmail.com") || user.email.includes("@hotmail.com")) {
                if (user.meslek) {
                    Kaydol(user.name, user.surname, user.email, user.tel, user.meslek)
                        .then((res) => {
                            // Başarılı kayıt durumunda yapılacak işlemler
                            Swal.fire({
                                title: 'Başarılı',
                                text: 'Kayıt yapıldı. Teşekkürler. Birazdan anasayfaya yönlendirileceksiniz.',
                                icon: 'success',
                                confirmButtonText: 'Tamam',
                                cancelButtonText: 'İptal',
                                showCancelButton: true
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate("/Login");
                                }
                            });
                        })
                        .catch((error) => {
                            // Hata durumunda yapılacak işlemler
                            console.error("Kayıt hatası:", error.response.data.message);
                            Swal.fire({
                                title: 'Hata',
                                text: error.response.data.message,
                                icon: 'error',
                                confirmButtonText: 'Tamam'
                            });
                        });

                } else {
                    alert("Bilgileri tam giriniz");
                }
            } else {
                alert("Mail adresinizi doğru giriniz");
            }
        } else {
            alert("Bilgileri tam giriniz");
        }
    };


    return (
        <Grid container sx={{
            height: "100vh", display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Grid item

                style={{
                    backgroundImage: `url(${"https://md.teyit.org/img/akademi-uydurma-makale.png"})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "70vw",
                    height: "70vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <h1>Kullanıcı Bilgileri</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        margin="normal"
                        style={{ width: "400px" }}
                        placeholder="İsminizi giriniz"

                    // inputProps={{style:{color:"black"}}}
                    // InputLabelProps={{style:{color:"black"}}}
                    />
                    <br />
                    <TextField
                        label="SurName"
                        variant="outlined"
                        name="surname"
                        value={user.surname}
                        onChange={handleChange}
                        margin="normal"
                        style={{ width: "400px" }}
                        placeholder="Soy isminizi giriniz"
                    />
                    <br />
                    <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        margin="normal"
                        style={{ width: "400px" }}
                        placeholder="Email adresinizi giriniz"
                    />
                    <br />
                    <TextField
                        label="Tel"
                        variant="outlined"
                        name="tel"
                        value={user.tel}
                        onChange={handleChange}
                        margin="normal"
                        style={{ width: "400px" }}
                        placeholder="0 ile başlayan telefon numaranızı giriniz"
                        inputProps={{ pattern: "0[0-9]*" }} // 0 ile başlayan numara için desen belirliyoruz
                    />

                    <br />
                    <TextField
                        label="Meslek"
                        variant="outlined"
                        name="meslek"
                        value={user.meslek}
                        onChange={handleChange}
                        margin="normal"
                        style={{ width: "400px" }}
                        placeholder="Mesleğinizi giriniz"
                        type="meslek"

                    />

                    <br />
                    <Button style={{ marginLeft: "120px", marginTop: "30px", width: "200px", height: "50px", fontSize: "20px" }} variant="contained" color="primary" type="submit">
                        Kayıt Ol
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};
export default Register;
