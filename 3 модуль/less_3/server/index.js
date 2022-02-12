let express = require("express");
let cors = require("cors")
let app = express();

app.use(cors())

app.get("/", function(request, response){
    response.send("Hello, Node.js")
})

app.get("/folder/page", function(request, response){
    let x = request.query.music
    response.send({music: x})
})

app.listen(591);