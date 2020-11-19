"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.status(200).json({ status: 'OK' });
});
app.listen(3333, function () { return console.log('🔥 Back-end started!'); });
