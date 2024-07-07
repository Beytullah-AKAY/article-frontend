import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const HoverBox = styled(Box)(({ theme }) => ({
    height: "250px",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.20)",
    },
}));

const HoverTypography = styled(Typography)(({ theme }) => ({
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)",
    },
}));

const Ortakısım = () => {
    return (
        <Grid container sx={{ marginTop: "50px", display: "flex", justifyContent: "center", gap: "30px", }}>
            <Grid item xs={12} sx={{ marginTop: "20px", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <Typography variant="h3" align="center" gutterBottom>
                    Hoş geldiniz!
                </Typography>
            </Grid>
            <Grid container item xs={12} spacing={2} sx={{ justifyContent: "center", gap: "15px" }}>
                {[
                    { src: "https://mtso.org.tr/uploads/images/2020/06/5c8d91b345d2a09e009a4891-jAyI.jpg", alt: "SGK", title: "SGK" },
                    { src: "https://islamiktisadi.net/wp-content/uploads/2022/08/muhasebe.jpg", alt: "Muhasebe", title: "Muhasebe" },
                    { src: "https://www.makfed.org/Resim/536,foto178makales122jpg.png?0", alt: "Ekonomi", title: "Ekonomi" },
                    { src: "https://www.kamusen.org.tr/img/kahveci--calisanlarin-gelir-vergisi-orani-yuzde15te-sabitlensin-773274.jpg", alt: "Vergi", title: "Vergi" },
                ].map((item, index) => (
                    <Grid item xs={12} sm={3} md={2} key={index}>
                        <HoverBox>
                            <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </HoverBox>
                        <HoverTypography variant="subtitle1" align="center" sx={{ mt: 1 }}>
                            {item.title}
                        </HoverTypography>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "20px", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" align="center" sx={{ marginBottom: "20px" }}>
                    Vb ALANLARDA GÜNCEL MAKALELERİ WHATSAPP ÜZERİNDEN SİZLERE İLETİYORUZ. ANINDA MAKALELERE ULAŞMAK İÇİN KAYIT OLABİLİRSİNİZ
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Ortakısım;