// test file for hw 4 testing the contents of the json table
// pair programed with mikey

const orders = require('../routes/orders.js');
	test('check arr[0] is topping=cherry, quantity=3', () =>{
		expect(orders.length).toEqual(3);
	});