import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchRestaurants = createAsyncThunk(
  'startGetRestaurants',
    async (city, thunkAPI) => {
      const response = await axios.get(`https://opentable.herokuapp.com/api/restaurants`, {
        params: {
          city: city,
          per_page: 100
        }
      });
    return response.data.restaurants
    });

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    restaurants: [],
    loading: 'idle',
    city: 'Enter a city',
    currentRequestId: undefined,
    error: null,
    restaurant: '',
    area: '',
    address: ''
  },
  reducers: {
    setCity: (state, action) =>{
      console.log(action.payload)
      state.city = action.payload;
    },
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setArea: (state, action) => {
      state.area = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },

  },
  extraReducers: {
    [fetchRestaurants.pending]: (state, action) => {
      state.loading = 'pending'
      state.currentRequestId = action.meta.requestId
    },
    [fetchRestaurants.fulfilled]: (state, action) => {
      console.log(action.payload,'ada')
      state.loading = 'idle';
      state.restaurants = action.payload;
      state.currentRequestId = undefined;
    },
    [fetchRestaurants.rejected]: (state, action) => {
      state.loading = 'idle';
      state.error = action.error;
      state.currentRequestId = undefined;
    }
  }
})


export const { setCity, setRestaurant, setAddress, setArea} = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectRestaurants = state => state.App.restaurants;
export const selectCity = state => state.App.city;
export const selectLoadingState = state => state.App.loading;
export const selectArea = state => state.App.area;
export const selectRestaurant= state => state.App.restaurant;
export const selectAddress = state => state.App.address;






export default appSlice.reducer;
