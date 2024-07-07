import React, { useState } from "react";
import { Grid, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Kaydol from "../api/kaydol";

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
        if (name === 'name') {
            setUser({ ...user, [name]: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() });
        } else {
            setUser({ ...user, [name]: value });
        }
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
                                text: 'Kayıt yapıldı. Teşekkürler. Gün içersinde whatsapp üzerinden makaleler gönderilecektir.',
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
        <Grid container justifyContent="center" alignItems="center" sx={{
            height: "100vh",
            backgroundImage: `url("https://md.teyit.org/img/akademi-uydurma-makale.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Yarı saydam beyaz arka plan
            backdropFilter: "blur(10px)" // Arka plana blur efekti
        }}>
            <Grid item sx={{ maxWidth: "500px", width: "100%", p: 4, mt: 4, borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", backgroundColor: "white" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Kullanıcı Bilgileri
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="İsim"
                        variant="outlined"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                    <TextField
                        label="Soyisim"
                        variant="outlined"
                        name="surname"
                        value={user.surname}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                    <TextField
                        label="E-posta"
                        variant="outlined"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Örn:ornek@gmail.com"
                        type="email"
                        required
                    />
                    <TextField
                        label="Telefon"
                        variant="outlined"
                        name="tel"
                        value={user.tel}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        placeholder="0 ile başlayan telefon numaranızı giriniz"
                        inputProps={{ pattern: "0[0-9]*" }}
                        required
                    />
                    <TextField
                        label="Meslek"
                        variant="outlined"
                        name="meslek"
                        value={user.meslek}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        size="large"
                        style={{ mt: "20px" }}
                    >
                        Kayıt Ol
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default Register;
