import React from 'react';
import '../styles/JumboTron.css';
import PropTypes from 'prop-types';

export const JumboTron = ({ continent }) => (
  <div className="mt-1" data-testid="continent-jumbotron">
    <h1 className="display-4 continent-name">{continent || 'CHOOSE ABOVE'}</h1>
  </div>
);

JumboTron.propTypes = {
  continent: PropTypes.string.isRequired,
};

export default JumboTron;
