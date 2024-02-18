import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import { Box, Typography, styled, Divider, Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import { categoryMovies } from "../Services/api";
import { useLocation } from "react-router-dom";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  movieType,
} from "../assets/Constants";


import MoviesList from "../Components/Common/MoviesList";

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
  },
};

const StyledBanner = styled("img")({
  height: "600px",
  width: "100%",
});

const Component = styled(Box)`
  width: 80%;
  margin: auto;
`;

const BoxContainer = styled(Box)`
 background : #F5F5F5;
 padding : 10px;
`;

function MoviesCategory() {
  const [movies, setMovies] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getData = async (API_URL) => {
      let response = await categoryMovies(API_URL);
      setMovies(response.results);
    };

    let API_URL;

    if (search.includes("popular")) {
      API_URL = POPULAR_API_URL;
    } else if (search.includes("upcoming")) {
      API_URL = UPCOMING_API_URL;
    } else if (search.includes("toprated")) {
      API_URL = TOPRATED_API_URL;
    }

    getData(API_URL);
  }, [search]);

  return (
    <>
      <Header />
      <Component>
        <Carousel
          responsive={responsive}
          swipable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          slidesToSlide={1}
        >
          {movies.map((movieObj, index) => (
            <>
              <StyledBanner
                src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                alt="banner"
                key={index}
              />
            </>
          ))}
        </Carousel>

        <BoxContainer>
          <Typography variant="h6">IMDb Charts</Typography>
          <Typography variant="h4">IMDb {movieType[search.split("=")[1]]} Movies</Typography>
          <Typography style={{fontSize:12, margin:5}}>
            IMDb Top {movies.length} rated by regular IMDb Voters
          </Typography>
          <Divider/>

          <MoviesList movies={movies}/>
        </BoxContainer>
      </Component>
    </>
  );
}

export default MoviesCategory;
