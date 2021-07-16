

import React, { useEffect, useState } from 'react'
import axios from '../constents/axios'
import { API_KEY , imgURL} from '../constents/constants'
import "./rowTile.css"


function RowTile(props) {
    
    const [otTiles, setOtTiles] = useState([])
 useEffect(() => {
     
    axios.get(`discover/tv?api_key=${API_KEY}&language=en-US`).then((response)=>{
       
        setOtTiles(response.data.results)
        console.log(response.data)
    })
    
 }, [])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="poster">
           
            {
                otTiles.map((obj)=>{
                    return(
                    <img className={props.size ? "small" : "image"} src={`${imgURL+obj.backdrop_path}`} alt="tile 1"></img>
                    )
                })
            }
            
            
        </div></div>
    )
}

export default RowTile
