var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simnet', message: 'Bienvenue sur Simnet, l\'application qui vous permet d\'envoyer des sms par le web' });
});

module.exports = router;


