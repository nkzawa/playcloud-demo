PlayCloud Demo
==============

```js
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
```
[![Play](https://img.shields.io/badge/%E2%96%B6-Play-blue.svg)](http://nkzawa.2015.nodeknockout.com/nkzawa/playcloud-demo/example1)

Click **Play** badge to execute the example.

## License

MIT
