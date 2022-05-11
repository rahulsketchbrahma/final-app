import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './Vidoes.css'
import ReactPlayer from 'react-player'

const url ='https://api.themoviedb.org/3';

function Videos() {
    const[videos ,setVideos] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        async function fecthVideo(){
            const res= await axios.get(`${url}/movie/${id}/videos?api_key=8612aaeb857886e801ddfca868da9cf3&language=en-US`);
            console.log('video',res.data.results)
            setVideos(res.data.results)
            return res;
        }
        fecthVideo()
    },[])

  return (
      <>
    <div className='video-back'>
    <ReactPlayer url= {`https://www.youtube.com/watch?v=3IhB-PFLBbg`} className='video'/>
    </div>
    </>
  )
}

export default Videos