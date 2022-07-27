import  { handleSubmit } from '../src/client/js/formHandler';
import { inputValidation } from '../src/client/js/formHandler';
import { updateUI } from '../src/client/js/formHandler';

describe("Testing the submit functionality", () => {
	test("Verifies information posted", async () => {
		const res = await request.post('http://localhost:8081/trips')
			.send({city: 'Chicago'});
		expect(res.status).toEqual(200)
	});

	test("Testing the updateUI() function", () => {
		expect(updateUI('Chicago', '11/02/2022', '11/03/2022', 1)).toBeDefined()
	});

	test("Testing the inputValidation() function", () => {
		expect(inputValidation('Chicago', '11/02/2022', '11/03/2022', '11/02/2022', '11/03/2022')).toBeTruthy()
	});
});
