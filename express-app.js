const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum')

app.get('/lorem/:loremNum', function (req, res) {
  var numLorem = parseInt(req.params.loremNum);
  res.send(`<html><body>`+loremIpsum({count:numLorem, units:"paragraphs", format:"html"})+`</body></html>`);
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
