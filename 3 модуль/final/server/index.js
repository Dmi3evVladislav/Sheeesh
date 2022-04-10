const express = require("express"),
      vjm = require("vue-jwt-mongo"),
      mongoClient = require("mongodb").MongoClient;

const urlMongo = "mongodb://localhost/photofeed";

let app = express();
app.use(express.static("../client"));

let vjmServer = vjm.Server({
    mongoUrl: urlMongo,
    jwtSecret: "D5B39E636CEF07D6F1F37D18B42159128C7A82F0F0F32295E519B9DC2CCCAA1C"
});

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login", vjmServer.loginHandler)

app.listen(80);
