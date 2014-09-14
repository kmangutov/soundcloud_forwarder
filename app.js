

var sys = require("sys"),
    express = require("express"),
    request = require("request");
 

var app = express()
app.use(express.logger('dev'))

var client_id = "8271c7113b570fed4c6027bf7cbfcd8c";

app.get('/app/tracks/:id', function(req1, res1) {

  sys.puts("enter");
  var id = req1.params.id;

  //2216557
  var url = "http://api.soundcloud.com/tracks/" + id + "/stream?client_id=" + client_id;
  var r = request.get(
    {
      url: url,
      followRedirect: false,
      timeout: 700
    }, function(err, res, body) {

    try{
      sys.puts(res.request.response.headers.location);

      res1.setHeader('content-type', 'text/html');
      res1.end(res.request.response.headers.location);
    } catch (err) {
      res1.end("");
    }

  });
});

app.listen(3000, '0.0.0.0')


