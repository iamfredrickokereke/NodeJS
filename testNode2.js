let http = require("http")
let url = require("url")
let fileSystem = require("fs")

http.createServer(function (request, response) {
    fileSystem.readFile('./index.html', function (error, content) {
        response.writeHead(200)
        response.write(content)
        response.end()
    })
}).listen(8080) //listening port


console.log("Server is listening at port - 8080...")