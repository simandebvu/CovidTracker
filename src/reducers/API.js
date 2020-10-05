const initialState = [];

export const covidApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRENT':
      return { ...state, currentInfo: action.payload };
    default:
      return state;
  }
};

export default covidApiReducer;
