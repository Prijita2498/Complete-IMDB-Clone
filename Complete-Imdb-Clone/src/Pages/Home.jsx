import React, {useEffect, useState} from 'react';
import Header from '../Components/Common/Header';
import { categoryMovies} from '../Services/api';
import { NOWPLAYING_API_URL } from '../assets/Constants';

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const fetchData = async() =>{
      let response = await categoryMovies(NOWPLAYING_API_URL);
      console.log(response);
    }

    fetchData();
  },[]);

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Home