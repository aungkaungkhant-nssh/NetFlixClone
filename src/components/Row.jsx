import axios from 'axios'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "./Row.css"
import movieTrailer from 'movie-trailer'

const baseUrl="https://api.themoviedb.org/3"
const photoUrl="https://image.tmdb.org/t/p/original/"

const opts = {
    height: '390',
    width: '840',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
}
function Row({title,fetchUrl,isLarge}) {
    const [movies,setMovies]=useState([]);
    const [videoId,setVideoId]=useState("");
    useEffect(()=>{
     async function  getData(){
       await  axios.get(`${baseUrl}${fetchUrl}`)
        .then((response)=>{
            setMovies(response.data.results)
        })
        .catch((error)=>console.log(error))
        }
        getData()
    },[])
    const handleClick=async(movie)=>{
        if(videoId){
            setVideoId("");
        }else{
            await movieTrailer( 'Up' )
            movieTrailer(movie?.title || movie?.name)
            .then((url)=>{
                let params = new URLSearchParams(new URL(url).search);
                setVideoId(params.get("v"));
            })
        }
       

    }
    return (
        <div className="row">
            <h3 className="row__title">{title}</h3>  
            <div className="row__posters">
                {
                    movies &&
                    movies.map((movie,index)=>{
                     return (
                     <img 
                     src={`${photoUrl}${isLarge ? movie.poster_path:movie.backdrop_path}`} 
                     alt="" 
                     className={`row__poster ${isLarge && "row__poster__large"}`}
                     key={index}
                     onClick={()=>handleClick(movie)}
                     />
                    )})
                }
            </div>
            {
                videoId &&
                <YouTube videoId={videoId} opts={opts}/>
            }
        </div>
    )
}

export default Row
