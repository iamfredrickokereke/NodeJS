let http = require("http")

let myServer = http.createServer( (req, res) => {

    //console.log(req.url)

    if (req.url == '/'){
        res.end("Yo! welcome to my website")
    } else if( req.url == '/about'){
        res.end("About me page")
    } else{
        res.end("This page doesnt exist.")
    }
   
})

myServer.listen(3000)