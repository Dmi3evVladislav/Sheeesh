let express = require("express"),
    cors = require("cors"),
    fs = require("fs");
let app = express();

app.use(cors());

app.use(express.static("../client"));


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

let rand = getRandomInt(3)

fs.readFile("database.txt", "utf-8", function (err, content) {
    line = content.split('\n')[rand];
    console.log(line);
});

app.get("/quote", function(request, response) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };
    
    let rand = getRandomInt(3)

    fs.readFile("database.txt", "utf-8", function (err, content) {
        line = content.split('\r\n')[rand];
        console.log(line);
        let quoteresp = {"number": rand+1, "text": line};
        let jsonqresp = JSON.stringify(quoteresp);
        response.send(jsonqresp);
        console.log(jsonqresp);
        console.log(JSON.parse(jsonqresp));
    });
    
})

app.listen(591)