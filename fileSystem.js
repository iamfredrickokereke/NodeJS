let http = require('http')
let fs = require('fs')

let server = http.createServer(instructions).listen(5000)

function instructions(req, res) {
   // res.end('it works yet!')

    fs.readFile('index.html', function (err, data) {
        res.write(data)
        res.end()
    })
}

