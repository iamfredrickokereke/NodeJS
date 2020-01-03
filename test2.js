let express = require("express")

let server = express()

server.use(express.urlencoded({extended:false}))


server.get("/", connect)

function connect(req, res) {
    res.send(`
    
    
        <form action="/contact" method="POST">

            <input name="input" autocomplete="off"> 
            <button> Contact </button>

        </form>
    `)
}

server.post("/contact", function(req, res) {

    console.log(req.body.input)
    res.send(`Hello ${req.body.name.value} welcome to my website.`)
})

server.listen(3050)