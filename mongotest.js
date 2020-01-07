let express = require('express')
let mongodb = require('mongodb')

let db
let connectionString = 'mongodb+srv://todoAppUser:root@cluster0-9mcdn.mongodb.net/TodoApp?retryWrites=true&w=majority'
mongodb.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology: true}, (err, client) =>{
    
    db = client.db()
    
    server.listen(3005)
} )
let server = express()

server.use(express.urlencoded({extended: false}))


//Read from mongodb
db.collection('item').findAll().toArray((err, items)=>{
    items.map((item) => {return 'i can read from db'}).join("")
})

server.get('/', (req, res) => {
    res.send(`
    
        <form action="/dbResult" method="POST">
            <input name='input' autofocus autocomplete="off" />
            <button> Save </button>

        </form>
    `)
})





server.post('/dbResult', (req, res) => {

    db.collection('item').insertOne({name : "goodentry"}, (err, (req, res) => {

        res.send(`
        Saved successfully <a href="/"> Back to Homepage </a>
        //Create table and store into mongodb
        
    `)
    } ))

} 

    
)

