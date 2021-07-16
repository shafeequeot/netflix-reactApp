//import React, { useState } from 'react'
import { Route, Link, useHistory } from 'react-router-dom';
import abuout from './abuout';
import Abuout from './abuout';
import Products from './products';



function Multipage() {
    // const [pages, setpages] = useState('')
    //let myPage;
    const history = useHistory()
    return (
        <div>
            <div style={{color:`white`}}>

<Route  component = {Products} path='/products'>

</Route> 
<Route  component = {Abuout} path='/about'>

</Route> 




 <button onClick={()=>{
     history.push('about')
 }}>About us</button>
 <button onClick={()=>{
     history.push('products')
 }}>Products</button>

                
                </div>
        </div>
    )
}

export default Multipage
