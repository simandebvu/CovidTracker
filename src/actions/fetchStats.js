export const fetchStats = dispatch => {
  const apiURL = 'https://covid2019-api.herokuapp.com/v2/current';
  fetch(apiURL).then(res => res.json()).then(JSONres => {
    dispatch({ type: 'GET_CURRENT', payload: JSONres.data });
  }).catch(e => { throw new Error(e); });
};

export default fetchStats;
