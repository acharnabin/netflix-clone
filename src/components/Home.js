import React from 'react'
import '../css/home.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'
import requests from './Request'
const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Banner/>
            
            <Row title="Netflix Originals" large_row="true" fetchurl={requests.fetch_netflix_originals}/>
            <Row title="Trending Now" fetchurl={requests.fetch_trending}/>
            <Row title="Popular" fetchurl={requests.fetch_most_popular_movies}/>
            <Row title="Action" fetchurl={requests.fetch_action_movies}/>
            <Row title="Comedy" fetchurl={requests.fetch_comedy_movies}/>
            <Row title="Horror" fetchurl={requests.fetch_horror_movies}/>
            <Row title="Romantic" fetchurl={requests.fetch_romantic_movies}/>
        </div>
    )
}

export default Home
