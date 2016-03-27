var path  = require('path');
var Express = require('express');

var app = Express();
var server;

var PATH_STYLES = path.resolve(__dirname, './');
var PATH_DIST = path.resolve(__dirname, './');

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
