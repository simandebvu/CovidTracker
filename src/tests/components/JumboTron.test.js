import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Jumbotron from '../../components/JumboTron';
import '@testing-library/jest-dom/extend-expect';

describe('JUMBOTRON -> Component Test', () => {
  afterEach(cleanup);
  it('shows the continent name passed as a prop', () => {
    const { getByTestId } = render(<Jumbotron className="container" continent="africa" />);
    expect(getByTestId('continent-jumbotron')).toHaveTextContent('africa');
  });
  it('correctly says choose above if no continent', () => {
    const { getByTestId } = render(<Jumbotron className="container" continent="" />);
    expect(getByTestId('continent-jumbotron')).toHaveTextContent('CHOOSE ABOVE');
  });
});
