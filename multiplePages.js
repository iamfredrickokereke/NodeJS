let http = require("http")

let fileSystem = require("fs")

let url = require("url")



 http.createServer(function (req, res) {

    let newUrl = url.parse(req.url, true)

    let fileName = "." + newUrl.pathname

    //console.log(newUrl.pathname)
    
    fileSystem.readFile(fileName, callFunction)

    function callFunction(error, data) {

        if (error) {
            //res.writeHead(404, {'content-Type': 'text/html' })
             res.end("Page not found")
        }
        //res.writeHead(200, {'content-Type': 'text/html' })
        res.write(data)
        res.end()
    }

   
}).listen(3000)

//console.log("Server Listening on port 3000...")