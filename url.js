let http = require("http")
let url = require("url")
let fileSystem = require("fs")

http.createServer(function (req, res) {
    let test = url.parse(req.url, true).query
    let data = "My name is " + test.name + " and favorite number is " + test.num
    res.writeHead(200, {'content-Type' : 'text/html'}) 
    res.write(data)
    res.end()
}).listen(8090)
