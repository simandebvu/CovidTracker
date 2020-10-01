import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Country } from '../components/Country';
import { fetchStats } from '../actions/fetchStats';

export const CountryList = ({ continent }) => {
  const dispatch = useDispatch();
  const getCurrentStats = () => { dispatch(fetchStats); };
  useEffect(() => {
    getCurrentStats();
  }, []);

  const countries = useSelector(state => state.countryApi);

  const filteredCountries = countries
    .filter(c => c.continent.toLowerCase() === continent.toLowerCase());

  return (
    <div>
      <h2>Countries Listing </h2>
      <div className="d-flex flex-wrap justify-content-around">
        {filteredCountries.map(c => (
          <Country
            name={c.location}
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
