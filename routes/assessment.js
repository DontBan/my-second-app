var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('assessment', { title: 'あなたのいいところ診断' });
});

module.exports = router;