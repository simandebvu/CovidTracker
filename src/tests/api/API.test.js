import { fetchStats } from '../../actions/fetchStats';

jest.mock('../../actions/fetchStats');

describe('Country Api', () => {
  it('returns a list of countries', async () => {
    const data = [{
      active: 4209321, confirmed: 7277759, deaths: 207789, location: 'US', recovered: 2860650,
    }, {
      active: 943069, confirmed: 6386526, deaths: 99620, location: 'India', recovered: 5343837,
    }, {
      active: 402753, confirmed: 4847092, deaths: 144680, location: 'Brazil', recovered: 4299659,
    }];
    fetchStats.mockResolvedValue({ data });
    const countryList = await fetchStats();
    expect(countryList).toEqual({ data });
  });

  it('returns error if wrong detail sent', async () => {
    const error = '';
    fetchStats.mockResolvedValue({ error });
    const countryList = await fetchStats('nonExistentKantri');
    expect(countryList).toEqual({ error });
  });
});
