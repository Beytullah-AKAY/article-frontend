import { Grid, TextField, IconButton, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTts } from 'react-tts';
import Listenheader from "../pagedeteails/listenheader"
import Playicon from '@mui/icons-material/PlayCircleFilledWhite';
import Stopicon from '@mui/icons-material/StopCircle';
import { useSearchParams } from 'react-router-dom';
import getArticleFromURL from '../api/getArticlefROMuRL';
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import RestartIcon from '@mui/icons-material/RestartAlt';
import PauseIcon from '@mui/icons-material/Pause';

function ToArticle() {
    const { speak, } = useTts();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [loading, setLoading] = useState(true); // Veri yükleniyor durumu
    const [articleData, setArticleData] = useState(null); // Makale verisi
    const [duricon, setDuricon] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const isMobile = useMediaQuery('(max-width: 500px)');
    const [metin, setMetin] = useState(null)

    useEffect(() => {
        const axiosData = async () => {
            try {


                const article = await getArticleFromURL(searchParams.get("articleId"), searchParams.get("Identity"))

                setArticleData(article.data);
                setMetin("başlık" + article.data.updateFindMakale.header + "tarih" + article.data.updateFindMakale.date + " " + article.data.updateFindMakale.text);
                setLoading(false); // Veri yüklendiğinde yükleme durumunu false yap
            } catch (error) {
                console.log(error);
            }
        };

        // Sayfa yenilendiğinde konuşmayı durdur
        window.addEventListener('beforeunload', () => {
            speechSynthesis.cancel();
        });

        axiosData();

        return () => {
            window.removeEventListener('beforeunload', () => {
                speechSynthesis.cancel();
            });
        };
    }, []);



    const play = () => {
        speechSynthesis.cancel();
        const titleUtterance = new SpeechSynthesisUtterance(metin);
        titleUtterance.rate = 0.7; // Okuma hızını yavaşlatmak için rate değerini düşürün

        speak(titleUtterance);
        setIsSpeaking(true);
        setDuricon(true);
    };

    const durakla = () => {
        speechSynthesis.pause();
    };

    const devamet = () => {
        speechSynthesis.resume();
    };

    const stop = () => {
        speechSynthesis.cancel();
        setIsSpeaking(false);
        setDuricon(false)
    };

    const restart = () => {
        speechSynthesis.cancel();
        setIsSpeaking(false);
        play()
    };

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    return (
        <Grid container xs={12} sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {loading ? (
                <BeatLoader color={"#123abc"} loading={loading} css={override} size={50} />
            ) : (
                <React.Fragment>
                    <Listenheader name={articleData.user.name} />
                    {/* Makale verisi yüklendikten sonra göster */}
                    <div style={{ width: "100%" }}>
                        <div style={{ marginTop: "20px" }}>
                            {!duricon && <IconButton onClick={play}><Playicon sx={{ fontSize: "40px" }} /></IconButton>}
                            <IconButton onClick={durakla}><PauseIcon sx={{ fontSize: "40px" }} /></IconButton>
                            {duricon && <IconButton onClick={devamet}><Playicon sx={{ fontSize: "40px" }} /></IconButton>}
                            <IconButton onClick={stop}><Stopicon sx={{ fontSize: "40px" }} /></IconButton>
                            <IconButton onClick={restart}><RestartIcon sx={{ fontSize: "40px" }} /></IconButton>
                        </div>
                        <Grid item xs={12} sm={8} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <h2>{articleData.updateFindMakale.header}</h2>
                            <h2>{articleData.updateFindMakale.date}</h2>
                            <TextField
                                variant="standard"
                                multiline
                                rows={20}
                                fullWidth
                                value={articleData.updateFindMakale.text}
                                InputProps={{
                                    readOnly: true,
                                    backgroundColor: "#FFFFFF"
                                }}
                                sx={{ backgroundColor: "#FFFFFF" }}
                            />
                        </Grid>
                    </div>



                </React.Fragment>
            )}
        </Grid>
    );
}

export default ToArticle;
