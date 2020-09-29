import React from 'react';
import './JumboTron.css';
import PropTypes from 'prop-types';

export const JumboTron = ({ continent }) => (
  <div className="jumbotron mt-1">
    <h1 className="display-4">{continent || 'africa'}</h1>
  </div>
);

JumboTron.propTypes = {
  continent: PropTypes.string.isRequired,
};

export default JumboTron;
