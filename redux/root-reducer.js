import { combineReducers } from 'redux';
import destinationsReducer from './destination/destinations.slice';
import hotelsReducer from './hotel/hotels.slice';
import locationsReducer from './hotel/location.slice';  // Sửa lỗi chính tả: 'location.slide' -> 'location.slice'
import signupReducer from './sign-up/signup.slice';  
import signinReducer from './sign-in/signin.slice';  

const rootReducer = combineReducers({
    destinations: destinationsReducer,
    hotels: hotelsReducer,
    locations: locationsReducer,
    users: signupReducer, 
    signin: signinReducer
});

export default rootReducer;
