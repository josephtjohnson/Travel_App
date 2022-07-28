/** * @jest-environment jsdom */
const inputValidation = require ('../client/js/formHandler');

describe("Testing the submit functionality", () => {
	test("Testing the inputValidation() function is defined", () => {
		expect(inputValidation).toBeDefined();
	});
});
