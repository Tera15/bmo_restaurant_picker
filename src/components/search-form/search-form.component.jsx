import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {
    fetchRestaurants,
    setCity,
    selectAddress,
    selectRestaurant,
    selectArea,
    setArea,
    setAddress,
    setRestaurant
} from '../../app.slice'

import InputField from '../input-field/input-field.component';
import CustomButton from '../custom-button/custom-button.component';




import './search-form.styles.scss';



const SearchForm = () =>{
    const dispatch = useDispatch()
    const area = useSelector(selectArea)
    const restaurant = useSelector(selectRestaurant)
    const address = useSelector(selectAddress)
    const [searchState, setSearchState] = useState({
        city: '',
    });
    const {city} = searchState
    useEffect(() => {
        
    },[city])

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(setCity(city))
        dispatch(fetchRestaurants(city))
       }


    
    return(
        
    <div  className='search-form'>
    <form onSubmit={handleSubmit}>
        <div className="city-search">
            <InputField value={city} onChange={e => setSearchState({city: e.target.value})} id="name" name='city' type='text' label='id' labelName='Find City'/>
            <CustomButton  type="submit">Search</CustomButton>
        </div>
        </form>
       <div className="filter-container">
            <InputField onChange={e => dispatch(setRestaurant(e.target.value))} id="restaurant" name='restaurant' type='text' value={restaurant} labelName='Filter by Name'/>
       </div>
       <div className="filter-container">
            <InputField onChange={e => dispatch(setArea(e.target.value))} id="area" name='area' type='text' value={area} labelName='Filter by Area'/>
       </div>
       <div className="filter-container">
            <InputField onChange={e => dispatch(setAddress(e.target.value))} id="acdress" name='address' type='text' value={address}labelName='Filter by Address'/>  
       </div>
    
       
    </div>
    
)};

export default SearchForm;