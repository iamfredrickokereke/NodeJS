let express = require("express")

let ourServer = express()

ourServer.get("/", (serverReq, serverRes) => {

    serverRes.send(`
    
        <form action="/answer" method="POST">
            <p> </p>
            <input name="skyColor" autocomplete="off" >
            <button> Submit </button>

        </form>
    `)
})


ourServer.post('/answer', (req, res) => {

    res.send('Thanks for submitting the form.')
} )

ourServer.listen(3005)