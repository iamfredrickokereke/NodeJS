
let express = require("express")

let server = express()

server.use(express.urlencoded({extended:false}))


server.get("/", function (req, res) {
    res.send(`
    
        
        <form action="/answerPage" method="POST">
        <input type="text" name="input" />
        <button> Click to choose sky color </button>
        </form>
    `)
})

server.post("/answerPage", (req, res) =>{

        //document.write(req.body.input)   - Doesnt accept document object
        console.log(req.body.input)
       if(req.body.input.toUpperCase() == "BLUE"){
        res.send(`Hello, Yes the Sky color is Blue`)
        // document.body.style.background = "blue"
       } else{
        res.send(`Wrong please go <a href="./">back to homepage</a>`)
       }

})

server.listen(3512)