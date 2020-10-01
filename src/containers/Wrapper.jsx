import React, { useState } from 'react';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Route, Switch, Link } from 'react-router-dom';
import { JumboTron } from '../components/JumboTron';
import { CountryList } from './CountryList';
import { CountryDetail } from '../components/CountryDetail';
import { Error } from '../components/Error';

export const Wrapper = () => {
  const [filter, setFilter] = useState('');

  const continents = ['africa', 'asia', 'europe', 'north america', 'oceania', 'south america'];

  const handleSelect = e => {
    setFilter(e);
  };
  return (
    <div className="d-flex flex-column my-5">
      <Switch>
        <Route path="/" exact>
          <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Link to="/"><div><Navbar.Brand>Covid Tracker</Navbar.Brand></div></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto
        col-12"
            >
              <NavDropdown
                title="Change Continent"
                id="basic-nav-dropdown"
              >
                {continents.map(c => (
                  <NavDropdown.Item
                    onSelect={() => { handleSelect(c); }}
                    key={c}
                    className="text-uppercase"
                  >
                    {c}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar>
          <div className="container my-5 my-md-2">
            <JumboTron continent={filter} />
            <CountryList continent={filter} />
          </div>
        </Route>
        <Route path="/country/:countryname" component={CountryDetail} />
        <Route component={Error} />
      </Switch>

    </div>
  );
};

export default Wrapper;
