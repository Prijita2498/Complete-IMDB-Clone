import { Box, Typography,styled } from '@mui/material'
import React from 'react'


const BoxWrapper = styled(Box)`
    width:40%;
    display :flex;
    flex-direction : column;
    align-items : baseline;
    padding-left : 20px;
    & > p{
        color : #F5C518;
        font-weight : 800;
        font-size : 18px;
        margin-bottom : 10px;
    }
`;

const Wrapper = styled(Box)`
    color : #ffffff;
    display : flex;
    align-items : center;
    & > p{
        margin-left : 20px;
    }
`

const Poster = styled('img')({
    width:88
});

function UpNext({movies}) {
  return (
    <BoxWrapper>
        <Typography>Up next</Typography>
        {
            movies.splice(0,3).map((movieObj, index)=>(
                <Wrapper key={index}>
                   <Poster src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt=""  />
                   <Typography>{movieObj.title}</Typography>
                </Wrapper>
            ))
        }
    </BoxWrapper>
  )
}

export default UpNext