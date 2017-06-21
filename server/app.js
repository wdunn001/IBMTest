const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var Redis = require('ioredis');
var redis = new Redis({
  connectTimeout: 10,
  showFriendlyErrorStack: true
});

app.use('/', express.static('client', {
  index: 'index.html'
}));


app.get('/contact', function (req, res) {
  redis.get('contact', function (err, result) {
    if (err == null) {
      res.send(result ? result : "empty");
    } else {
    res.status(500).send(error);
    }
  });
})

app.post('/contact', function (req, res) {
  //just adding a simple validation
  if (JSON.stringify(req.body).length > 500) {
    res.status(400).send("you request was to long");
  }
  redis.set('contact', JSON.stringify(req.body), function (err) {
  if (err == null) {
    res.send("success");
  } else {
    console.log(err)
    res.status(500).send(err);

  }
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})