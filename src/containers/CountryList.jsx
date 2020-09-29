import React from 'react';
import PropTypes from 'prop-types';
import CountriesObj from '../objects/Countries';
import { Country } from '../components/Country';

export const CountryList = ({ continent }) => {
  const countries = CountriesObj.filter(c => c.continent.toLowerCase() === continent.toLowerCase());
  return (
    <div>
      <h2>Countries Listing </h2>
      <div className="d-flex flex-wrap justify-content-around">
        {countries.map(c => (
          <Country
            name={c.country}
            key={c.id}
          />
        ))}
      </div>
    </div>
  );
};

CountryList.propTypes = {
  continent: PropTypes.string.isRequired,
};

export default CountryList;
