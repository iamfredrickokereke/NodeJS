const path = require('path')
const fileSystem = require('fs')
const express = require('express')
const url = require('url')

const server = express()

server.get("./index.html", (request, response) => {
    response.sendFile("index.html", () =>{ alert("file not found")})
})

//server.post(a,b)

server.listen(3500, () => {console.log("Server is listening on port 3500")})