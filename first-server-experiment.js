// import http from node

let http = require("http")

// store and use create server method on http

let server = http.createServer(instructions)

// create and open port for listening

server.listen(3001)

// create action based off instructed functions

function instructions(serverReq, serverRes){

    // calling the end method as per user response on request

    if(serverReq.url == "/"){

        serverRes.end("This is my default server page yo!")
    }

    if(serverReq.url == "/about"){
        
        serverRes.end("This is my About server page yo!")
    }

    if(serverReq.url == "/contact"){
        
        serverRes.end("This is my Contact server page yo!")
    }

       
        serverRes.end("This server page yo! doesn't exist. ")
    
    
}