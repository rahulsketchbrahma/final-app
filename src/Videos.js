import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './Vidoes.css'
import YouTube from 'react-youtube';


const url ='https://api.themoviedb.org/3';

function Videos() {
    const[videos ,setVideos] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        async function fecthVideo(){
            const res= await axios.get(`${url}/movie/${id}/videos?api_key=8612aaeb857886e801ddfca868da9cf3&language=en-US`);
            console.log('video',res.data.results.find(vid => vid.name === 'Official Trailer'))
            setVideos(res.data.results.find(vid => vid.type ==="Trailer"))
            return res;
        }
        fecthVideo()
    },[])
    
    const opts = {
      height: '300',
      width: '340',
    }
    

  return (
      <>
      <div className='trailer-wrapper'> 
      <YouTube
      videoId={videos.key}
      opts={opts}
      />
      </div>
    </>
  )
}

export default Videos