import { checkForCity } from ../src/client/js/formChecker;
import { checkForDate } from ../src/client/js/formChecker;
import { chronos } from ../src/client/js/formChecker;

Describe(“Testing the submit functionality”, () => {
test(“Testing the checkForCity() function”, () => {
		     expect(checkForCity(city).toBeDefined();
})});

Describe(“Testing the submit functionality”, () => {
test(“Testing the checkForDate() function”, () => {
		     expect(checkForDate(startDate, endDate)).toBeDefined();
})});

Describe(“Testing the submit functionality”, () => {
test(“Testing the chronos() function”, () => {
		     expect(chronos(startDate, endDate)).toBeTruthy;
})});
