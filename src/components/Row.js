import React, { useEffect, useState } from 'react'
import '../css/row.css'
import axios from 'axios'
const Row = (props) => {
     const {title,fetchurl,large_row=false}=props;
     const [movies,set_movie]=useState([]);
     const Baseurl="https://image.tmdb.org/t/p/original";

     useEffect(()=>{
         async function fetchdata(){
             const request=await axios.get(fetchurl);
             set_movie(request.data.results);
             return request;
         }
         fetchdata();
     },[fetchurl])

    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="row_posters">
            {
                movies.map((movie)=>(
                    <img
                    className={`row_poster ${large_row && "row_poster_large"}`}
                    key={movie.id}
                     src={`${Baseurl}${large_row?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))
            }
            </div>
        </div>
    )
}

export default Row
