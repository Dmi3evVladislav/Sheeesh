const { get } = require("jquery");

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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

let upload = multer({ dest: "../user_img"});
app.post("/upload", [vjmServer.jwtProtector, upload.single("picture")], function(request, response){
    database.db("photofeed").collection("uploads").insert({
        user: request.user.username,
        image: request.file.filename,
        date: new Date(),
        descript: request.body.descr,
        postid: getRandomInt(1000000000, 9999999999)
    });
    response.sendStatus(200);
});

 app.get("/profile", vjmServer.jwtProtector, function(request, response){
    let username = request.user.username;
    response.json(username)
 })

 app.get("/uploaduserinfo", vjmServer.jwtProtector, function(request, response){
    let username = request.user.username;
    let date = new Date()
    let uploaduserinfo = new Array(username, date)
    response.json(uploaduserinfo)
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

app.get('/feed/:postnum', vjmServer.jwtProtector, function(request, response) {
    let test = 3
    let limitnum = 10 + Number(request.params.postnum)
    database.db("photofeed").collection('uploads').find().sort({date: -1}).limit(limitnum).toArray(function(err, documents) {
        response.json(documents)
    })
})

app.get('/feed/post/:idpost', vjmServer.jwtProtector, function(request, response){
    let postid = Number(request.params.idpost)
    console.log(postid);
    database.db("photofeed").collection('uploads').find({"postid": postid}).sort({date: -1}).toArray(function(err, documents) {
        response.json(documents)
        console.log(documents);
    })
})

app.get('/proffeed/:index', vjmServer.jwtProtector, function(request, response) {
    database.db("photofeed").collection('uploads').find({'user' : request.params.index}).sort({date: -1}).toArray(function(err, documents) {
        let profimg = new Array(request.params.index, documents)
    response.json(profimg);
    })
})

mongoClient.connect(urlMongo, function(err, db) {
    if (err) console.log(err.stack);

    database = db;
})
app.listen(3000);
