let mongodb = require('mongodb').MongoClient;
let express = require('express');
let body_parser = require('body-parser');

let app = express();
let cookie;

app.use(express.static("../client"));

let urlencoderParser = body_parser.urlencoded({extended: false});
app.post("/registration", urlencoderParser, function(request, response){
    let humans = cookie.collection('humans');

    humans.insert({
        firstName: request.body.name,
        secondName: request.body.secondname
    }, function(err, result){
        if (err) console.log(err.stack);
        response.redirect("../redirect.html")
    }) //Возможный err
});

app.get("/records", function(request, response){
    let humans = cookie.collection('humans');
    humans.find().toArray(function(err, documents){
        if (documents.length > 0){
            response.send(JSON.stringify(documents));
        } 
    })
})

mongodb.connect("mongodb://localhost", function(err, client){
    cookie = client.db("cookie");
})

app.listen(591)