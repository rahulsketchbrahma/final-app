import axios from "axios";
import React,{useState, useEffect} from "react";
import './Row.css'
import YouTube from "react-youtube";

const img_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title , fetchUrl }) =>{
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);

    const opts = {
        height:"390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    };

    return(
        <div className="row">
        <h1>{title}</h1>

        <div className="row_container">
            {movies.map(movie =>(
                <img
                key={movie.id}
                className="row_poster"
                src={`${img_url}${movie.poster_path}`} alt={movie.name}/>
            ))}
            
        </div>
      
        </div>
    )

}
export default Row