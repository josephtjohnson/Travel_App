const checkForCity = require('../client/js/formChecker');

describe('Testing checkForCity() function', () => {
const city = 'Chicago';
  test('Testing the checkForCity() function', () => {
    expect(checkForCity(city)).toBeTruthy()
  });
});
