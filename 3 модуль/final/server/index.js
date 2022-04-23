const express = require("express"),
      vjm = require("vue-jwt-mongo"),
      mongoClient = require("mongodb").MongoClient,
      multer = require("multer");

const urlMongo = "mongodb://localhost/photofeed";

let app = express();
app.use(express.static("../client"));
app.use(express.static("../user_img"));

let vjmServer = vjm.Server({
    mongoUrl: urlMongo,
    jwtSecret: "D5B39E636CEF07D6F1F37D18B42159128C7A82F0F0F32295E519B9DC2CCCAA1C"
});

let database;

let upload = multer({ dest: "../user_img"});
app.post("/upload", [vjmServer.jwtProtector, upload.single("picture")], function(request, response){
    database.db("photofeed").collection("uploads").insert({
        user: request.user.username,
        image: request.file.filename,
        date: new Date(),
        descript: request.descr
    });
    response.sendStatus(200);
})

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login", vjmServer.loginHandler)
app.post("/auth/register", function(request, response){
    database.db("photofeed").collection("users").insert({
        user: request.user.username,
        mobtel: request.auth.mobilenumber,
        date: new Date()
    });
    response.sendStatus(200);
})

app.get('/feed', vjmServer.jwtProtector, function(request, response) {
    database.db("photofeed").collection('uploads').find().sort({date: -1}).limit(10).toArray(function(err, documents) {
        response.json(documents)
    })
})

mongoClient.connect(urlMongo, function(err, db) {
    if (err) console.log(err.stack);

    database = db;
})
app.listen(80);
