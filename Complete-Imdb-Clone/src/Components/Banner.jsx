import { Box, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  const StyledBanner = styled('img')({
    width : "100%",
  });
  

function Banner({movies}) {
  return (
    <Box style={{width:'65%'}}>
      <Carousel 
        responsive={responsive}
        swipable={false}
        draggable={false}
        // showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        slidesToSlide={1}>
        {
            movies.map((movieObj, index) =>(
                <StyledBanner src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt="banner" key={index}/>
            ))
        }
      </Carousel>
    </Box>
  );
}

export default Banner;
