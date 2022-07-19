import { checkForCity } from ../src/client/js/formChecker;
import { checkForDate } from ../src/client/js/formChecker;
import { chronos } from ../src/client/js/formChecker;

Describe(“Testing the city check functionality”, () => {
	test(“Testing the checkForCity() function”, () => {
		expect(checkForCity(Chicago).toBeTruthy();
	});
});

Describe(“Testing the date check functionality”, () => {
	test(“Testing the checkForDate() function”, () => {
		expect(checkForDate(11/02/2022, 11/03/2022)).toBeTruthy();
	});
});

Describe(“Testing the trip length functionality”, () => {
	test(“Testing the chronos() function”, () => {
		expect(chronos(11/02/2022, 11/03/2022)).toBeTruthy;
	});
});
