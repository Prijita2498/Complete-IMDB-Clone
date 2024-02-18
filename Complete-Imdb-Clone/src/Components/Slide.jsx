import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, styled } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")({
  width: "100%",
  marginTop : "20px",
});

const Title = styled(Typography)`
    color : #fff
`

function Slide({ movies }) {
  return (
    <Carousel
      responsive={responsive}
      swipable={false}
      draggable={false}
      autoPlay={true}
      autoPlaySpeed={1000}
      infinite={true}
      keyBoardControl={true}
      slidesToSlide={1}
    >
      {movies.map((movieObj, index) => (
        <>
          <StyledBanner
            src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
            alt="banner"
            key={index}/>

            <Title>{movieObj.title}</Title>
        </>
      ))}
    </Carousel>
  );
}

export default Slide;
