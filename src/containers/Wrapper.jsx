import React, { useState } from 'react';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { JumboTron } from '../components/JumboTron';
import { CountryList } from './CountryList';

export const Wrapper = () => {
  const [filter, setFilter] = useState('');

  const continents = ['africa', 'asia', 'europe', 'north america', 'oceania', 'south america'];

  const handleSelect = e => {
    setFilter(e);
  };
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Covid Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="Change Continent"
              id="basic-nav-dropdown"
            >
              {continents.map(c => (
                <NavDropdown.Item
                  onSelect={() => { handleSelect(c); }}
                  key={c}
                >
                  {c}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <JumboTron continent={filter} />
        <CountryList continent={filter} />
      </div>
    </>
  );
};

export default Wrapper;
