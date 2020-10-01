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

  const stats = useSelector(state => state.covidApi);
  const countries = useSelector(state => state.countryApi);

  // if (stats.currentInfo) {
  //   // console.log('stats', stats.currentInfo);
  //   // console.log('countries', countries);
  //   // const c = Object.assign({}, ...stats.currentInfo, ...countries);
  //   // const distinct = merge(stats.currentInfo, countries, 'location');
  //   // console.log(distinct);
  //   const merge = (a, b, p) => a.filter(aa => !b.find(bb => aa[p] === bb[p])).concat(b);
  // }
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
