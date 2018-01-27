import { combineReducers } from 'redux';
import DirectionsReducer from './reducer_directions'
// import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  directions: DirectionsReducer
  // weather: WeatherReducer
});


export default rootReducer;
