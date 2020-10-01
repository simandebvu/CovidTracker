import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CountryDetail = ({ match, location }) => {
  const curName = match.params.countryname;
  return (
    <div className="my-5">
      <Jumbotron className="container">
        <Container>
          <h1>
            {' '}
            {curName}
          </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Confirmed</th>
                <th>Deaths</th>
                <th>Recovered</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{location.state.confirmed}</td>
                <td>{location.state.deaths}</td>
                <td>{location.state.recovered}</td>
                <td>{location.state.active}</td>
              </tr>
            </tbody>
          </Table>

          <Button variant="warning" className="text-white"><Link to="/">Back</Link></Button>
          {' '}
          <Button variant="primary">Tweet</Button>
          {' '}
        </Container>
      </Jumbotron>
    </div>
  );
};

CountryDetail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default CountryDetail;
