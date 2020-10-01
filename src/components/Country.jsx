import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './Country.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Country = ({ name }) => {
  const stats = useSelector(state => state.covidApi);
  const details = stats.currentInfo.filter(i => i.location === name)[0] === undefined ? { active: '-' } : stats.currentInfo.filter(i => i.location === name)[0];

  const detailsLink = {
    pathname: `country/${name}`,
    state: details,
  };
  return (
    <div>
      <Link to={detailsLink}>
        <Card border="dark" className="my-2 country-card" style={{ width: '18rem' }}>
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Text>
              <span>
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

export default Country;
