var express = require('express');
var router = express.Router();
var database = require('./dbms.js');

router.post('/', function(req, res, next){
	/*
	res.json({error: null, data:[
		{toppings:"cherry", quantity:2},{toppings:"plain", quantity:6},{toppings:"chocolate",quantity:3}]
	});
	*/

	database.dbquery("SELECT * FROM ORDERS WHERE MONTH = '"+req.query.MONTH+"'" , function(error, result) {
		if(error){
			console.log(error);
			return;
		}
		else {
			res.json(result);
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
