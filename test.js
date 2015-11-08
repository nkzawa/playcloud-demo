var http = require('http')
var hello = require('playcloud-demo')

var server = http.createServer(function (req, res) {
  res.writeHead(200)
  res.end(hello('World'))
})

server.listen(1337, function() {
  http.get('http://localhost:1337', function(res) {
    res.pipe(process.stdout)
  })
})
