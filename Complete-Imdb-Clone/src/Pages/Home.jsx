import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import { categoryMovies } from "../Services/api";
import { NOWPLAYING_API_URL } from "../assets/Constants";
import { Box, styled } from "@mui/material";
import Banner from "../Components/Banner";
import UpNext from "../Components/UpNext";
import Slide from "../Components/Slide";

const BoxWrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;

const Component = styled(Box)`
  padding: 0 170px;
`;

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
      console.log(response);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Component>
        <BoxWrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </BoxWrapper>
        <Slide movies={movies}/>
      </Component>
    </>
  );
}

export default Home;
