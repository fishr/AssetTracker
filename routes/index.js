var express = require('express');

var soap = require('soap');
var soap_url = 'http://www.mouser.com/service/searchapi.asmx?WSDL';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
  soap.createClient(soap_url, function(err, client) {
    client.ServiceStatus({}, function(err, result) {
      console.log(result);
      res.render('index', { title: result["ServiceStatusResult"] });
    });
  });

//res.render('index', {title: "oops"});
});

module.exports = router;
