import React from 'react';
import PropTypes from 'prop-types';
import CountriesObj from '../objects/Countries';
import { Country } from '../components/Country';
import getRandomInt from '../utils/getRandomInt';

export const CountryList = ({ continent }) => {
  const countries = CountriesObj.filter(c => c.continent.toLowerCase() === continent.toLowerCase());
  console.log(countries);
  return (
    <div>
      <h2>Countries Will be here </h2>
      <div>{countries.map(c => <Country name={c.country} key={c.id} />)}</div>
    </div>
  );
};

CountryList.propTypes = {
  continent: PropTypes.string.isRequired,
};

export default CountryList;
