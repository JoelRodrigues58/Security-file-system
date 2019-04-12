var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var autentFile = "/tmp/validationCode.txt"
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){

  var p = req.body.code

  fs.writeFile(autentFile, p, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
  }); 

})

module.exports = router;
