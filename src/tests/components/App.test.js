import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from '../../components/App';
import store from '../../store/store';
import Jumbotron from '../../components/JumboTron';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
it('renders without crashing', () => {
  const mDiv = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, mDiv);
});

it('shows the continent name passed as a prop', () => {
  const { getByTestId } = render(<Jumbotron className="container" continent="africa" />);
  expect(getByTestId('continent-jumbotron')).toHaveTextContent('africa');
});

it('shows the continent name passed as a prop', () => {
  const { getByTestId } = render(<Jumbotron className="container" continent="nameOfAContinent" />);
  expect(getByTestId('continent-jumbotron')).toHaveTextContent('nameOfAContinent');
});
