let http = require("http")

let fileSystem = require("fs")

let url = require("url")



 http.createServer(function (req , res) {

    let newUrl = url.parse(req.url, true)

    let fileName = "." + newUrl.pathname

    //console.log(newUrl.pathname)
    
    fileSystem.readFile(fileName, callFunction)

    function callFunction(error, data) {

        if (error) {
            res.end("Page not found")
        }
        res.write(data)
        res.end()
    }

   
}).listen(5000)

//console.log("Sending responses...")