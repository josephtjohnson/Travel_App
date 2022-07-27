import  { handleSubmit } from '../src/client/js/formHandler';
import { inputValidation } from '../src/client/js/formHandler';
import { updateUI } from '../src/client/js/formHandler';

describe("Testing the submit functionality", () => {
	test("Verifies information posted", async () => {
		const res = await request.post('http://localhost:8081/trips')
			.send({city: 'Chicago'});
		expect(res.status).toEqual(200);
	});

	test("Testing the clearFrom() function is defined", () => {
		expect(clearForm()).not.toThrowError();
	});
});