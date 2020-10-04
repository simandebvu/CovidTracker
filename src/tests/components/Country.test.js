import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Country } from '../../components/Country';
import '@testing-library/jest-dom/extend-expect';
import store from '../../store/store';

describe('COUNTRY -> Component Test', () => {
  afterEach(cleanup);
  it('shows the continent name passed as a prop', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Country
            name="Canada"
            key="007"
          />
        </Router>
      </Provider>,
    );
    expect(getByTestId('country-component')).toHaveTextContent('Canada');
  });
});
