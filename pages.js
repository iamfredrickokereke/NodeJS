let http = require("http")
let url = require("url")
let fileSystem = require("fs")


http.createServer(function (request, response) {
    let newUrl = url.parse(request.url, true)
    let fileName = "." +  newUrl.pathname

    if (fileName == './') {
        fileName = './index.html'
    }

     
    console.log(fileName)


    // read the files

    fileSystem.readFile(fileName, function (error, content) {
        
        if (error) {
            response.writeHead(404)
            return response.end("Page not Found")
        }

        response.writeHead(200)
        response.write(content)
        return response.end()
    })
}).listen(8081)