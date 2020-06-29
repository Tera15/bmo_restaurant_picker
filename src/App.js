import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectCity,
    selectLoadingState,
    selectRestaurants,
    selectRestaurant,
    selectArea,
    selectAddress,
} from './app.slice';


import SearchForm from './components/search-form/search-form.component';
import ScrollContainer from './components/scroll-container/scroll-container.component';
import RestaurantCard from './components/restaurant-card/restaurant-card.component';
import Spinner from './components/with-spinner/spinner.component'
import './App.styles.scss';



function App() {
 const restaurants = useSelector(selectRestaurants)
 const addresses = useSelector(selectAddress)
 const areas = useSelector(selectArea)
 const restuarant = useSelector(selectRestaurant)
 const city = useSelector(selectCity)
 const loadingState = useSelector(selectLoadingState);

 const filteredRestaurants = restaurants.filter(rest => {
    return (rest.area.toLowerCase().includes(areas.toLowerCase()) && rest.name.toLowerCase().includes(restuarant.toLowerCase()) && rest.address.toLowerCase().includes(addresses.toLowerCase()))
 })
 
  return (
  <div>
   {
     loadingState !== 'idle' ?  <Spinner/> :
     <div className="app">
         
     <div className='page-divide'>
       <div className='title-container'>
         <p>Discover the local eateries of...</p>
         <h2>{city}</h2>
       </div>
         <SearchForm/>
       </div>
       <ScrollContainer>
        {
           filteredRestaurants.map(restaurant =>{
            const {name, address, price, image_url, id} = restaurant;
           return <RestaurantCard key={id} name={name} address={address} price={price} image={image_url} />
          })
        }
     </ScrollContainer>
     
 </div>
   }
    
    
  </div>
  );
}

export default App;
