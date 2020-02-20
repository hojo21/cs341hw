var express = require('express');
var router = express.Router();
var database = require('./dbms.js');

router.post('/', function(req, res, next){
	/*
	res.json({error: null, data:[
		{toppings:"cherry", quantity:2},{toppings:"plain", quantity:6},{toppings:"chocolate",quantity:3}]
	});
	*/

	database.dbquery("INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES (1234, 'JAN', 12, "+req.query.QUANTITY+", '"+req.query.TOPPING+"', '"+req.query.NOTES+"')", function(error, result) {
		if(error){
			console.log(error);
			return;
		}
		else {
			console.log("order made");
		}
	});

});

//GET users listing. 
/*
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/



module.exports = router;
