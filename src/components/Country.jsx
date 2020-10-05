import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Country.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const Country = ({ name }) => {
  const stats = useSelector(state => state.covidApi);
  let details = {};
  if (stats.currentInfo) {
    details = stats.currentInfo.filter(i => i.location === name)[0] === undefined ? { active: '-' } : stats.currentInfo.filter(i => i.location === name)[0];
  }

  const detailsLink = {
    pathname: `country/${name}`,
    state: details,
  };
  return (
    <div data-testid="country-component">
      <Link to={detailsLink}>
        <Card border="dark" className="my-2 country-card" style={{ width: '18rem' }}>
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Text>
              <span className="text-danger">
                Active:
                {' '}
                {details.active}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Country;
