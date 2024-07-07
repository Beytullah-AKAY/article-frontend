import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import Header from "../pagedeteails/header";
import Ortakısım from "../pagedeteails/ortakısım";
import Bizeulas from "../pagedeteails/altkısım";

const Homepage = () => {
  const [data, setData] = useState(false);
  const bizeulasRef = useRef(null);

  const handleClick = () => {
    setData(prevData => !prevData);
  };

  const smoothScroll = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  useEffect(() => {
    if (data && bizeulasRef.current) {
      setTimeout(() => {
        smoothScroll(bizeulasRef.current, 1000); // 1000ms = 1 saniye
      }, 100);
    }
  }, [data]);

  return (
    <Grid container xs={12}>
      <Header onClick={handleClick} />
      <Ortakısım />
      {data && (
        <Grid item xs={12} ref={bizeulasRef}>
          <Bizeulas />
        </Grid>
      )}
    </Grid>
  );
};

export default Homepage;