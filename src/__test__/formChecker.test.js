import{ checkForCity } from '../src/client/js/formChecker';
//const { checkForDate } = require('../src/client/js/formChecker');
//const { chronos } = require('../src/client/js/formChecker');

test('Testing the checkForCity() function', () => {
  expect(checkForCity(Chicago)).toBeTruthy()
});

//describe("Testing the date check functionality", () => {
//	test("Testing the checkForDate() function", () => {
//		expect(checkForDate(11/02/2022, 11/03/2022)).toBeTruthy()
//	});
//});

//describe("Testing the trip length functionality", () => {
//	test("Testing the chronos() function", () => {
//		expect(chronos(11/02/2022, 11/03/2022)).toBeTruthy()
//	});
//});
