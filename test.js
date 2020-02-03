let http = require("http")

let server = http.createServer(instruction)

server.listen(3000)

function instruction(reqListener, reqResponse) {

    if(reqListener.url == '/'){

        reqResponse.end("Home page Server is rendered!")
        
    } else if(reqListener.url == '/check'){

        reqResponse.end('Page check is under construction')

    }else{
        reqResponse.end("Page doesn't exist.")
    }
    
}

