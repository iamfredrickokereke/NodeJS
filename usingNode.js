let http = require("http")



let server = http.createServer(function (req, res) {
    
    if(req.url == "/"){
        res.end("Home page! welcome to our site")
    } else if( req.url ==  "/answer"){
        res.end("answer page, it worked again!")
    }else{
        res.end("na fake page be this!")
    }

})

server.listen(3500)