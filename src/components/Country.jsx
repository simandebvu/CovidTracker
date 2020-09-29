import React from 'react';
import Card from 'react-bootstrap/Card';
import './Country.css';

export const Country = ({ name }) => (

  <div>
    <Card border="dark" className="my-2" style={{ width: '18rem' }}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default Country;
