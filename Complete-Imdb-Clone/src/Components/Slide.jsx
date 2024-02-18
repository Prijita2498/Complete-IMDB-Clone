import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, styled } from "@mui/material";

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
    }
  };

  const StyledBanner = styled('img')({
    width : '100%'
  });



function Slide({movies}) {
  return (
    <Carousel 
        responsive={responsive}
        swipable={false}
        draggable={false}
        infinite={true}
        keyBoardControl={true}
        slidesToSlide={1}>
        {
            movies.map((movieObj, index) =>(
                <StyledBanner src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt="banner" key={index}/>
            ))
        }
      </Carousel>
  )
}

export default Slide