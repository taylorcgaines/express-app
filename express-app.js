const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum')
var plorem  = loremIpsum();

app.get('/lorem', function (req, res) {
  res.send(`<html><body><p>${plorem}</p><p>${plorem}</p><p>${plorem}</p></body></html>`);
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
