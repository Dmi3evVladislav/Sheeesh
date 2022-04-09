const express = require("express"),
      vjm = require("vue-jwt-mongo"),
      mongoClient = require("mongodb").MongoClient;
      
const urlMongo = "mongodb://localhost/photofeed";

let app = express();
app.use(express.static("../client"));

let vjmServer = vjm.Server({
    mongoUrl: urlMongo,
    jwtSecret: "77B51637AC025FAE45AE4B00D34400116D205B5CB3F6F1393AAC862649EA7B06"
})

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login", vjmServer.loginHandler);

app.listen(80);