
var proxy = require('http-proxy').createProxyServer({});

var server = require('http').createServer(function(req, res) {)
  if(req.url.indexOf('api/v1') > -1)
	{
		console.log('proxying ' + req.method + ' ' + req.url + ' to devbox')
  	proxy.web(req, res, { target: 'http://192.168.10.2:80' });
	}
  else
	{
		console.log('proxying ' + req.method + ' ' + req.url + ' to static')
  	proxy.web(req, res, { target: 'http://localhost:4200/' });
	}
});

console.log("listening on port 80")
server.listen(80);
