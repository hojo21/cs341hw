var jsonReturn = require('../routes/orders');
test('test selectEvent', () => {
	expect(jsonReturn).toEqual(expect.anything());
	var jsonReturnObject = jsonReturn.jsonObject;
	//expect(jsonReturnObject.data[1]).toEqual(expect.anything());
});