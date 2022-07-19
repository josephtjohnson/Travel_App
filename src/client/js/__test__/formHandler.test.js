import { handleSubmit } from ../src/client/js/formHandler;
import { inputValidation } from ../src/client/js/formHandler;
import { updateUI } from ../src/client/js/formHandler;

Describe(“Testing the submit functionality”, () => {
	it(“Verifies information posted”, async () => {
		const res = await request.post('http://localhost:8081/trips')
			.send([city: 'Chicago'});
		expect(res.status).toEqual(200)	
	});
});
Describe(“Testing the submit functionality”, () => {
	test(“Testing the updateUI() function”, () => {
		expect(updateUI('Chicago', '11/02/2022', '11/03/2022', 1).toBeDefined();
	});
});
Describe(“Testing the submit functionality”, () => {
	test(“Testing the inputValidation() function”, () => {
		expect(inputValidation('Chicago', '11/02/2022', '11/03/2022', 11/02/2022, 11/03/2022).toBeTruthy();
	});
});
