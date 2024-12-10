import { configureStore } from '@reduxjs/toolkit';
import destinationsReducer from './destination/destinations.slice';
import hotelsReducer from './hotel/hotels.slice';
import locationsReducer from './hotel/location.slice';  
import signupReducer from './sign-up/signup.slice'; 
import signinReducer from './sign-in/signin.slice';

const store = configureStore({
    reducer: {
        destinations: destinationsReducer,
        hotels: hotelsReducer,
        locations: locationsReducer, 
        users: signupReducer, 
        signin: signinReducer
    }
});

export default store;
