import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';

export const Filter = ({ onSelect, options }) => (
  <NavDropdown
    title="Change Continent"
    id="basic-nav-dropdown"
  >
    {options.map(c => (
      <NavDropdown.Item
        onSelect={() => { onSelect(c); }}
        key={c}
        className="text-uppercase"
      >
        {c}
      </NavDropdown.Item>
    ))}
  </NavDropdown>
);

Filter.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default Filter;
