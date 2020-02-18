var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){
	res.json({error: null, data:[
		{toppings:"cherry", quantity:2},{toppings:"plain", quantity:6},{toppings:"chocolate",quantity:3}]
	});
});

/* GET users listing. 
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
module.exports = router;
