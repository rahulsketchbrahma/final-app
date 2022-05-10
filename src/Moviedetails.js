import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = "https://image.tmdb.org/t/p/original/";
const url ='https://api.themoviedb.org/3';

function Moviedetails() {
    const [moviess, setMoviess] = useState([]);
    const {id} = useParams();

  
  useEffect(() => {
    async function fetchmovie(){
     const request = await axios.get(`${url}/movie/${id}?api_key=8612aaeb857886e801ddfca868da9cf3&language=en-US`);
     setMoviess(request.data)
     console.log('movies',request.data)
     return request;
    } fetchmovie();
    
  }, []);
 
    return (
        <div className="rows" >
             <h1>{moviess.original_title}</h1>
        </div>
    )
}

export default Moviedetails;