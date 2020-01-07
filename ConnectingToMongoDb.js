let express = require('express')
let mongodb = require('mongodb')

let db

let connectionString = 'mongodb+srv://todoAppUser:root@cluster0-9mcdn.mongodb.net/TodoApp?retryWrites=true&w=majority'

mongodb.connect(connectionString,{useNewUrlParser: true,  useUnifiedTopology: true}, (err, client) => {

    db = client.db()
    server.listen(3000)
})



let server = express()


server.use(express.urlencoded({extended: false}))

server.get("/", (req, res) => {

    db.collection('items2').find().toArray((err, items4)=>{ 
        res.send(`
    
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple To-Do App</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <h1 class="display-4 text-center py-1">To-Do App</h1>
        
        <div class="jumbotron p-3 shadow-sm">
          <form action="/db" method="POST">
            <div class="d-flex align-items-center">
              <input name="input" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
              <button class="btn btn-primary">Add New Item</button>
            </div>
          </form>
        </div>
        
        <ul class="list-group pb-5">
          ${items4.map(function (item) {
           return  `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
           <span class="item-text">${item.name}</span>
           <div>
             <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
             <button class="delete-me btn btn-danger btn-sm">Delete</button>
           </div>
         </li>
         `
          }).join("")}
        </ul>
        
      </div>
      
    </body>
    </html>
    
    `)
    })
    
})



server.post("/db", (req, res) => {
    //console.log(req.body.input)

   db.collection('items2').insertOne({name : req.body.input}, () => { res.redirect("/")
    
    //res.send("it worked")

})
    
})

