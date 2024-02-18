import { Box, List, ListItem, Typography, styled } from "@mui/material";
import React from "react";
import { Star } from "@mui/icons-material";

const Banner = styled("img")({
  width: 47,
});

const ListContainer = styled(List)`
  display: flex;
`;
function MoviesList({ movies }) {
  return (
    <>
      {movies.map((movieObj, index) => (
        <ListContainer key={index}>
          <ListItem>
            <Banner
              src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
              alt=""
            />
          </ListItem>
          <ListItem>
            <Typography>{movieObj.title}</Typography>
          </ListItem>

          <ListItem>
            <Star color="warning"/>
            <Typography>{movieObj.vote_average}</Typography>
          </ListItem>

          <ListItem>
            <Typography>{movieObj.release_date}</Typography>
          </ListItem>
        </ListContainer>
      ))}
    </>
  );
}

export default MoviesList;
