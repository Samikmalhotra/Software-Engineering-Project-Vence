import React from 'react'
import '../css/shop.css'
import shopImg from '../img/Opened-bro.png'
const Shop = ({shop}) => {
    return (
        <div className="shop">
            <img src={shopImg}/>
            <h1>{shop.name}</h1>
            <h2>{shop.location}</h2>
            
        </div>
    )
}

export default Shop
