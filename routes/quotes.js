var express = require('express');
var quotesRouter = express.Router();
const cors = require('./cors');

var arrQuotesList = require('../shared/quotesList');

/* GET users listing. */
quotesRouter.get('/', cors.cors, function(req, res, next) {
    res.statusCode = 200;
    res.setHeader('contentType','application/json');
    res.json(arrQuotesList);
});

module.exports = quotesRouter;