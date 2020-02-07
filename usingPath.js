const path = require('path')
const fileSystem = require('fs')
const express = require('express')
const url = require('url')

const server = express()

server.listen(3500, () => {Console.log("Server is listening on port 3500")})