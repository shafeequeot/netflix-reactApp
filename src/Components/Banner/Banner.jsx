import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../constents/axios'
import { API_KEY, imgURL } from '../constents/constants'

let i = Math.random()*((20-1)+1)+1;
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        
            setMovie(response.data.results[Math.round(i)])
            
        })
        
    }, [])
    return (
        <div className="banner" style={{backgroundImage: `url(${movie ? imgURL + movie.backdrop_path : ""})` }}>
            <div className="content">
                <h1 className="title">{movie ? movie.title : ''}</h1>
                <div className="banner-buttons">
                    <button className='button'>Play</button>
                    <button className="button">My List</button>
                </div>
                <p className="descripiton">{movie ? movie.overview : ""}</p>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
