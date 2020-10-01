import { combineReducers } from 'redux';
import { covidApiReducer } from './API';
import { countryReducer } from './CountriesReducer';

const rootReducer = combineReducers(
  {
    covidApi: covidApiReducer,
    countryApi: countryReducer,
  },
);

export default rootReducer;
