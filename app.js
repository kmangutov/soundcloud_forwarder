

var sys = require("sys"),
    express = require("express"),
    request = require("request");
 

var app = express()
app.use(express.logger('dev'))

app.get('/song.txt', function(req1, res1) {

  sys.puts("enter");

  var url = "http://api.soundcloud.com/tracks/2216557/stream?client_id=8271c7113b570fed4c6027bf7cbfcd8c";
  var r = request.get(
    {
      url: url,
      followRedirect: false,
      timeout: 700
    }, function(err, res, body) {

    sys.puts(res.request.response.headers.location);

    //res1.setHeader('content-type', 'txt/html');
    res1.end(res.request.response.headers.location);

  });
});

app.listen(3000, '0.0.0.0')


