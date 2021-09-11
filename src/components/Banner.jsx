import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../requests';
import './Banner.css'
const baseUrl="https://api.themoviedb.org/3"
function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function getData(){
           await axios.get(`${baseUrl}${requests.fetchNetflixOriginals}`)
           .then((response)=>{
               setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
              
           })
           .catch((error)=>console.log(error))
        }
        getData();
    },[])
    function tuncate(str,number=100){
        return str?.length>number? str.substr(0,number-1)+"...":str
    }
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}>
            <div className="banner__contents">
                    <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">Lists</button>
                        <div className="banner__description">
                            {
                                tuncate(movie?.overview,100)
                            }
                        </div>
                    </div>
            </div>
        </header>
    )
}

export default Banner
