const { handleSubmit } = require('../src/client/js/formHandler');
const { inputValidation } = require('../src/client/js/formHandler');
const { updateUI } = require('../src/client/js/formHandler');

describe("Testing the submit functionality", () => {
	test("Verifies information posted", async () => {
		const res = await request.post('http://localhost:8081/trips')
			.send({city: 'Chicago'});
		expect(res.status).toEqual(200)
	});
});
describe("Testing the submit functionality", () => {
	test("Testing the updateUI() function", () => {
		expect(updateUI('Chicago', '11/02/2022', '11/03/2022', 1).toBeDefined()
	});
});
describe("Testing the submit functionality", () => {
	test("Testing the inputValidation() function", () => {
		expect(inputValidation('Chicago', '11/02/2022', '11/03/2022', 11/02/2022, 11/03/2022).toBeTruthy()
	});
});
