let express = require("express")

let server = express();

server.get('/', instruction)

server.listen(3002)

function instruction(res, req){

    req.send('it works very fine!')

}