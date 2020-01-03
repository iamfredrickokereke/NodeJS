let express = require("express")

// create server

let server = express()

server.use(express.urlencoded({extended:false}))

server.listen(3004)

server.get("/",(reqListener, reqResponse) => {
    reqResponse.send(`
    
    <form action="/answer" method="POST">
        <p> What color is the sky on a clear and sunny day? </p>
        <input type="text" name="ourInput" autocomplete="off" >
        <button> Submit </button>
    </form>
    
    `) 
})

server.post("/answer", (reqListener, reqResponse) => {
    
    //let score = 0

   
    if(reqListener.body.ourInput.toUpperCase() == "BLUE"){

        reqResponse.send(`
            <p> Congratulations your answer was correct </p>
            <a href="/"> Click to go back </a>
        
        `)

    } else{
        reqResponse.send(`<p> Sorry, your answer was incorrect </p>
        <a href="/"> Click to go back </a>`)
    }

    
 
} )



server.get("/about", (reqListener, reqResponse) => {
        reqResponse.send('Thanks this is my about page!')} )


server.get("/contact", function (reqListener, reqResponse) {
    
    reqResponse.send(`this page called contact is under construction  <a href="/"> go back </a>`)
})


server.post("/test", function (reqListener, reqResponse) {
    
    reqResponse.send("this page called test2 is under development")
})