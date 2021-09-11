import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Row.css"
const baseUrl="https://api.themoviedb.org/3"
const photoUrl="https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl,isLarge}) {
    const [movies,setMovies]=useState([]);
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
    return (
        <div className="row">
            <h3 className="row__title">{title}</h3>  
            <div className="row__posters">
                {
                    movies &&
                    movies.map((movie,index)=>{
                     return  <img src={`${photoUrl}${isLarge ? movie.poster_path:movie.backdrop_path}`} alt="" className={`row__poster ${isLarge && "row__poster__large"}`}
                     key={index}
                     />
                    })
                }
                
            </div>
        </div>
    )
}

export default Row
