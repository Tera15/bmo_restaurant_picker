import React from 'react';

import './restaurant-card.styles.scss'
const RestaurantCard = ({name, price, address, image }) =>{
   
    return(
        <div className="restaurant-card">
            <div className='adress-container'>
            <h3>{name}</h3>
            <p>{address}</p>
            <span>{price}</span>
            </div>
            <div className="restaurant-image-container" style={{background: `url(${image})`}}/>
        </div>
    );
};


export default RestaurantCard;