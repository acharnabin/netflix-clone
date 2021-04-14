import React, { useEffect, useState } from 'react'
import '../css/banner.css'
import requests from './Request'
import axios from 'axios'
 const Banner = () => {

    const [movie,set_movie]=useState([]);

    useEffect(()=>{
        async function fetchdata(){
            const request=await axios.get(requests.fetch_trending);
            set_movie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchdata();
    },[])

    function trancate(string,n) {
        return string?.length>n?string.substr(0,n-1)+'...':string;
        
    }
    
    return (
        <header className="banner" 
        style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center center"

            }}>
            <div className="banner_contents">
                <h1 className="banner_title ">{movie?.original_title || movie?.original_name ||movie?.name || movie.title}</h1>
                
                <div className="banner_btn">
                    <button className="banner_btn_class">Play</button>
                    <button className="banner_btn_class">My List</button>
                </div>

                <div className="banner_desc">
                <h4>{
                    trancate(`${movie.overview}`,200)
                }</h4>
                </div>
            </div>

           

            <div className="banner_bottom"/>

            
        </header>
    )

}

export default Banner;
