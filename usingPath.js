const path = require('path')
const fileSystem = require('fs')
const express = require('express')
const url = require('url')

const server = express()

server.get("/index", (request, response) => {
   

    if (request.url === '/index') {

        response.sendFile(path.resolve(__dirname, 'third.html'))
 
    }else{
      return  response.end("fake file")
    }

})
    
    

//server.post(a,b)

server.listen(3500, () => {console.log("Server is listening on port 3500")})