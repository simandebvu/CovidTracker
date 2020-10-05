import CountriesObj from '../objects/Countries';

const initialState = CountriesObj;

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state };
    default:
      return state;
  }
};

export default countryReducer;
