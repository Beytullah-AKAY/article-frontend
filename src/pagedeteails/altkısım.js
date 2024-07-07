import React from "react";
import { Grid, Typography, Paper, Box, Icon } from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const IconWrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
});

const Bizeulas = () => {
    const companyData = {
        name: "Hightech Natural Bilişim Anonim Şirketi",
        address: "Çobançeşme E5 Yanyol Cd. NO:12 Nivo Ataköy A Blok Daire:34 Bakırköy/İSTANBUL ",
        email: "bilge@rahatfatura.com",
        phone: "0506 315 88 12",
    };

    return (
        <Grid container sx={{ display: "flex", justifyContent: "center",height:"90vh",backgroundColor:"white" }}>
            <Box sx={{ padding: 4, backgroundColor: '#f5f5f5',height:"50%" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                            Bize Ulaşın
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{marginTop:"-10px"}} >
                        <StyledPaper elevation={3} sx={{gap:"10px"}}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Şirket Bilgileri
                            </Typography>
                            <IconWrapper>
                                <Icon component={BusinessIcon} sx={{ marginRight: 1 }} />
                                <Typography variant="body1">
                                    <strong>Ünvan:</strong> {companyData.name}
                                </Typography>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon component={LocationOnIcon} sx={{ marginRight: 1 }} />
                                <Typography variant="body1">
                                    <strong>Adres:</strong> {companyData.address}
                                </Typography>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon component={EmailIcon} sx={{ marginRight: 1 }} />
                                <Typography variant="body1">
                                    <strong>E-posta:</strong> {companyData.email}
                                </Typography>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon component={PhoneIcon} sx={{ marginRight: 1 }} />
                                <Typography variant="body1">
                                    <strong>Telefon:</strong> {companyData.phone}
                                </Typography>
                            </IconWrapper>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default Bizeulas;