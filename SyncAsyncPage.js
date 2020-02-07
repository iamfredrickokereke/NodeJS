const http = require('http')
const fs = require("fs")

const server = http.createServer( (request, response) => {
    //response.statusCode = 200

    //console.log(request.url)


    //Blocking(Synchronous) Code and Non Blocking(Asynchronous) Code

    const secondPage = fs.readFileSync("./second.html")
    const thirdPage = fs.readFileSync("./third.html")
    const firstPage = fs.readFileSync("./index.html")


    if (request.url === '/'){
        return response.end(firstPage)
    }else if (request.url === '/second'){
        return response.end(secondPage)
    }else if (request.url === '/third'){
        return response.end(thirdPage)
    }else{
        response.writeHead(404)
        return response.end("PAGE NOT FOUND")
    }
    
})

//json wont work on response object without express

server.listen(3000, () => {
    console.log("Server is listening on port 3000")
})