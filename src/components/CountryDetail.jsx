import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ImEarth } from 'react-icons/im';

export const CountryDetail = ({ match, location }) => {
  const curName = match.params.countryname;
  const {
    confirmed, deaths, recovered, active,
  } = location.state;
  const openURL = url => {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  };

  const handleShareTwitter = () => {
    openURL(`https://twitter.com/intent/tweet?hashtags=covid19&related=hiresimandebvu&text=${encodeURIComponent(`Stay Home. Stay Safe. ${curName}. Confirmed Cases : ${confirmed}! `)}`);
  };

  return (
    <div className="my-5">
      <Jumbotron className="container">
        <Container>
          <h1 className="text-secondary">
            <span className="text-primary"><ImEarth /></span>
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
                <td className="text-warning font-weight-bold">{confirmed}</td>
                <td className="text-danger font-weight-bold">{deaths}</td>
                <td className="text-success font-weight-bold">{recovered}</td>
                <td className="text-primary font-weight-bold">{active}</td>
              </tr>
            </tbody>
          </Table>

          <Button variant="warning" className="btn-danger"><Link to="/"><span className="text-white">Back</span></Link></Button>
          {' '}
          <Button variant="primary" onClick={handleShareTwitter}>Tweet</Button>
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
