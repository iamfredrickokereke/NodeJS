let http = require('http')

let url = require('url')

http.createServer(instruction).listen(3000)

function instruction(req, res) {
    let test = url.parse(req.url, true).query

    let dates = "The year is " + test.year + " and month is " + test.month

    //`res.end('You are connected to the server now!')
    res.end(dates)
   // res.end('You are connected to the server now!')
}