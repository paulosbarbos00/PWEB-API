var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send({ response: "Itens listados com sucesso" })
});

router.post('/', function (req, res, next) {
  res.send({ response: "Item inserido com sucesso" })
});

router.put('/', function (req, res, next) {
  res.send({ response: "Item editado com sucesso" })
});

router.delete('/', function (req, res, next) {
  res.send({ response: "Item deletado com sucesso" })
});

module.exports = router;
